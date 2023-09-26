import { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface AboutMeProps {}

const certificates = [
  {
    title: 'Go: The Fundamentals',
    href: './certificates/certificates_a007c750-8aa6-11ea-8d2c-83841723db6c_9887_certificate_certificate-go-the-fundamentals_FADLAN.pdf',
  },
  {
    title: 'Developing Robust API Services with Go',
    href: './certificates/certificates_a007c750-8aa6-11ea-8d2c-83841723db6c_18b4_certificate_certificate-go-api_FADLAN.pdf',
  },
];

const AboutMe: FunctionComponent<AboutMeProps> = () => {
  return (
    <div className='w-screen h-screen flex items-center'>
      <div className='container flex flex-col-reverse md:flex-row  gap-6 '>
        <div className='flex justify-center flex-col basis-1/2'>
          <h1>About Me</h1>
          <p className='mt-4 text-muted-foreground'>
            I am a developer with a thorough knowledge of{' '}
            <mark>JavaScript, TypeScript</mark>, React and Nextjs.I have a host
            of projects to demonstrate that, so feel free to check out my
            featured section or my portfolio. I&apos;m currently working as a
            web developer at <mark>THE MONK GAMES CO., LTD. </mark> and in my
            free time I&apos;m learning Express MySQL Docker implementation
          </p>
          <div className='mt-6 text-muted-foreground'>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <span className='text-foreground'>
              JavaScript · TypeScript · React · Nextjs
            </span>
          </div>
          <div className='mt-6 text-muted-foreground'>
            <p>Certificate :</p>
            <ul className='text-foreground list-disc pl-4'>
              {certificates.map((cert) => (
                <li key={cert.title}>
                  <Link href={cert.href} target='_blank'>
                    {cert.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex items-center justify-center basis-1/2'>
          <div className='w-56 h-56 bg-black rounded-full m-auto'>
            <Image
              src='/profile.png'
              width={224}
              height={224}
              alt='avatar'
              className='m-0 object-cover p-4'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
