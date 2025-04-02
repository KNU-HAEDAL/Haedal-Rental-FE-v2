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
    '대여 가능 기간은 장부 작성일로부터 ',
    <b className='text-sun' key='bold-1'>
      최대 일주일
    </b>,
    '입니다.\n연장을 원할 시 다시 대여해주세요.',
  ],
  [
    "물품 반납 시 반드시 '나의 대여 물품 확인'에서 반납을 해주세요.\n반납 절차 미완료 시 발생하는 모든 책임은 대여자에게 있습니다.",
  ],
  [
    '반납 기간이 지났을 경우 대여자에게 연락을 진행하며, ',
    <b className='text-sun' key='bold-2'>
      1회
    </b>,
    ' 제재 시 ',
    <b className='text-sun' key='bold-3'>
      물품 대여가 일주일 간 제한
    </b>,
    '됩니다.',
  ],
  [
    '반납 기간이 지났을 경우 대여자에게 연락을 진행하며, ',
    <b className='text-sun' key='bold-4'>
      3회
    </b>,
    ' 제재 시 ',
    <b className='text-sun' key='bold-5'>
      물품 대여가 영구적으로 제한
    </b>,
    '됩니다.',
  ],
  [
    '대여 물품의 원활한 관리를 위해 운영진은 대여자의 정보를 확인할 수 있습니다.',
  ],
  [
    '대여 중인 물품의 경우 대여가 제한될 수 있습니다. 물품 목록은 아래 페이지에서 확인할 수 있습니다.',
  ],
];
