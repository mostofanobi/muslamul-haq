'use client';

import {
  Dollar01Icon,
  Folder01Icon,
  Home01Icon,
  Shaka02Icon,
  StarIcon
} from 'hugeicons-react';

import Benefits from '@/components/sections/Benefits';
import Contact from '@/components/sections/Contact';
import FeaturesSection from '@/components/sections/Features';
import Hero from '@/components/sections/Hero';
import Pricing from '@/components/sections/Pricing';
import Profile from '@/components/sections/Profile';
import Testimonials from '@/components/sections/Testimonials';
import { Projects } from '@/components/ui/Projects';
import bgHero from '@/public/images/hero.png';

const links = [
  {
    title: 'Home',
    icon: <Home01Icon className='h-full w-full text-white' />,
    href: '#header'
  },
  {
    title: 'Projects',
    icon: <Folder01Icon className='h-full w-full text-white' />,
    href: '#projects'
  },

  {
    title: 'Testimonials',
    icon: <StarIcon className='h-full w-full text-white' />,
    href: '#testimonials'
  },
  {
    title: 'Pricing',
    icon: <Dollar01Icon className='h-full w-full text-white' />,
    href: '#pricing'
  },
  {
    title: 'Contact',
    icon: <Shaka02Icon className='h-full w-full text-white' />,
    href: '#contact'
  }
  // {
  //   title: 'Changelog',
  //   icon: (
  //     <ArrowRight01Icon className='h-full w-full text-white' />
  //   ),
  //   href: '#'
  // },

  // {
  //   title: 'Twitter',
  //   icon: (
  //     <ArrowRight01Icon className='h-full w-full text-white' />
  //   ),
  //   href: '#'
  // },
  // {
  //   title: 'GitHub',
  //   icon: (
  //     <ArrowRight01Icon className='h-full w-full text-white' />
  //   ),
  //   href: '#'
  // }
];

const Home = () => {
  const words = ['better', 'cute', 'beautiful', 'modern'];

  return (
    <div className='relative h-full w-full'>
      {/* Background Image */}
      {/* <div className="absolute inset-0 h-full w-full bg-[#010513] bg-[url('https://invertase.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3c46bbc15860410e7980ad8b9cb734cd.svg&w=1920&q=75')] bg-cover bg-fixed bg-center"></div> */}
      <Profile />
      {/* NAVBAR */}
      {/* <Nav /> */}
      {/* <div className='fixed bottom-8 left-1/2 z-50 -translate-x-1/2'>
        <FloatingDock items={links} />
      </div> */}
      {/* NAVBAR */}
      {/* Scrollable Content */}
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
