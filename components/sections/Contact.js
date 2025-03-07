import Link from 'next/link';

import { contacts } from '@/data';
import bgHero from '@/public/images/contact.png';

import SectionHeader from '../common/SectionHeader';

const Contact = () => {
  return (
    <section id='contact' className='relative'>
      <img
        src={bgHero.src}
        alt=''
        className='absolute left-0 right-0 top-0 h-full w-full opacity-40'
      />
      <div className='absolute left-0 top-0 h-1/2 w-full bg-gradient-to-t from-transparent via-[#010513] to-[#010513]'></div>

      <div className='relative mx-auto max-w-xl px-6 pb-32 lg:max-w-7xl lg:px-8'>
        <SectionHeader
          subtitle={contacts.subtitle}
          heading={contacts.heading}
        />

        <div className='relative z-10 grid grid-cols-1 gap-3 py-10 lg:grid-cols-3'>
          {contacts.data.map((feature) => (
            <ContactCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({ title, icon, description, href }) => {
  return (
    <Link
      href={href}
      target='_blank'
      passHref={true}
      className='card group relative flex flex-col overflow-hidden rounded-3xl border px-0 py-6 sm:py-8'
    >
      <div className='pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-[#e2e8ff1f] to-transparent opacity-0 transition duration-200 group-hover:opacity-100' />

      <div className='relative z-10 mb-4 px-6 text-zinc-100 sm:px-10'>
        {icon}
      </div>
      <div className='relative z-10 mb-8 px-6 text-lg font-bold sm:px-10'>
        <div className='absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-[hsla(221,28%,43%,.4)] transition-all duration-200 group-hover:h-8 group-hover:bg-[#005cf4] group-hover:shadow-[0_0_100px_25px_#005cf4,0_0_40px_2px_#005cf4]' />
        <span className='inline-block text-zinc-100 transition duration-200 group-hover:translate-x-2'>
          {title}
        </span>
      </div>

      <blockquote className='px-6 text-lg/8 sm:px-10'>{description}</blockquote>
    </Link>
  );
};

export default Contact;
