import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

export const metadata = {
  title: "Seiza Shop - Modern Online Shop for Wellness and Lifestyle",
  description:
    "Explore top-quality wellness, lifestyle, and home products at Seiza Shop. Enjoy a personalized shopping experience with fast and free shipping.",
  keywords: [
    "online Shop",
    "e-commerce",
    "products",
    "online shopping",
    "free shipping",
    "seiza Shop",
    "fashion",
    "technology",
    "home",
  ],
  authors: [{ name: "Seiza Shop Team", url: "http://seiza.shop/" }],
  creator: "Seiza Shop",
  publisher: "Seiza Shop",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "http://seiza.shop/",
    title: "Seiza Shop - Modern Online Shop for Wellness and Lifestyle",
    description:
      "Explore wellness, lifestyle, and home essentials at Seiza Shop. Shop confidently with free shipping, curated collections, and reliable support.",
    siteName: "Seiza Shop",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Seiza Shop - Online Shopping",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "e-commerce",
  classification: "Online Shop",
  metadataBase: new URL("http://seiza.shop/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "es-ES": "/es",
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
