import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./modern/styles.css";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "./modern/contexts/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Prisca HASINARIVELO | Développeur Full Stack",
  description: "Portfolio de Prisca HASINARIVELO, Développeur Confirmé spécialisé en Java, Web et développement mobile. Expertise en React, Next.js, Node.js et technologies modernes.",
  keywords: ["développeur", "full stack", "java", "react", "nextjs", "web", "mobile", "portfolio"],
  authors: [{ name: "Prisca HASINARIVELO" }],
  openGraph: {
    title: "Prisca HASINARIVELO | Développeur Full Stack",
    description: "Développeur Confirmé spécialisé en Java, Web et développement mobile",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${inter.variable} antialiased`}>
      <body className="min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
