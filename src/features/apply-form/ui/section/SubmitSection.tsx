import { ContentsContainer } from '@/widgets';

import { GoToMainPageButton } from '../../components';

export const SubmitSection = () => {
  return (
    <div>
      <ContentsContainer title='물품 대여 장부'>
        <div className='flex flex-col gap-5 bg-white p-2 text-center leading-relaxed'>
          <span>
            <p>물품 대여 장부가 정상적으로 제출되었습니다.</p>
            <p>
              원활한 물품 대여를 위해 <b>반납 기한을 준수</b>해주세요.
            </p>
          </span>
          <span>
            <p>
              대여한 물품은 해달의 소중한 재산입니다. 2차 공유 및 파손을
              자제해주세요.
            </p>
          </span>
          <p>
            물품 대여 관련 문의는 해구르르에게 개인적으로 연락해주시면
            감사하겠습니다.
          </p>
        </div>
      </ContentsContainer>
      <GoToMainPageButton />
    </div>
  );
};
