import type { NextPage } from 'next';
import AppCard from '../components/AppCard';
import Page from '../components/Page';

const Home: NextPage = () => {
  return (
    <Page title="It's Mini Apps - Welcome">
      <main className="px-3 mx-auto py-10 lg:px-0 lg:max-w-5xl">
        <h1 className="mb-12 text-4xl font-semibold lg:text-6xl lg:mb-32">
          Welcome!
        </h1>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <AppCard
            href="/calculate-percentage-increase"
            icon="/icons8-profit-analysis-48.png"
            name="Calculate Percentage Increase"
            description="Calculate how much a variable increased in percentage."
          />
          <AppCard
            href="/what-is-my-zodiac"
            icon="/icons8-crystal-ball-48.png"
            name="What Is My Zodiac"
            description="Find out your zodiac sign based on your birthday."
          />
        </div>
      </main>
    </Page>
  );
};

export default Home;
