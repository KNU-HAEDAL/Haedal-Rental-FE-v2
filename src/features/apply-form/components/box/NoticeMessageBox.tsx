export const NoticeMessageBox = () => {
  return (
    <ol className='list-outside list-decimal space-y-[1px] pl-4 text-[15px]'>
      {NOTICE_MESSAGE.map((message, index) => (
        <li key={index} className='hanging-indent-6 leading-relaxed'>
          <p className='whitespace-pre-line'>{message}</p>
        </li>
      ))}
    </ol>
  );
};

const NOTICE_MESSAGE = [
  [
    '대여 가능 기간은 대여장부 작성일로부터',
    <b className='text-sun' key='message-one'>
      최대 일주일
    </b>,
    '입니다. 다시 대여해주세요.',
  ],
  [
    '물품 반납 시 반드시 반납 체크를 진행해 주세요. 누락 시 발생하는 모든 책임은 대여자에게 있습니다.',
  ],
  [
    '반납 기간이 지났을 경우 대여자에게 연락을 진행하며,',
    <b className='text-sun' key='message-three'>
      1회의 제재 횟수가 추가
    </b>,
    '됩니다.',
  ],
  [
    '1회 이상 제재를 받을 경우',
    <b className='text-sun' key='message-four'>
      일주일간 물품 대여가 제한
    </b>,
    '됩니다.',
  ],
  [
    '3회 이상 제재를 받을 경우',
    <b className='text-sun' key='message-five'>
      물품 대여가 영구적으로 제한
    </b>,
    '됩니다.',
  ],
  [
    '일부 물품의 경우 대여가 제한될 수 있습니다. 대여 가능 물품 목록은 아래 페이지에서 확인할 수 있습니다.',
  ],
  [
    '대여 물품의 원활한 관리를 위해 운영진은 대여자의 정보를 확인할 수 있습니다.',
  ],
];
