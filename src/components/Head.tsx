import React from 'react';
import NextHead from 'next/head';

interface Props {
  title?: string;
  description?: string;
  url?: string;
  ogImage?: string;
}

const Head: React.FC<Props> = ({ title, description, url, ogImage }) => (
  <NextHead>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImage} />
    <meta name="twitter:site" content={url} />
    <meta name="twitter:image" content={ogImage} />
  </NextHead>
);

export default Head;
