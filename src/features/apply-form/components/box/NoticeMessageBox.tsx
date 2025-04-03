import { Button } from '@/shared';

export const NoticeMessageBox = () => {
  return (
    <>
      <p className='mb-5'>
        해달에서는 동아리 내의 공용 물품을 대여 장부 작성을 통해 무료로 대여하고
        있습니다. 대여 물품 관리를 위해 아래 사항을 꼭 지켜주세요.
      </p>
      <ol className='mb-5 list-outside list-decimal space-y-[1px] pl-5'>
        {NOTICE_MESSAGE.map((message, index) => (
          <li key={index} className='mb-1 leading-relaxed whitespace-pre-line'>
            {message}
          </li>
        ))}
      </ol>
    </>
  );
};

const NOTICE_MESSAGE = [
  <>
    대여 가능 기간은 장부 작성일로부터 <b className='text-sun'>최대 일주일</b>
    입니다.
    <br />
    연장을 원할 시 다시 대여해주세요.
  </>,
  <>
    물품 반납 시 반드시&nbsp;
    <Button
      variant='secondary'
      className='mx-1 px-2 font-bold'
      onClick={() => {
        /* 이동 로직 */
      }}
    >
      나의 대여 물품 확인
    </Button>
    에서 반납을 해주세요.
    <br />
    반납 절차 미완료 시 발생하는 모든 책임은 대여자에게 있습니다.
  </>,
  <>
    반납 기한 초과 시 운영진이 대여자에게 연락을 진행합니다.
    <br />
    <b className='text-sun'>1회</b> 제재 시&nbsp;
    <b className='text-sun'>물품 대여가 일주일 간 제한</b>됩니다.
    <br />
    <b className='text-sun'>3회</b> 제재 시&nbsp;
    <b className='text-sun'>물품 대여가 영구적으로 제한</b>됩니다.
  </>,
  <>
    대여 물품의 원활한 관리를 위해 운영진은 대여자의 정보를 확인할 수 있습니다.
  </>,
  <>
    대여 중인 물품의 경우 대여할 수 없습니다.
    <br />
    전체 물품 및 대여 가능 물품은&nbsp;
    <Button
      variant='secondary'
      className='mx-1 px-2 font-bold'
      onClick={() => {
        /* 이동 로직 */
      }}
    >
      해달 물품 목록
    </Button>
    에서 확인할 수 있습니다.
  </>,
];
