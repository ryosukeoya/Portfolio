import Link from 'next/link';
import Image from 'next/image';
import React, { FC } from 'react';
import clsx from 'clsx';
import Typed from 'react-typed';

const section = {
  title: 'text-2xl font-semibold',
  paragraph: 'py-4',
};

export const About: FC = () => {
  return (
    <>
      <div className='h-auto xsm:h-24 md:h-28'>
        <Typed
          className='whitespace-pre-wrap text-2.5xl tracking-wider font-semibold leading-relaxed md:text-4xl md:leading-relaxed md:font-bold'
          strings={[`Hi! I'm Ryosuke👋,\nA software developer.`]}
          typeSpeed={45}
        />
      </div>
      <h1 className={clsx(section.title, 'pt-14')}>About</h1>
      <p className={section.paragraph}>
        東京でエンジニアをしているRyosukeです。大学の電気電子工学科卒業後、１年半ほどニートを経験。。
        <br />
        その後、少人数の受託会社に入社し、フルスタックな開発を経験しました。
        <br />
        その会社では、バックエンドはLaravel、フロントエンドはJavaScriptやjQueryなどの技術を経験しました。
        <br />
        趣味は洋楽やEDMなどの音楽を聞くことや筋トレとサウナが好きです。
        <br />
        将来はいろんな人に使われるサービスを作ってみたい。
      </p>
      <h1 className={clsx(section.title, 'pt-12')}>Contact</h1>
      <div className={clsx('flex flex-row justify-between w-full max-w-sm', section.paragraph)}>
        {images.map((image, index: number) => (
          <Link key={index} href={image.href}>
            <a target={image.target} rel={image.rel} className={'hover:scale-110'}>
              <Image src={image.src} alt={image.alt} height={32} width={32} />
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

const images = [
  {
    href: 'mailto:engineerxx1245.gmail.com',
    target: '_self',
    rel: '',
    src: '/images/gmail.svg',
    alt: 'Gmail',
  },
  {
    href: 'https://x.com/ryosuke_tech',
    target: '_blank',
    rel: '',
    src: '/images/x.svg',
    alt: 'X',
  },
  {
    href: 'https://github.com/ryosuke1256',
    target: '_blank',
    rel: 'noopener noreferrer',
    src: '/images/github.png',
    alt: 'GitHub',
  },
  {
    href: 'https://zenn.dev/reactlover',
    target: '_blank',
    rel: 'noopener noreferrer',
    src: '/images/zenn.svg',
    alt: 'Zenn',
  },
  {
    href: 'https://qiita.com/e8750520',
    target: '_blank',
    rel: 'noopener noreferrer',
    src: '/images/qiita.png',
    alt: 'Qiita',
  },
  {
    href: 'https://koeru.blog/',
    target: '_blank',
    rel: 'noopener noreferrer',
    src: '/images/blog.png',
    alt: 'MyBlog',
  },
] as const;
