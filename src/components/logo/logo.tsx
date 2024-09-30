import { useTheme } from "next-themes";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Logo() {
    const { resolvedTheme } = useTheme();
    const [isLoaded, setIsLoaded] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // Solo renderiza el logo cuando el tema esté montado
    }

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
