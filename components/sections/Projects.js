'use client';

import { Modal, ModalBody, ModalContent, useDisclosure } from '@heroui/react';
import { PlayIcon } from 'hugeicons-react';
import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import { motion, useScroll, useTransform } from 'framer-motion';

import { projects } from '@/data';

import Magnetic from '../common/Magnetic';
import SectionHeader from '../common/SectionHeader';

export const Projects = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [height, setHeight] = useState(0);
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%']
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const handleModal = (videoId) => {
    onOpen();
    setVideoId(videoId);
  };

  return (
    <>
      <section
        id='projects'
        className='relative mx-auto max-w-7xl px-6 lg:px-8'
      >
        <SectionHeader
          heading='Transforming Footage into Captivating Stories'
          subtitle='Projects'
        />

        <div className='w-full' ref={containerRef}>
          <div ref={ref} className='relative'>
            {projects.map((item, index) => (
              <div key={index} className='flex justify-start pt-10 md:gap-10'>
                <div className='sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm'>
                  <div className='absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#010513] md:left-3'>
                    <div className='h-3 w-3 rounded-full border bg-[#005cf4] shadow-[0_0_100px_25px_#005cf4,0_0_40px_2px_#005cf4]' />
                  </div>
                  <h3 className='hidden text-xl font-medium text-[#d4e8ff] md:block md:pl-20'>
                    {item.title}
                  </h3>
                </div>

                <div className='relative w-full pl-20 md:pl-0'>
                  <h3 className='mb-4 block text-left text-2xl font-bold text-[#d4e8ff] md:hidden'>
                    {item.title}
                  </h3>

                  <div
                    className={`${item.type === 'reel' ? 'lg:grid-cols-2' : ''} relative z-10 grid grid-cols-1 gap-3 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,92,244,.12)_0%,rgba(1,5,19,.12)_100%)] pb-10`}
                  >
                    {item.data.map((videoId, index) => {
                      return (
                        <div
                          onClick={() => handleModal(videoId)}
                          className={`${item.type === 'reel' ? 'aspect-[9/16]' : 'aspect-[9/16] lg:aspect-video'} card group relative mx-auto flex w-full max-w-sm cursor-pointer flex-col overflow-hidden rounded-3xl border p-2 lg:max-w-none`}
                        >
                          <div className='pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-[#3C3B6115] to-transparent opacity-0 transition duration-200 group-hover:opacity-100' />

                          <div className='relative h-full w-full'>
                            <div className='relative h-full w-full overflow-hidden rounded-2xl opacity-70'>
                              <Image
                                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                                fill
                                className='object-cover'
                              />
                            </div>
                            <div className='card absolute left-0 top-0 h-full w-full overflow-hidden rounded-2xl transition-all group-hover:backdrop-blur-0'></div>
                            <Magnetic>
                              <div className='card absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center !rounded-full border !backdrop-blur-md'>
                                <PlayIcon size={40} />
                              </div>
                            </Magnetic>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
            <div
              style={{
                height: height + 'px'
              }}
              className='absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-[hsla(221,28%,43%,1)] to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8'
            >
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform
                }}
                className='absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-purple-500 from-[0%] via-blue-500 via-[10%] to-transparent'
              />
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size='5xl'
        placement='center'
        backdrop='blur'
      >
        <ModalContent>
          {(onClose) => (
            <ModalBody className='relative aspect-video w-full overflow-hidden p-0'>
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
                allow='autoplay'
                className='absolute left-0 top-0 h-full w-full overflow-hidden'
                allowFullScreen
              ></iframe>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
