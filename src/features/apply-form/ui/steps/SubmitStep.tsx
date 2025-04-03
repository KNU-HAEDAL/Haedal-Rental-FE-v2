import { useNavigate } from 'react-router-dom';

import { Button, RouterPath } from '@/shared';
import {
  ButtonSection,
  ContentsContainer,
  DescriptionSection,
} from '@/widgets';

export const SubmitStep = () => {
  const navigate = useNavigate();

  return (
    <>
      <ContentsContainer title='물품 대여 장부'>
        <DescriptionSection>
          <div className='flex flex-col gap-2'>
            {SUBMIT_MESSAGE.map((message, index) => (
              <p key={index} className='whitespace-pre-line'>
                {message}
              </p>
            ))}
          </div>
        </DescriptionSection>
      </ContentsContainer>
      <ButtonSection>
        <Button variant='outline' onClick={() => navigate(RouterPath.MAIN)}>
          메인 페이지로 이동
        </Button>
      </ButtonSection>
    </>
  );
};

const SUBMIT_MESSAGE = [
  [
    '물품 대여 장부를 작성 완료하었습니다.\n',
    '원활한 물품 대여 관리를 위해 ',
    <b key='submit-message-one'>반납 기한을 준수</b>,
    '해주세요.',
  ],
  [
    '대여한 물품은 해달의 소중한 자산입니다. ',
    <b key='submit-message-one'>2차 공유 및 파손을 자제해주세요.</b>,
  ],
  ['관련 문의는 운영진에 개인적으로 연락해주시면 감사하겠습니다.'],
];
