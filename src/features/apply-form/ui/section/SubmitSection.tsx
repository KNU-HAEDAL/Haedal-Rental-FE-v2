import { useNavigate } from 'react-router-dom';

import { Button, RouterPath } from '@/shared';
import { ContentsContainer } from '@/widgets';

export const SubmitSection = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col gap-3'>
      <ContentsContainer title='물품 대여 장부'>
        <DescriptionSection>
          <div>
            <p>물품 대여 장부가 정상적으로 제출되었습니다.</p>
            <p>
              원활한 물품 대여를 위해 <b>반납 기한을 준수</b>해주세요.
            </p>
          </div>
          <div>
            <p>
              대여한 물품은 해달의 소중한 재산입니다. 2차 공유 및 파손을
              자제해주세요.
            </p>
          </div>
          <div>
            물품 대여 관련 문의는 해구르르에게 개인적으로 연락해주시면
            감사하겠습니다.
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
