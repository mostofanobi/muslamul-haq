import { QuoteUpIcon } from 'hugeicons-react';

import { testimonials } from '@/data';

import SectionHeader from '../common/SectionHeader';

const Testimonials = () => {
  return (
    <section
      id='testimonials'
      className='relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8'
    >
      <SectionHeader
        heading='The Impact of My Edits, Words from Satisfied Clients'
        subtitle='Testimonials'
      />

      <div className='relative z-10 grid grid-cols-1 gap-3 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,92,244,.12)_0%,rgba(1,5,19,.12)_100%)] py-10 lg:grid-cols-2'>
        {testimonials.map((feature, index) => (
          <Feature
            key={index}
            {...feature}
            index={index}
            lastIndex={testimonials.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

const Feature = ({ author, comment }) => {
  return (
    <div className='card group relative mx-auto flex max-w-2xl flex-col overflow-hidden rounded-2xl border px-0 py-10 lg:max-w-none'>
      <div className='pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-[#3C3B6150] to-transparent opacity-0 transition duration-200 group-hover:opacity-100' />

      <div className='relative z-10 mb-4 px-10 text-[#d4e8ff]'>
        <QuoteUpIcon />
      </div>

      <div className='relative z-10 mb-8 px-10 text-lg font-bold'>
        <div className='absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-[hsla(221,28%,43%,.4)] transition-all duration-200 group-hover:h-8 group-hover:bg-[#005cf4] group-hover:shadow-[0_0_100px_25px_#005cf4,0_0_40px_2px_#005cf4]' />
        <span className='inline-block text-[#d4e8ff] transition duration-200 group-hover:translate-x-2'>
          {author}
        </span>
      </div>

      <blockquote className='px-10 text-lg/8'>“{comment}”</blockquote>
    </div>
  );
};

export default Testimonials;
