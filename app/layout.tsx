import "./globals.css";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import { Nav } from "@/components/nav";
import { SearchProvider } from "@/lib/search-context";

export const metadata = {
  metadataBase: new URL("https://luna"),
  title: "12 Bones Smokehouse and Brewing - powered by Luna",
  description:
    "Restaurant analytics and operational insights powered by Luna's natural language processing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistMono.className} ${GeistSans.className}`}>
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" enableSystem={false}>
          <SearchProvider>
            <Nav />
            {children}
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
