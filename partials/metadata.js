import Head from "next/head";
import {
  author,
  canonical,
  description,
  handle,
  ogImage,
  siteIcon,
  title,
  twImage,
} from "../constants/siteIdentity";
const MetaData = () => (
  <Head>
    {/* <meta charset="UTF-8" key="charset" /> */}
    {/* <meta http-equiv="X-UA-Compatible" content="IE=edge" key="ie" /> */}
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
      key="viewport"
    />

    <meta name="author" content={author} key="author" />
    <title>{title}</title>
    <meta name="description" content={description} key="description" />
    <link rel="canonical" href={canonical} key="canonical" />

    <meta property="og:type" content="website" key="type" />
    <meta property="og:title" content={title} key="title" />
    <meta name="og:description" property="og:description" content={description} />
    <meta property="og:locale" content="en_US" key="locale" />
    <meta property="og:site_name" content={author} key="siteName" />
    <meta property="og:url" content={canonical} key="url" />
    <meta property="og:image" content={ogImage} key="image" />
    <meta property="og:image:secure_url" content={ogImage} />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="1200" />
    <meta property="og:image:alt" content={author} />

    <meta name="twitter:card" content="summary" key="twitter-card" />
    <meta name="twitter:title" content={title} key="twitter-title" />
    <meta name="twitter:description" content={description} key="twitter-description" />
    <meta name="twitter:site" content={"@" + handle} key="twitter-site" />
    <meta name="twitter:creator" content={"@" + handle} key="twitter-creator" />
    <meta name="twitter:image" content={twImage} key="twitter-image" />
    <meta property="twitter:image:alt" content={author} />

    <link rel="icon" type="image/png" href="/favicon.png" key="favicon" />
    <link rel="apple-touch-icon" href={siteIcon} key="apple-icon" />

    <link rel="manifest" href="manifest.json" key="manifest" />
  </Head>
);
export default MetaData;
