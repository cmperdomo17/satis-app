import { titillium_normal } from "@/utils/fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={titillium_normal.className}
      >
        <div className="flex justify-center items-center h-[100dvh] bg-primary_dark text-white">
          {children}
        </div>
      </body>
    </html>
  );
}
