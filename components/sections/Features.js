import { features } from '@/data';

const Features = () => {
  return (
    <div className='-[radial-gradient(50%_50%_at_50%_50%,rgba(0,92,244,.12)_0%,rgba(1,5,19,.12)_100%)] relative z-10 mx-auto max-w-7xl px-6 lg:px-8'>
      <div className='relative grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'>
        {features.map((feature, index) => (
          <Feature
            key={feature.title}
            {...feature}
            index={index}
            lastIndex={features.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

const Feature = ({ title, description, icon, index, lastIndex }) => {
  return (
    <div className='card group relative flex flex-col overflow-hidden rounded-3xl border px-0 py-8'>
      <div className='pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-[#3C3B6150] to-transparent opacity-0 transition duration-200 group-hover:opacity-100' />

      <div className='relative z-10 mb-4 px-10 text-[#d4e8ff]'>{icon}</div>
      <div className='relative z-10 mb-2 px-10 text-lg font-bold'>
        <div className='absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-[hsla(221,28%,43%,.4)] transition-all duration-200 group-hover:h-8 group-hover:bg-[#005cf4] group-hover:shadow-[0_0_100px_25px_#005cf4,0_0_40px_2px_#005cf4]' />
        <span className='inline-block font-semibold text-[#d4e8ff] transition duration-200 group-hover:translate-x-2'>
          {title}
        </span>
      </div>
      <p className='relative z-10 max-w-xs pl-10 pr-3 text-sm text-[#d4e8ffb3]'>
        {description}
      </p>
    </div>
  );
};

export default Features;
