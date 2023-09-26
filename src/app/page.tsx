import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';
import GetInTouch from '@/components/GetInTouch';
import Hero from '@/components/Hero';
import Project from '@/components/Project';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Experience />
      <Project />
      <GetInTouch />
    </main>
  );
}
