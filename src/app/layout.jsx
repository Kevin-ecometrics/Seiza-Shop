import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

export const metadata = {
  title: {
    default: "Seiza Store - Tienda Online Moderna",
    template: "%s | Seiza Store",
  },
  description:
    "Descubre los mejores productos en Seiza Store. Tu tienda online moderna con envío gratuito y atención personalizada.",
  keywords: [
    "tienda online",
    "e-commerce",
    "productos",
    "compras online",
    "envío gratuito",
    "seiza store",
    "moda",
    "tecnología",
    "hogar",
  ],
  authors: [
    { name: "Tu Nombre" },
    { name: "Seiza Store Team", url: "https://seizastore.com" },
  ],
  creator: "Seiza Store",
  publisher: "Seiza Store",

  // Open Graph (Facebook, WhatsApp, etc.)
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://seizastore.com",
    title: "Seiza Store - Tienda Online Moderna",
    description:
      "Descubre los mejores productos en Seiza Store. Tu tienda online moderna con envío gratuito y atención personalizada.",
    siteName: "Seiza Store",
    images: [
      {
        url: "/og-image.jpg", // Agrega esta imagen a tu carpeta public
        width: 1200,
        height: 630,
        alt: "Seiza Store - Tienda Online",
      },
    ],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Información adicional
  category: "e-commerce",
  classification: "Tienda Online",

  // Metadata adicional
  metadataBase: new URL("https://seizastore.com"), // Cambia por tu dominio
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/es",
      "en-US": "/en",
    },
  },

  // Iconos
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="overflow-x-hidden">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
