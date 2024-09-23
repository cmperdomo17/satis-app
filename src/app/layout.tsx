import { titillium_normal } from "@/utils/fonts";
import Navbar from "@/components/navbar/navbar";
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
        <div className="flex flex-col items-center justify-center h-[100dvh] text-white">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
