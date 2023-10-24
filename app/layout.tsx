// import type { AppProps } from "next/app";
import "../styles/globals.css";
import Script from "next/script";
import { Metadata } from "next";
import {
  author,
  canonical,
  description,
  handle,
  ogImage,
  siteIcon,
  title,
  twImage,
} from "@/constants/siteIdentity";

export const metadata: Metadata = {
  title: title,
  robots: { index: true, follow: true },
  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
  openGraph: {
    locale: "en_US",
    type: "website",
    title: title,
    description: description,
    siteName: author,
    url: canonical,
    images: [
      {
        url: ogImage,
        secureUrl: ogImage,
        type: "image/jpeg",
        width: "1200",
        height: "1200",
        alt: author,
      },
    ],
  },
  icons: {
    icon: "/favicon.png",
    apple: siteIcon,
  },
  twitter: {
    card: "summary",
    title: title,
    description: description,
    site: `@${handle}`,
    creator: `@${handle}`,
    images: {
      url: twImage,
      alt: author,
    },
  },
  manifest: "manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          strategy="lazyOnload"
          id="google-analytics-tag"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script strategy="lazyOnload" id="google-analytics">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
        `}
        </Script>
      </body>
    </html>
  );
}
