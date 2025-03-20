import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared';

export const BackButton = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1);
  };

  return (
    <Button onClick={onClick} variant='outline'>
      뒤로
    </Button>
  );
};
