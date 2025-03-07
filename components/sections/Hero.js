import { Button } from '@heroui/react';

import Link from 'next/link';

const Hero = () => {
  return (
    <section className='relative'>
      {/* <div className='top-22 pointer-events-none absolute left-1/2 aspect-square h-full -translate-x-1/2'>
        <div className='absolute-center h-full w-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,92,244,.12)_0%,rgba(1,5,19,.12)_100%)]'></div>
        <div className='absolute-center h-[40%] w-[40%] rounded-full border'></div>
        <div className='absolute-center h-[60%] w-[60%] rounded-full border'></div>
        <div className='absolute-center h-[80%] w-[80%] rounded-full border'></div>
        <div className='absolute-center h-full w-full rounded-full border'></div>
        <div className='absolute-center h-[120%] w-[120%] rounded-full border'></div>
      </div> */}

      <div className='mx-auto max-w-7xl px-6 pb-20 pt-40 lg:px-8'>
        <div className='relative flex flex-col items-center text-center'>
          <div className='flex items-center justify-center gap-4 text-[12px] font-medium leading-6 lg:justify-start'>
            <p>Video editor</p>
            <svg
              viewBox='0 0 2 2'
              aria-hidden='true'
              className='mt-1 w-1 fill-current'
            >
              <circle cx='1' cy='1' r='1'></circle>
            </svg>
            <p>Asset creator</p>
            <svg
              viewBox='0 0 2 2'
              aria-hidden='true'
              className='mt-1 w-1 fill-current'
            >
              <circle cx='1' cy='1' r='1'></circle>
            </svg>
            <p>Content creator</p>
          </div>
          <h1 className='mb-6 max-w-6xl text-balance bg-gradient-to-b from-[#B8D3FA] to-[#E5EFFE] bg-clip-text text-6xl font-extralight text-transparent md:text-7xl md:leading-[1.25]'>
            Craft Epic Visual Stories That Captivate
          </h1>
          <p className='mb-14 max-w-3xl text-pretty text-lg font-light leading-none sm:text-xl/8'>
            With a thriving video editing agency based in the BD and over 1000+
            client videos edited. Siam isn’t just editing videos; he’s shaping
            the future of digital content. Whether you’re here to learn, laugh,
            or be amazed, you’re in the right place
          </p>

          <div className='flex items-center gap-3'>
            <Button
              as={Link}
              target='_blank'
              passHref
              href='mailto:muslamul.siam.official@gmail.com'
              size='lg'
              className='card border text-white'
            >
              Get in Touch
            </Button>
            <Link href='#projects' className='text-white hover:underline'>
              Discover works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
