import "./globals.css";
import { LanguageProvider } from "@context/LanguageContext";

export const metadata = {
  title: "Seiza Bench – Ergonomic Meditation Seat for Proper Seiza Posture",
  description:
    "Shop the original Seiza Bench – designed for meditation, posture support, and Japanese sitting style. Improve your comfort and wellness with a minimalist ergonomic seat.",
  keywords: [
    "Seiza bench",
    "meditation bench",
    "Japanese posture",
    "Seiza position",
    "ergonomic bench",
    "meditation seat",
    "yoga bench",
    "wellness furniture",
    "mindfulness product",
    "Seiza chair",
  ],
  authors: [{ name: "Seiza Shop Team", url: "https://seiza.shop/" }],
  creator: "Seiza Shop",
  publisher: "Seiza Shop",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://seiza.shop/",
    title: "Seiza Bench – Ergonomic Meditation Seat for Seiza Posture",
    description:
      "Discover the Seiza Bench – your ideal seat for meditation and posture. Minimalist, supportive, and crafted for comfort in traditional sitting.",
    siteName: "Seiza Shop",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "Meditation Product",
  classification: "Wellness & Lifestyle",
  metadataBase: new URL("https://seiza.shop/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "es-ES": "/es",
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
