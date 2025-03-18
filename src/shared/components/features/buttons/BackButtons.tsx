import { useNavigate } from 'react-router-dom';

import { cn } from '@/shared';

import { Button } from '../../ui';

type Props = {
  className?: string;
};

export const BackButtons = ({
  className,
  ...props
}: React.ComponentProps<'section'> & Props) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(-1);
  };
  return (
    <section className={cn('w-full pt-2 pb-6', className)} {...props}>
      <Button onClick={onClick} variant='outline' className='px-6 shadow-md'>
        뒤로
      </Button>
    </section>
  );
};
