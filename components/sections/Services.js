import { services } from '@/data';

import SectionHeader from '../common/SectionHeader';

const Services = () => {
  return (
    <section id='services' className='relative'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <SectionHeader
          subtitle={services.subtitle}
          heading={services.heading}
        />
        {/* <div className='relative z-10 mx-auto max-w-7xl bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,92,244,.12)_0%,rgba(1,5,19,.12)_100%)] px-6 lg:px-8'> */}
        <div className='relative grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4'>
          {services.data.map((service, index) => (
            <Service key={service.title} service={service} />
          ))}
        </div>

        <div className='mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2'>
          <div className='relative lg:col-span-3'>
            <div className='absolute inset-px rounded-lg max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]'></div>
            <div className='card relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] border max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]'>
              {/* <img
                className='h-80 object-cover object-left'
                src='https://tailwindui.com/plus-assets/img/component-images/bento-01-performance.png'
                alt=''
              /> */}
              <div className='p-10'>
                <div className='flex h-52 items-end gap-4'>
                  <div className='h-1/2 w-8 rounded-full bg-gray-700'></div>
                  <div className='h-2/3 w-8 rounded-full bg-gray-700'></div>
                  <div className='h-3/5 w-8 rounded-full bg-gray-700'></div>
                  <div className='h-full w-8 rounded-full bg-[#d4e8ff]'></div>
                  <div className='h-1/2 w-8 rounded-full bg-gray-700'></div>
                  <div className='h-3/5 w-8 rounded-full bg-gray-700'></div>
                </div>
              </div>
              <div className='p-10 pt-4'>
                <h3 className='inline-block rounded-full border bg-indigo-500/40 px-2 text-sm/4 font-semibold text-[#d4e8ff]'>
                  View
                </h3>
                <p className='mt-2 text-lg font-medium tracking-tight text-[#d4e8ff]'>
                  High Quality Edit
                </p>
                <p className='mt-2 max-w-lg text-sm/6'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  gravida justo et nulla efficitur, maximus egestas sem
                  pellentesque.
                </p>
              </div>
            </div>
            <div className='pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]'></div>
          </div>
          <div className='relative lg:col-span-3'>
            <div className='absolute inset-px rounded-lg lg:rounded-tr-[2rem]'></div>
            <div className='relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]'>
              <img
                className='h-80 object-cover object-left lg:object-right'
                src='https://tailwindui.com/plus-assets/img/component-images/bento-01-releases.png'
                alt=''
              />
              <div className='p-10 pt-4'>
                <h3 className='text-sm/4 font-semibold text-indigo-600'>
                  Releases
                </h3>
                <p className='mt-2 text-lg font-medium tracking-tight text-gray-950'>
                  Push to deploy
                </p>
                <p className='mt-2 max-w-lg text-sm/6 text-gray-600'>
                  Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus
                  massa, laoreet dapibus ex elit vitae odio.
                </p>
              </div>
            </div>
            <div className='pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]'></div>
          </div>
          <div className='relative lg:col-span-2'>
            <div className='absolute inset-px rounded-lg lg:rounded-bl-[2rem]'></div>
            <div className='relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]'>
              <img
                className='h-80 object-cover object-left'
                src='https://tailwindui.com/plus-assets/img/component-images/bento-01-speed.png'
                alt=''
              />
              <div className='p-10 pt-4'>
                <h3 className='text-sm/4 font-semibold text-indigo-600'>
                  Speed
                </h3>
                <p className='mt-2 text-lg font-medium tracking-tight text-gray-950'>
                  Built for power users
                </p>
                <p className='mt-2 max-w-lg text-sm/6 text-gray-600'>
                  Sed congue eros non finibus molestie. Vestibulum euismod
                  augue.
                </p>
              </div>
            </div>
            <div className='pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-bl-[2rem]'></div>
          </div>
          <div className='relative lg:col-span-2'>
            <div className='absolute inset-px rounded-lg'></div>
            <div className='relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]'>
              <img
                className='h-80 object-cover'
                src='https://tailwindui.com/plus-assets/img/component-images/bento-01-integrations.png'
                alt=''
              />
              <div className='p-10 pt-4'>
                <h3 className='text-sm/4 font-semibold text-indigo-600'>
                  Integrations
                </h3>
                <p className='mt-2 text-lg font-medium tracking-tight text-gray-950'>
                  Connect your favorite tools
                </p>
                <p className='mt-2 max-w-lg text-sm/6 text-gray-600'>
                  Maecenas at augue sed elit dictum vulputate, in nisi aliquam
                  maximus arcu.
                </p>
              </div>
            </div>
            <div className='pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5'></div>
          </div>
          <div className='relative lg:col-span-2'>
            <div className='absolute inset-px rounded-lg max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]'></div>
            <div className='relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]'>
              <img
                className='h-80 object-cover'
                src='https://tailwindui.com/plus-assets/img/component-images/bento-01-network.png'
                alt=''
              />
              <div className='p-10 pt-4'>
                <h3 className='text-sm/4 font-semibold text-indigo-600'>
                  Network
                </h3>
                <p className='mt-2 text-lg font-medium tracking-tight text-gray-950'>
                  Globally distributed CDN
                </p>
                <p className='mt-2 max-w-lg text-sm/6 text-gray-600'>
                  Aenean vulputate justo commodo auctor vehicula in malesuada
                  semper.
                </p>
              </div>
            </div>
            <div className='pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]'></div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

const Service = ({ service }) => {
  return (
    <div className='card group relative flex flex-col overflow-hidden rounded-3xl border px-0 py-8'>
      <div className='pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-[#3C3B6150] to-transparent opacity-0 transition duration-200 group-hover:opacity-100' />

      {/* <div className='relative z-10 mb-4 px-10 text-[#d4e8ff]'>{icon}</div> */}
      <div className='relative z-10 mb-2 px-10 text-lg font-bold'>
        <div className='absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-[hsla(221,28%,43%,.4)] transition-all duration-200 group-hover:h-8 group-hover:bg-[#005cf4] group-hover:shadow-[0_0_100px_25px_#005cf4,0_0_40px_2px_#005cf4]' />
        <span className='inline-block font-semibold text-[#d4e8ff] transition duration-200 group-hover:translate-x-2'>
          {service.title}
        </span>
      </div>
      <p className='relative z-10 max-w-xs px-10 text-sm text-[#d4e8ffb3]'>
        {service.price}
      </p>
    </div>
  );
};

export default Services;

{
  /* <div className='bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,92,244,.32)_0%,rgba(1,5,19,.12)_100%)]'>
<dl className='card mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-3xl text-center sm:grid-cols-2 lg:grid-cols-4'>
  {services.data.map((service, index) => (
    <div
      key={index}
      className='card relative flex flex-col overflow-hidden rounded-md p-8'
    >
      <dt className='mb-2 text-sm/6 font-semibold'>
        {service.title}
      </dt>
      <dd className='order-first text-3xl font-semibold tracking-tight text-[#d4e8ff]'>
        ${service.price}{' '}
        {service.pricePer && (
          <span className='text-sm'>/{service.pricePer}</span>
        )}
      </dd>
    </div>
  ))}
</dl>
</div> */
}
