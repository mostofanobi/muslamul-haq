'use client';

import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure
} from '@heroui/react';
import { Cancel01Icon, Download02Icon } from 'hugeicons-react';

import Link from 'next/link';

import { contacts } from '@/data';
// import Image from 'next/image';
import muslamulHaq from '@/public/images/muslamul-haq.jpeg';

const Profile = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className=''>
        <div className='fixed bottom-6 left-0 z-40 w-full'>
          <div className='mx-auto flex max-w-7xl justify-end px-6 lg:px-8'>
            <button onClick={onOpen} className='flex w-fit items-center'>
              <div className='card relative z-10 h-16 w-16 rounded-full border p-1'>
                <div className='relative h-full w-full overflow-hidden rounded-full'>
                  <Image
                    fill
                    src={muslamulHaq.src}
                    className='rounded-full object-cover'
                  />
                </div>
              </div>
              <div className='card relative -ml-3 flex h-12 w-auto items-center justify-center rounded-r-full border border-l-0 px-5'>
                {/* <div className='relative h-full w-full overflow-hidden rounded-full'>
              <Image
                fill
                src={muslamulHaq.src}
                className='rounded-full object-cover'
              />
            </div> */}
                <p className='font-medium text-white'>Muslamul Haq</p>
              </div>
            </button>
          </div>
        </div>

        <Modal
          backdrop='blur'
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          size='lg'
          scrollBehavior='inside'
          hideCloseButton
          shouldBlockScroll
          radius='lg'
        >
          <ModalContent className='border !bg-[#01051399]'>
            {(onClose) => (
              <>
                <Button
                  isIconOnly
                  onPress={onClose}
                  className='card absolute right-3 top-3 z-50 text-white'
                >
                  <Cancel01Icon />
                </Button>
                <ModalBody>
                  <div className='mb-3 flex w-full items-center justify-center pt-4'>
                    <Image
                      isBlurred
                      isZoomed
                      alt='Event image'
                      className='aspect-square w-full hover:scale-110'
                      height={300}
                      src={muslamulHaq.src}
                    />
                  </div>

                  <h1 className='text-center text-xl font-medium text-white'>
                    Muslamul Haq Siam
                  </h1>

                  <p className='text-center text-white/70'>
                    With a thriving video editing agency based in the BD and
                    over 1000+ client videos edited. Siam isn’t just editing
                    videos; he’s shaping the future of digital content. Whether
                    you’re here to learn, laugh, or be amazed, you’re in the
                    right place. A proven track record of leading video
                    production teams to execute Short film, Documentary and
                    Movie explanation across Youtube, Facebook visualand
                    streaming formats.
                  </p>
                </ModalBody>
                <ModalFooter className='justify-between border-t'>
                  <div className='flex gap-2'>
                    {contacts.data.map((contact) => (
                      <Button
                        key={contact.title}
                        isIconOnly
                        className='card text-white'
                        as={Link}
                        href={contact.href}
                        passHref
                        target='_blank'
                      >
                        {contact.icon}
                      </Button>
                    ))}
                  </div>
                  <Button
                    onPress={onClose}
                    startContent={<Download02Icon />}
                    className='card text-white'
                  >
                    Download CV
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default Profile;
