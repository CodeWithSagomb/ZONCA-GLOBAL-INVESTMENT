import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Product } from '../../types';

export const OrganizationSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zonca Global Investment Ltd",
    "url": "https://zoncaglobal.com",
    "logo": "https://zoncaglobal.com/logo.png",
    "description": "Leading provider of aluminium extrusion and architectural systems in Nigeria and West Africa",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "48 Lambe Iluyomade Street",
      "addressLocality": "Okota",
      "addressRegion": "Lagos",
      "postalCode": "",
      "addressCountry": "NG"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+234-805-540-8624",
      "contactType": "sales",
      "email": "zoncaglobalinvestment@gmail.com",
      "availableLanguage": ["en", "fr"]
    },
    "founder": {
      "@type": "Person",
      "name": "Emmanuel Senameh",
      "jobTitle": "CEO & Founder"
    },
    "foundingDate": "2010",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "50"
    },
    "sameAs": [
      "https://linkedin.com/company/zonca-global",
      "https://instagram.com/zoncaglobal"
    ],
    "areaServed": {
      "@type": "Place",
      "name": "West Africa"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certification",
        "name": "ISO 9001:2015"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certification",
        "name": "SONCAP Certified"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

interface ProductSchemaProps {
  product: Product;
}

export const ProductSchema: React.FC<ProductSchemaProps> = ({ product }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.shortDesc,
    "image": product.image,
    "brand": {
      "@type": "Brand",
      "name": "Zonca Global Investment"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Zonca Global Investment Ltd"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "NGN",
      "seller": {
        "@type": "Organization",
        "name": "Zonca Global Investment Ltd"
      }
    },
    "category": product.category
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export const LocalBusinessSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Zonca Global Investment Ltd",
    "image": "https://zoncaglobal.com/logo.png",
    "@id": "https://zoncaglobal.com",
    "url": "https://zoncaglobal.com",
    "telephone": "+234-805-540-8624",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "48 Lambe Iluyomade Street",
      "addressLocality": "Okota",
      "addressRegion": "Lagos",
      "addressCountry": "NG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 6.4968,
      "longitude": 3.3792
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
