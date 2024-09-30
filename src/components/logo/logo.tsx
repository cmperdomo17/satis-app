import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";

export default function Logo() {
    const { resolvedTheme } = useTheme();
    const [isLoaded, setIsLoaded] = useState(false);

    const logoSrc = resolvedTheme === 'light' ? "/satis_light.svg" : "/satis_dark.svg";

    return (
        <span>
            <Image
                src={logoSrc}
                alt="Satis"
                width={220}
                height={220}
                onLoadingComplete={() => setIsLoaded(true)}
                style={{
                    opacity: isLoaded ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out'
                }}
            />
        </span>
    );
}
