import { titillium_normal } from "@/utils/fonts";
import Navbar from "@/components/navbar/navbar";
import { ThemeProvider } from "@/components/ui/theme/theme-provider"
import "./globals.css";
import DynamicBreadcrumb from "@/components/breadCrumb/components/breadcrumb";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${titillium_normal.className} min-h-screen bg-light dark:bg-dark text-primary_dark dark:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow flex flex-col pt-20 md:pt-16">
              <div className="px-4 md:px-10">
                <DynamicBreadcrumb />
              </div>
              <div className="flex-grow p-3 flex flex-col items-center justify-center w-full">
                {children}
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
