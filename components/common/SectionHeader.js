import Divider from '../ui/Divider';

const SectionHeader = ({ subtitle, heading }) => {
  return (
    <div className='bg-[radial-gradient(30.09%_126.79%_at_51.82%_5.06%,rgba(0,92,244,.22)_0,rgba(18,22,31,0)_100%)] pt-20 md:pt-32'>
      <Divider />
      <div className='mb-16 flex flex-col justify-center gap-8 text-center lg:mb-20'>
        <p className='text-[10px] uppercase tracking-[1em] text-[#d4e8ffb3] sm:text-[12px]'>
          {subtitle}
        </p>

        <h1 className='mx-auto block max-w-2xl text-pretty bg-gradient-to-b from-[#B8D3FA] to-[#E5EFFE] bg-clip-text text-center text-3xl font-extralight leading-tight text-transparent sm:leading-tight lg:text-[clamp(2rem,6vw,3rem)] lg:leading-tight'>
          {heading}
        </h1>
      </div>
    </div>
  );
};

export default SectionHeader;
