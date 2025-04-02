import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared';
import { ContentsContainer, DescriptionSection } from '@/widgets';

import { ItemListBox, NoticeMessageBox, ProgressBox } from '../../components';
import { useGoStep } from '../../hooks';

type Props = {
  step: number;
  setStep: (step: number) => void;
};

export const NoticeSection = ({ step, setStep }: Props) => {
  const { goNextStep } = useGoStep({ step, setStep });

  const navigate = useNavigate();

  return (
    <>
      <ContentsContainer title='물품 대여 안내'>
        <DescriptionSection>
          <NoticeMessageBox />
          <ItemListBox />
        </DescriptionSection>
      </ContentsContainer>
      <div className='w-layout flex flex-col items-center'>
        <ProgressBox step={step} progressValue={(step / 2) * 100} />
        <div className='flex w-full justify-center gap-3 py-3'>
          <Button
            variant='outline'
            className='px-5'
            onClick={() => navigate(-1)}
          >
            뒤로
          </Button>
          <Button className='px-5' variant='outline' onClick={goNextStep}>
            다음
          </Button>
        </div>
      </div>
    </>
  );
};
