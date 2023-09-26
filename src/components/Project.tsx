import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Button, buttonVariants } from './ui/button';
import { ChevronRightIcon, ExternalLinkIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';

const projects = [
  {
    image:
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2836&q=80',
    link: 'https://likemaldives.com',
    title: 'likemaldives.com',
    description: 'Tour Website',
    stack: ['Nextjs', 'JavaScript'],
  },
  {
    image:
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2836&q=80',
    link: 'https://triple-i.in',
    title: 'triple-i.in',
    description: 'Landing page',
    stack: ['Nuxtjs', 'JavaScript', 'Firebase'],
  },
  {
    image:
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2836&q=80',
    link: 'https://kathistudio.co.th',
    title: 'kathistudio.co.th',
    description: 'Landing page',
    stack: ['Nextjs', 'JavaScript', 'Styled-components'],
  },
];

const Project = () => {
  return (
    <div className='container mt-20'>
      <h1>Some Things I’ve Built</h1>

      <ul className='flex flex-wrap gap-4 mt-6'>
        {projects.map((project) => (
          <Card
            key={project.title}
            className='group overflow-hidden w-full sm:w-[calc(50%-8px)] md:w-[calc(50%-8px)] lg:w-[calc(25%-8px)]'
          >
            <div className='relative w-full '>
              <a
                target='_blank'
                href={project.link}
                className={cn(
                  buttonVariants({ variant: 'secondary', size: 'icon-sm' }),
                  'absolute right-2 bottom-6 invisible group-hover:visible'
                )}
              >
                <ExternalLinkIcon />
              </a>
              <article className='pb-4'>
                <Image
                  src={project.image}
                  width={300}
                  height={300}
                  alt=''
                  className='w-full h-full aspect-video object-cover'
                />
              </article>
            </div>
            <CardContent>
              <p>{project.title}</p>
              <p className='text-muted-foreground text-sm'>
                {project.description}
              </p>
              <span className='text-muted-foreground text-xs'>
                {project.stack.join(' · ')}
              </span>
            </CardContent>
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default Project;
