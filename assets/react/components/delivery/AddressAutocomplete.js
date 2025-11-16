import React, { useState, useCallback } from "react";
import { Autocomplete, TextField, CircularProgress } from "@mui/material";

export default function AddressAutocomplete({ formData, setFormData, errors }) {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const controllerRef = React.useRef(null);

  const fetchAddresses = useCallback(async (query) => {
    if (!query || query.trim().length < 3) return [];

    if (controllerRef.current) controllerRef.current.abort();
    controllerRef.current = new AbortController();

    try {
      setLoading(true);
      const url = `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(
        query
      )}&limit=6`;
      const res = await fetch(url, { signal: controllerRef.current.signal });
      if (!res.ok) {
        setLoading(false);
        return [];
      }
      const json = await res.json();

      const results = (json.features || []).map((f) => ({
        label: f.properties.label, // ex : "10 Rue Victor Hugo 75008 Paris"
      }));

      setLoading(false);
      return results;
    } catch (e) {
      setLoading(false);
      return [];
    }
  }, []);

  const debouncedFetch = useCallback(
    (() => {
      let t;
      return (q) => {
        if (t) clearTimeout(t);
        t = setTimeout(async () => {
          const res = await fetchAddresses(q);
          setOptions(res);
        }, 300);
      };
    })(),
    [fetchAddresses]
  );

  const handleInputChange = (event, value, reason) => {
    setFormData((prev) => ({ ...prev, address: value }));

    if (reason === "input") {
      if (!value || value.trim().length < 3) {
        setOptions([]);
        return;
      }
      debouncedFetch(value);
    }
  };

  const handleChange = (event, newValue) => {
    if (!newValue) {
      setFormData((prev) => ({ ...prev, address: "" }));
      return;
    }

    const finalAddress =
      typeof newValue === "string" ? newValue : newValue.label;

    setFormData((prev) => ({ ...prev, address: finalAddress }));
    setOptions([]);
  };

  return (
    <Autocomplete
      freeSolo
      options={options}
      getOptionLabel={(option) =>
        typeof option === "string" ? option : option.label
      }
      filterOptions={(x) => x}
      onInputChange={handleInputChange}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Adresse complète"
          variant="outlined"
          error={!!errors.address}
          helperText={errors.address}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}
