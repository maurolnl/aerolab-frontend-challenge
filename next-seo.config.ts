const title = "Aerolab Frontend Challenge";
const description = "Frontend challenge for Aerolab job application";

const SEO = {
  title,
  description,
  canonical: "https://aerolab-frontend-challenge-ebon.vercel.app/",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://aerolab-frontend-challenge-ebon.vercel.app/",
    title,
    description,
    images: [
      {
        url: "https://aerolab-frontend-challenge-ebon.vercel.app/Metadata.png",
        alt: title,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    handle: "@maurolquiroga",
    cardType: "summary_large_image",
  },
};

export default SEO;
