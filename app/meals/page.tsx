import Link from 'next/link';
import MealsGrid from '@/components/meals/meals-grid';

import classes from './page.module.css';

import { getMeals } from '@/lib/meals';

export default async function Home() {
  const meals = await getMeals();
  return (
    <>
      {/* <header className={classes.header}>
        <div className={classes.slideshow}></div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header> */}
      <main className={classes.main}>
       <MealsGrid meals={meals} />
      </main>
    </>
  );
}
