import type { Metadata } from "next";
import "./styles.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Prisca | Modern Portfolio",
  description: "Portfolio moderne avec navigation horizontale",
};

export default function ModernLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <LanguageProvider>
        <div className="modern-portfolio">
          {children}
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
