import { AvatarProps } from '@radix-ui/react-avatar';
import { Avatar, AvatarFallback } from './ui/avatar';
import Image from 'next/image';
import { AvatarIcon } from '@radix-ui/react-icons';

interface UserAvatarProps extends AvatarProps {
  user: Pick<any, 'image' | 'name'>;
}

const UserAvatar = ({ user, ...props }: UserAvatarProps) => {
  return (
    <Avatar {...props}>
      {user.image ? (
        <div className='relative aspect-square h-full w-full'>
          <Image
            fill
            src={user.image}
            alt='profile picture'
            referrerPolicy='no-referrer'
          />
        </div>
      ) : (
        <AvatarFallback>
          <span className='sr-only'>{user?.name}</span>
          <AvatarIcon />
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
