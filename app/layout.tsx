import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

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
    <html lang="fr" suppressHydrationWarning className={`${inter.variable} antialiased dark`}>
      <body className="min-h-screen bg-[#0A0A0F] text-white">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
