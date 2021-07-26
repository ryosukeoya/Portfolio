import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

type Props = {
  portfolio: any;
};

const Portfolio: React.VFC<Props> = ({ portfolio }: Props) => {
  const { title, link, image, alt, explain, technology } = portfolio.fields;
  const url = image.fields.file.url;

  return (
    <div className="pb-14">
      <p className="text-xl font-semibold pb-7">{title}</p>
      <Link href={link}>
        <a>
          <Image src={`https://${url}`} alt={alt} className="cursor-pointer" width={150} height={150} />
        </a>
      </Link>
      <p className="text-left pt-6 pb-3">{documentToReactComponents(explain)}</p>
      <p>{technology}</p>
    </div>
  );
};

export default Portfolio;
