import { useTheme } from "next-themes";
import Image from "next/image";

export default function Logo() {
    const { theme } = useTheme();

    const logoSrc = theme === 'light'
        ? "/satis_dark.svg"
        : "/satis_light.svg";

    return (
        <Image
            src={logoSrc}
            alt="Satis"
            width={220}
            height={220}
        />
    );
}