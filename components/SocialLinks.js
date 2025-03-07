'use client';

import { useCursor } from '@/providers/CursorProvider';

import Magnetic from './Magnetic';
import Github from './ui/socials/Github';
import Gmail from './ui/socials/Gmail';
import Linkedin from './ui/socials/Linkedin';
import Whatsapp from './ui/socials/Whatsapp';

const SocialLinks = () => {
  const { updateCursor, resetCursor } = useCursor();
  return (
    <div className='pointer-events-none sticky bottom-8 z-[999] mb-8 w-full'>
      <div className='mx-auto max-w-screen-2xl px-10'>
        <div className='flex items-baseline justify-between'>
          <div
            onMouseEnter={() =>
              updateCursor({
                size: 40
              })
            }
            onMouseLeave={resetCursor}
            className='pointer-events-auto relative flex w-fit space-x-2 sm:-space-x-7 sm:hover:space-x-3'
          >
            <Github />
            <Linkedin />
            <Whatsapp />
            <Gmail />
          </div>
          <div className='pointer-events-auto'>
            <div className='group relative h-28 w-28'>
              <div className="absolute h-full w-full rounded-full bg-[#d7692a] bg-[url('https://www.adlift.com/wp-content/themes/adlift/webp/back_dec_footer.webp')] bg-cover bg-center bg-no-repeat" />
              <Magnetic>
                <div className='absolute-center box-content h-full w-full rounded-full border border-white/10 bg-neutral-950'></div>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
