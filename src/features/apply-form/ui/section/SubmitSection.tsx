import { useNavigate } from 'react-router-dom';

import { Button, RouterPath } from '@/shared';
import { ContentsContainer, DescriptionSection } from '@/widgets';

import { SUBMIT_MESSAGE } from '../../constants';

export const SubmitSection = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col gap-3'>
      <ContentsContainer title='물품 대여 장부'>
        <DescriptionSection className='items-center justify-center gap-3'>
          <div className='flex flex-col gap-3'>
            {SUBMIT_MESSAGE.map((group, index) => (
              <div key={index}>
                {group.map((text, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: text }} />
                ))}
              </div>
            ))}
          </div>
        </DescriptionSection>
      </ContentsContainer>
      <div className='w-full'>
        <Button
          variant='secondary'
          onClick={() => navigate(RouterPath.MAIN)}
          className='h-9 px-5 font-bold'
        >
          첫 페이지로 이동
        </Button>
      </div>
    </div>
  );
};
