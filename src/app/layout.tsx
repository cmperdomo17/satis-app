import { titillium_normal } from "@/utils/fonts";
import Navbar from "@/components/navbar/navbar";
import { ThemeProvider } from "@/components/ui/darkmode/theme-provider"
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          >
            <div className="bg-light dark:bg-dark flex flex-col items-center justify-center h-[100dvh] text-primary_dark dark:text-white">
              <Navbar />
              {children}
            </div>
          </ThemeProvider>
      </body>
    </html>
  );
}
