import { LanguageProvider } from "@context/LanguageContext";
import { SEO } from "./metadata";

export const metadata = SEO;

export default function RootLayout({ children }) {
  return (
    <>
      <LanguageProvider>{children}</LanguageProvider>
    </>
  );
}
