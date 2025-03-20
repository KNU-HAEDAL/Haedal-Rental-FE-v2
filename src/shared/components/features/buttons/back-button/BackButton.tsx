import { useNavigate } from 'react-router-dom';

import { Button, cn } from '@/shared';

type Props = {
  className?: string;
  label?: string;
};

export const BackButton = ({
  className,
  label,
  ...props
}: React.ComponentProps<'section'> & Props) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1);
  };

  return (
    <section className={cn('w-full pt-2 pb-6', className)} {...props}>
      <Button onClick={onClick} variant='outline'>
        {label || '뒤로'}
      </Button>
    </section>
  );
};
