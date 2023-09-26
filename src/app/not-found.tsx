import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='h-[calc(100vh-92px)] flex flex-col items-center justify-center'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link
        className={cn(buttonVariants({ variant: 'outline' }), 'mt-4')}
        href='/'
      >
        Return Home
      </Link>
    </div>
  );
}
