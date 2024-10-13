import { titillium_normal } from "@/utils/fonts";
import Navbar from "@/components/navbar/navbar";
import { ThemeProvider } from "@/components/ui/darkmode/theme-provider"
import "./globals.css";
import DynamicBreadcrumb from "@/components/breadCrumb/breadcrumb";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
          <div className="min-h-screen w-full flex flex-col gap-4 justify-center items-center py-5 relative">
              <div className="absolute top-28 md:top-16 md:left-10">
                  <DynamicBreadcrumb />
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                  {children}
              </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
