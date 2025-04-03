import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared';
import {
  ButtonSection,
  ContentsContainer,
  DescriptionSection,
} from '@/widgets';

import { NoticeMessageBox } from '../../components';
import { useGoStep } from '../../hooks';
import { ProgressSection } from '../section';

type Props = {
  step: number;
  setStep: (step: number) => void;
};

export const NoticeContainer = ({ step, setStep }: Props) => {
  const { goNextStep } = useGoStep({ step, setStep });

  const navigate = useNavigate();

  return (
    <>
      <ContentsContainer title='물품 대여 안내'>
        <DescriptionSection>
          <NoticeMessageBox />
        </DescriptionSection>
      </ContentsContainer>
      <div className='w-layout flex flex-col items-center'>
        <ProgressSection step={step} progressValue={(step / 2) * 100} />
        <ButtonSection>
          <Button variant='outline' onClick={() => navigate(-1)}>
            뒤로
          </Button>
          <Button variant='primary' onClick={goNextStep}>
            다음
          </Button>
        </ButtonSection>
      </div>
    </>
  );
};
