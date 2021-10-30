import { NextPage } from 'next';
import Image from 'next/image';
import { MouseEventHandler, useRef, useState } from 'react';
import Page from '../../components/Page';

const WhatIsMyZodiac: NextPage = () => {
  const [sign, setSign] = useState<string>();

  const inputRef = useRef<HTMLInputElement>(null);

  const checkZodiac: MouseEventHandler<HTMLButtonElement> = () => {
    fetch(`/api/zodiac/check?birthday=${inputRef.current!.value}`)
      .then((res) => res.json())
      .then((json) => {
        setSign((json.sign as string).toLowerCase());
      });
  };

  return (
    <Page title="What Is My Zodiac">
      <main className="p-2 mx-auto max-w-5xl lg:py-12">
        <section>
          <Image
            width="90"
            height="90"
            src="/zodiac/icons8-night.gif"
            alt="cloudy night"
          />
          <h1 className="mb-2 text-2xl font-semibold lg:mb-12 lg:text-3xl">
            Fill your birthday, get your zodiac!
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <div className="mb-2 flex">
                <input
                  className="mr-3 py-2 px-3 w-1/2 border rounded-lg flex-grow lg:flex-grow-0 focus:border-0 focus:ring-2 focus:ring-purple-300 focus:outline-none"
                  type="date"
                  ref={inputRef}
                />
                <button
                  className="py-2 px-3 bg-purple-300 rounded-lg font-semibold focus:outline-none"
                  onClick={checkZodiac}
                >
                  Get
                </button>
              </div>
              <small className="text-gray-600">
                Don&apos;t worry we don&apos;t collect your data for any
                business purpose
              </small>
              {sign && (
                <div className="mt-3 flex items-center lg:mt-10">
                  <div className="py-3 px-3.5 bg-gray-100 rounded-lg">
                    <Image
                      width="30"
                      height="30"
                      src={`/zodiac/icons8-${sign}-48.png`}
                      alt={`${sign} icon`}
                    />
                  </div>
                  <p className="ml-5 text-xl font-semibold">
                    Cool, your zodiac is{' '}
                    <span className="text-purple-400">{sign}</span>!
                  </p>
                </div>
              )}
            </div>
            <div>
              <hr className="mt-4 mb-8 lg:hidden" />
              <figure>
                <blockquote>
                  Our universe grants every soul a twin- a reflection of
                  themselves -the kindred spirit - And no matter where they are
                  or how far away they are from each other- even if they are in
                  different dimensions, they will always find one another. This
                  is destiny; this is love.
                </blockquote>
                <hr className="my-2 border-dashed" />
                <figcaption>
                  <a href="https://www.goodreads.com/author/show/2885905.Julie_Dillon">
                    -Julie Dillon, <cite>goodreads</cite>
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      </main>
    </Page>
  );
};

export default WhatIsMyZodiac;
