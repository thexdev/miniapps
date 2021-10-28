import Head from 'next/head';
import { ReactNode } from 'react';

interface IProps {
  title: string;
  children: ReactNode;
}

const Page: React.FC<IProps> = (props: IProps) => {
  return (
    <>
      <Head>
        <title>It&apos;s Mini Apps - {props.title}</title>
      </Head>
      {props.children}
    </>
  );
};

export default Page;
