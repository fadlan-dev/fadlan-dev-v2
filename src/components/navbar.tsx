import Link from 'next/link';
import { buttonVariants } from './ui/button';
import ModeToggle from './ModeToggle';
import Menus from './Menus';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  const session = { user: null };

  return (
    <div className='fixed top-0 inset-x-0 h-fit z-[10] py-2 border-b backdrop-blur'>
      <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
        {/* logo */}
        <div className='flex gap-4'>
          <Link href='/' className='flex gap-2 items-center'>
            <p className='hidden font-bold md:block'>Fadlan</p>
          </Link>
          <Menus />
        </div>

        <div className='flex gap-1'>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/fadlan-jehteerokee/'
            className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}
          >
            <LinkedInLogoIcon />
          </a>
          <a
            target='_blank'
            href='https://github.com/fadlan-dev'
            className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}
          >
            <GitHubLogoIcon />
          </a>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
