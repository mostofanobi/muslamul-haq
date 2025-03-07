import { Modal, ModalBody, ModalContent, useDisclosure } from '@heroui/react';
import { PlayIcon } from 'hugeicons-react';

import Image from 'next/image';

import { projects } from '@/data';

import Magnetic from '../Magnetic';
import SectionHeader from '../common/SectionHeader';
import { Timeline } from '../ui/Projects';

const Projects = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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

        <Timeline data={projects} />

        <div className='relative z-10 grid grid-cols-1 gap-3 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,92,244,.12)_0%,rgba(1,5,19,.12)_100%)] py-10 lg:grid-cols-2'>
          {projects.map((feature, index) => (
            <Project key={index} {...feature} handleClick={onOpen} />
          ))}
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
                src='https://www.youtube.com/embed/JW5meKfy3fY?autoplay=1&modestbranding=1&rel=0'
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

const Project = ({ author, image, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className='card group relative flex aspect-video w-full cursor-pointer flex-col overflow-hidden border p-2'
    >
      <div className='pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-[#3C3B6115] to-transparent opacity-0 transition duration-200 group-hover:opacity-100' />

      <div className='relative h-full w-full'>
        <div className='relative h-full w-full overflow-hidden rounded-2xl opacity-30'>
          <Image src={image} fill className='object-cover' />
        </div>
        <div className='card absolute left-0 top-0 h-full w-full overflow-hidden !rounded-2xl !backdrop-blur-0'></div>
        <Magnetic>
          <div className='card absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center !rounded-full border !backdrop-blur-md'>
            <PlayIcon size={40} />
          </div>
        </Magnetic>
      </div>
    </div>
  );
};

export default Projects;
