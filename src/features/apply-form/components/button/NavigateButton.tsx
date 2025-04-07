import { Button } from '@/shared';

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

export const NavigateButton = ({ onClick, children }: Props) => {
  return (
    <Button
      variant='secondary'
      className='mx-1 px-2 font-bold'
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
