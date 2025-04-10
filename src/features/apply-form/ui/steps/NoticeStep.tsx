import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared';
import {
  ButtonContainer,
  ContentsContainer,
  DescriptionSection,
} from '@/widgets';

import { NoticeMessageBox } from '../../components';
import { useGoStep } from '../../hooks';
import { ProgressContainer } from '../containers';

type Props = {
  step: number;
  setStep: (step: number) => void;
};

export const NoticeStep = ({ step, setStep }: Props) => {
  const { goNextStep } = useGoStep({ step, setStep });

  const navigate = useNavigate();

  return (
    <>
      <ContentsContainer title='물품 대여 안내'>
        <DescriptionSection>
          <NoticeMessageBox />
        </DescriptionSection>
      </ContentsContainer>
      <ProgressContainer step={step} progressValue={(step / 2) * 100} />
      <ButtonContainer>
        <Button variant='outline' onClick={() => navigate(-1)}>
          뒤로
        </Button>
        <Button variant='primary' onClick={goNextStep}>
          다음
        </Button>
      </ButtonContainer>
    </>
  );
};
