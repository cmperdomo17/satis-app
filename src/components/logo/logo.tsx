import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Logo() {
    const { theme } = useTheme();
    const [logoSrc, setLogoSrc] = useState("/satis_logo.png");

    useEffect(() => {
        if (theme === "dark") {
            setLogoSrc("/satis_logo.png");
        } else {
            setLogoSrc("/satis_logo-light.png");
        }
    }, [theme]);

    return (
        <Image
            src={logoSrc}
            alt="Satis"
            width="230"
            height="230"
            priority
        />
    );
}