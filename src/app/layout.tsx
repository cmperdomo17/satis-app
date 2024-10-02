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
    <html lang="en" className="min-h-full">
      <body
        className={`${titillium_normal.className} min-h-full bg-light dark:bg-dark overflow-y-auto overflow-x-hidden text-primary_dark dark:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="min-h-screen w-full flex justify-center items-center py-5">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
