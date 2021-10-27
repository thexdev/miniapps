import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>It's Mini Apps - Welcome</title>
      </Head>
      <main className="px-3 mx-auto py-10 lg:px-0 lg:max-w-5xl">
        <h1 className="mb-12 text-4xl font-semibold lg:text-6xl lg:mb-32">
          Welcome!
        </h1>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <Link href="/calculate-percentage-increase">
            <a className="flex">
              <div className="mr-3">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <img
                    src="/icons8-profit-analysis-48.png"
                    alt="profit analysis"
                  />
                </div>
              </div>
              <div>
                <h2 className="mb-2 font-semibold lg:text-lg">
                  Calculate Percentage Increase
                </h2>
                <p className="text-sm text-gray-500">
                  Calculate how much a variable increased in percentage.
                </p>
              </div>
            </a>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
