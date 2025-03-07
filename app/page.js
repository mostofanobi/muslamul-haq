'use client';

import Benefits from '@/components/sections/Benefits';
import Contact from '@/components/sections/Contact';
import FeaturesSection from '@/components/sections/Features';
import Hero from '@/components/sections/Hero';
import Pricing from '@/components/sections/Pricing';
import Profile from '@/components/sections/Profile';
import { Projects } from '@/components/sections/Projects';
import Testimonials from '@/components/sections/Testimonials';
import bgHero from '@/public/images/hero.png';

const Home = () => {
  return (
    <div className='relative h-full w-full'>
      <Profile />

      <main className='relative z-10 space-y-40'>
        <div id='header' className='relative'>
          <img
            src={bgHero.src}
            alt=''
            className='absolute left-0 right-0 top-0 h-full w-full opacity-80'
          />
          <div className='absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-b from-transparent via-[#010513] to-[#010513]'></div>

          {/* HERO */}
          <Hero />
          {/* HERO */}

          {/* FEATURES */}
          <FeaturesSection />
          {/* FEATURES */}
        </div>

        <div className='relative space-y-40'>
          {/* PROJECTS */}
          <Projects />
          {/* PROJECTS */}

          {/* TESTIMONIALS */}
          <Testimonials />
          {/* TESTIMONIALS */}

          {/* BENEFITS */}
          <Benefits />
          {/* BENEFITS */}

          {/* PRICING */}
          <Pricing />
          {/* PRICING */}

          {/* CONTACT */}
          <Contact />
          {/* CONTACT */}
        </div>
      </main>
      {/* Scrollable Content */}
    </div>
  );
};

export default Home;
