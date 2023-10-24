import Image from "next/image";

// replace [yourprojectname] and [yourdomain.com] with your actual project name and (custom) domain
const cloudflareImageLoader = ({ src, width, quality }: any) => {
  if (!quality) {
    quality = 75;
  }
  return `https://images.[yourprojectname].workers.dev?width=${width}&quality=${quality}&image=https://[yourdomain.com]${src}`;
};

export default function Img(props: any) {
  if (process.env.NODE_ENV === "development") {
    return <Image unoptimized={true} {...props} />;
  } else {
    return <Image {...props} loader={cloudflareImageLoader} />;
  }
}
