import { ContentsContainer } from '@/widgets';

import { SubmitMessage, GoToMainPageButton } from '../../components';

export const SubmitSection = () => {
  return (
    <div>
      <ContentsContainer title='물품 대여 장부'>
        <SubmitMessage />
      </ContentsContainer>
      <GoToMainPageButton />
    </div>
  );
};
