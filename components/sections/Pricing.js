import { ArrowRight01Icon } from 'hugeicons-react';

import { pricing, services } from '@/data';

import SectionHeader from '../common/SectionHeader';

const Pricing = () => {
  return (
    <section id='pricing'>
      <div className='relative mx-auto max-w-7xl px-6 lg:px-8'>
        <SectionHeader heading={pricing.heading} subtitle={pricing.subtitle} />

        <div className='isolate mx-auto mb-20 mt-16 grid max-w-md grid-cols-1 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,92,244,.32)_0%,rgba(1,5,19,.12)_100%)] sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {pricing.data.map((plan, index) => (
            <div
              key={plan.title}
              className={`group relative flex flex-col overflow-hidden rounded-[20px] border py-10 lg:z-10 ${index === 0 ? 'my-8 lg:rounded-r-none lg:border-r-0' : index === 2 ? 'my-8 lg:rounded-l-none lg:border-l-0' : 'card'}`}
            >
              <div className='pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-[rgba(0,92,244,.12)] to-transparent opacity-0 transition duration-200 group-hover:opacity-100' />

              <div className='mb-6 flex items-center justify-between gap-x-4 pr-8'>
                <div className='relative pl-8 text-lg font-bold'>
                  <div className='absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-[hsla(221,28%,43%,.4)] transition-all duration-200 group-hover:h-8 group-hover:bg-[#005cf4] group-hover:shadow-[0_0_100px_25px_#005cf4,0_0_40px_2px_#005cf4]' />
                  <span className='inline-block font-semibold text-[#d4e8ff] transition duration-200 group-hover:translate-x-2'>
                    {plan.title}
                  </span>
                </div>
                {plan.recommended && (
                  <p className='rounded-full border border-[hsla(221,28%,43%,.5)] bg-indigo-500/20 px-2.5 py-1 text-xs/5 font-semibold text-[#d4e8ff]'>
                    Most Recommended
                  </p>
                )}
              </div>
              <div className='mb-12 px-8'>
                {plan.description && (
                  <p className='mb-8 text-sm/6'>{plan.description}</p>
                )}
                <p className='flex items-baseline gap-x-2 text-[#d4e8ff]'>
                  <span className='text-6xl tracking-tight'>${plan.price}</span>
                  <span className='text-sm font-semibold leading-6 tracking-wide'>
                    USD
                  </span>
                </p>
              </div>
              <ul
                role='list'
                className='space-y-3 px-8 text-sm leading-6 text-[#d4e8ff]'
              >
                {plan.features.map((feature) => (
                  <li key={feature} className='flex gap-x-3 text-[$d4e8ff]'>
                    <ArrowRight01Icon className='mt-0.5 flex-none' size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <dl className='card mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-3xl sm:grid-cols-2 lg:grid-cols-4'>
          {services.data.map((service, index) => (
            <div
              key={index}
              className='card relative flex flex-col overflow-hidden rounded-md p-8'
            >
              <dt className='mb-2 font-semibold text-[#d4e8ff]'>
                {service.icon}
              </dt>
              <dt className='mb-6 text-lg text-[#d4e8ff]'>{service.title}</dt>
              <dd className='tracking-tight'>
                <p className='flex items-baseline gap-x-2'>
                  <span className='text-3xl tracking-tight text-[#d4e8ff]'>
                    ${service.price}
                  </span>
                  <span className='text-sm font-semibold leading-6 tracking-wide'>
                    /{service.pricePer ? service.pricePer : 'each'}
                  </span>
                </p>
                {service.remarks && (
                  <span className='mt-2 block text-xs'>{service.remarks}</span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Pricing;
