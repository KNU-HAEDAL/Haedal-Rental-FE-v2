import { ButtonContainer, DescriptionSection } from '@/features';

import { LogoContainer } from '@/widgets';

export const MainPage = () => {
  return (
    <LogoContainer title='물품 대여 장부 서비스'>
      <DescriptionSection />
      <ButtonContainer />
    </LogoContainer>
  );
};
