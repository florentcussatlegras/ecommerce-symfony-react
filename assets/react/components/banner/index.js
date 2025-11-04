import { Link, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
    BannerContainer,
    BannerContent,
    BannerDescription,
    BannerImage,
    BannerTitle,
    BannerShopButton
} from "../../../styles/banner";
import { Colors } from "../../../styles/theme";

export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <BannerContainer>
            <BannerImage src="/images/banner/banner.jpg" />
            <BannerContent>
                <Typography variant="h6">Huge Collection</Typography>
                <BannerTitle variant="h2">Nouvelle Collection</BannerTitle>

                <BannerDescription variant="subtitle">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500
                </BannerDescription>
                <BannerShopButton color="primary">
                    <Link href="/product/1" color={Colors.white} underline="none">
                        Voir les nouveautés    
                    </Link>
                </BannerShopButton>
            </BannerContent>
        </BannerContainer>
    );
}
