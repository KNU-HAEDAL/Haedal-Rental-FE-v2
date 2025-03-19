import { useNavigate } from 'react-router-dom';

import { Button } from '../../ui';

type Props = {
  className?: string;
};

export const BackButton = ({
  className,
  ...props
}: React.ComponentProps<'section'> & Props) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1);
  };

  return (
    <section className={className} {...props}>
      <Button onClick={onClick} variant='outline'>
        뒤로
      </Button>
    </section>
  );
};
