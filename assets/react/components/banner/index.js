import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "../../../styles/banner";

export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <BannerContainer>
            <BannerImage src="/images/banner/banner.jpg" />
            <BannerContent>
                <Typography variant="h6">Huge Collection</Typography>
                <BannerTitle variant="h2">
                    New Bags
                </BannerTitle>

                <BannerDescription variant="subtitle">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500
                </BannerDescription>
            </BannerContent>
        </BannerContainer>
    );
}
