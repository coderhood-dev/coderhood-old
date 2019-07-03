import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';

const Head = ({ title, description, url, ogImage }) => (
  <NextHead>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta name="twitter:site" content={url} />
    <meta name="twitter:image" content={ogImage} />
    <meta property="og:image" content={ogImage} />
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

Head.defaultProps = {
  title: 'Code Garage',
  description: '',
  url: '',
  ogImage: '',
};

export default Head;
