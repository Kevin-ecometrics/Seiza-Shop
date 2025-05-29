import { LanguageProvider } from "../context/LanguageContext";
import { SEO } from "./metadata";

export const metadata = SEO;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
