import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jay Natus Vincere - Full Stack Developer Portfolio",
  description: "Portfolio of Jay Natus Vincere - Full Stack Developer specializing in Next.js, Python, JavaScript, and modern web technologies.",
  keywords: ["Jay Natus Vincere", "Portfolio", "Full Stack Developer", "Next.js", "Python", "JavaScript", "Web Development"],
  authors: [{ name: "Jay Natus Vincere" }],
  openGraph: {
    title: "Jay Natus Vincere - Full Stack Developer",
    description: "Portfolio of a Full Stack Developer specializing in modern web technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
