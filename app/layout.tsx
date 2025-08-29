import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";
import { geistSans } from "@/components/ui/fonts";

export const metadata: Metadata = {
  title: "Todo App",
  description: "Website to create and manage your tasks easily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  
                  if (!theme) {
                    document.documentElement.setAttribute('data-theme', systemTheme);
                    return;
                  }
                  
                  if (theme === 'system') {
                    document.documentElement.setAttribute('data-theme', systemTheme);
                  } else {
                    document.documentElement.setAttribute('data-theme', theme);
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Toaster position="bottom-center" reverseOrder={false} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
