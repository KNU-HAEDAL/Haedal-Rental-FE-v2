import { useNavigate } from 'react-router-dom';

import { RouterPath } from '@/shared';

import { NavigateButton } from '../button';

export const NoticeMessageBox = () => {
  const navigate = useNavigate();

  const replacePlaceholders = (message: string) => {
    const replacedTag = message
      .split(/(\{\{.*?\}\}|\*\*.*?\*\*)/g)
      .map((part, index) => {
        if (part === '{{MY_RENTAL}}') {
          return (
            <NavigateButton
              key={index}
              onClick={() => navigate(RouterPath.MY_RENTAL)}
            >
              나의 대여 물품 확인
            </NavigateButton>
          );
        } else if (part === '{{ITEMS}}') {
          return (
            <NavigateButton
              key={index}
              onClick={() => navigate(RouterPath.ITEMS)}
            >
              해달 물품 목록
            </NavigateButton>
          );
        } else if (/^\*\*(.*?)\*\*$/.test(part)) {
          return (
            <b key={index} className='text-sun'>
              {part.replace(/\*\*/g, '')}
            </b>
          );
        }

        return part;
      });

    return replacedTag;
  };

  return (
    <>
      <p className='mb-5'>{NOTICE_MESSAGE[0]}</p>
      <ol className='mb-5 list-outside list-decimal space-y-[1px] pl-5'>
        {NOTICE_MESSAGE.slice(1).map((item, index) => (
          <li key={index} className='mb-1 leading-relaxed whitespace-pre-line'>
            {replacePlaceholders(item)}
          </li>
        ))}
      </ol>
    </>
  );
};

const NOTICE_MESSAGE = [
  '해달에서는 동아리 공용 물품을 대여 장부 작성을 통해 무료로 대여해드리고 있습니다. 물품 관리를 위해 아래 사항을 꼭 지켜주세요.',
  '대여 가능 기간은 장부 작성일로부터 **최대 일주일**입니다.\n연장을 원할 시 다시 대여해주세요.',
  '물품 반납 시 반드시 {{MY_RENTAL}}에서 반납을 해주세요.\n반납 절차 미완료 시 발생하는 모든 책임은 대여자에게 있습니다.',
  '반납 기한 초과 시 운영진이 대여자에게 연락을 진행합니다.\n**1회** 제재 시 **물품 대여가 일주일 간 제한**됩니다.\n**3회** 제재 시 **물품 대여가 영구적으로 제한**됩니다.',
  '물품의 원활한 관리를 위해 운영진은 대여자 정보를 열람할 수 있습니다.',
  '대여 중인 물품의 경우 대여할 수 없습니다.\n전체 물품 및 대여 가능 물품은 {{ITEMS}}에서 확인할 수 있습니다.',
];
