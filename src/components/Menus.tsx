'use client';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menus: { title: string; href: string }[] = [
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Watchlist',
    href: '/watchlist',
  },
];

const Menus = () => {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList className='gap-2'>
        {menus.map((menu) => (
          <NavigationMenuItem
            key={menu.title}
            className={cn(
              'text-foreground/60 hover:text-foreground/80 text-sm',
              pathname === menu.href && 'text-foreground'
            )}
          >
            <Link href={menu.href} legacyBehavior passHref>
              {menu.title}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default Menus;
