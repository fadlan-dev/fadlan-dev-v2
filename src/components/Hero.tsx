import { FunctionComponent } from 'react';

interface HeroProps {}

const Hero: FunctionComponent<HeroProps> = () => {
  return (
    <div className='w-screen h-screen flex items-center'>
      <div className='container'>
        <p>Hi, my name is</p>
        <h1 className='text-3xl md:text-5xl font-bold'>Fadlan Jehteerokee</h1>
        <h1 className='text-2xl md:text-5xl font-bold text-primary'>
          Frontend Web Developer
        </h1>
        <span className='text-muted-foreground'>Coding · Running</span>
      </div>
    </div>
  );
};

export default Hero;
