import { Navbar, Footer } from "@/components/layout";
import { CustomCursorProvider } from "@/components/providers/custom-cursor-provider";
import { KonamiEasterEgg } from "@/components/providers/konami-easter-egg";
import { OnekoProvider } from "@/components/providers/oneko-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SceneBackground } from "@/components/ui/scene-background";
import { siteMetadata } from "@/config/site";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontVariables} h-full overflow-x-clip font-sans antialiased`}
    >
      <body className="relative flex min-h-full flex-col overflow-x-clip bg-background pb-[env(safe-area-inset-bottom)] text-foreground">
        <ThemeProvider>
          <CustomCursorProvider>
            <SceneBackground />
            <SmoothScrollProvider>
              <Navbar />
              <main className="relative z-10">{children}</main>
              <Footer />
              <OnekoProvider />
              <KonamiEasterEgg />
            </SmoothScrollProvider>
          </CustomCursorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
