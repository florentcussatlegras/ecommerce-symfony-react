import {
    Box,
    Grid,
    Typography,
    List,
    ListItemText,
    Stack,
    Button
} from "@mui/material";
import { FooterTitle, SubscribeTf } from "../../../styles/footer";
import { Colors } from "../../../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";

export default function Footer2() {
    return (
        <Box
            sx={{
                background: Colors.shaft,
                color: Colors.white,
                p: { xs: 4, md: 10 },
                pt: 12,
                pb: 12,
                fontSize: { xs: "12px", md: "14px" },
            }}
        >
            <Grid container spacing={2} justifyContent="center" md={2}>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">About us</FooterTitle>
                    <Typography variant="caption2">
                        LoremIpsum officia ea nostrud esse. Nisi dolor
                        reprehenderit est consequat veniam sunt Lorem
                        exercitation in nostrud. Qui anim sunt irure ex sint
                        anim labore proident consequat mollit exercitation
                        incididunt est laboris. Laboris occaecat consequat non
                        in nisi deserunt officia Lorem nulla reprehenderit
                        cupidatat adipisicing. Cupidatat ex labore in ut
                        deserunt laborum in aute do velit ullamco. Reprehenderit
                        velit tempor cillum Lorem esse proident pariatur
                        cupidatat cupidatat nostrud ea officia.
                    </Typography>
                    <Box
                        sx={{
                            mt: 4,
                            color: Colors.dove_gray,
                        }}
                    >
                        <FacebookIcon sx={{ mr: 1 }} />
                        <TwitterIcon sx={{ mr: 1 }} />
                        <InstagramIcon />
                    </Box>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">information</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                About us
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Order Tracking
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Privary &amp; Policy
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Terms &amp; Conditions
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">My account</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Login
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                My Cart
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                My Account
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Wishlist
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={4}>
                    <FooterTitle variant="body1">newsletter</FooterTitle>
                    <Stack>
                        <SubscribeTf
                            color="primary"
                            label="Email address"
                            variant="standard"
                        />
                        <Button
                            startIcon={
                                <SendIcon sx={{ color: Colors.white }} />
                            }
                            sx={{ mt: 4, mb: 4 }}
                            variant="contained"
                        >
                            Subscribe
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}
