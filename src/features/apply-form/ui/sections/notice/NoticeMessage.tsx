export const NoticeMessage = () => {
  return (
    <div>
      <p className='mb-5 leading-relaxed text-gray-800'>
        해달에서는 동아리 내의 공용 물품을 대여 장부 작성을 통해 무료로 대여하고
        있습니다. 대여 물품 관리를 위해 아래 사항을 꼭 지켜주세요.
      </p>
      <ol className='list-outside list-decimal space-y-[1px] pl-4 text-gray-800'>
        <li className='hanging-indent-6 pl-2 leading-relaxed'>
          대여 가능 기간은 대여장부 작성일로부터
          <span className='font-bold text-red-500'> 최대 일주일</span>입니다.
          다시 대여해주세요.
        </li>
        <li className='hanging-indent-6 pl-2 leading-relaxed'>
          물품 반납 시 반드시 반납 체크를 진행해 주세요. 누락 시 발생하는 모든
          책임은 대여자에게 있습니다.
        </li>
        <li className='hanging-indent-6 pl-2 leading-relaxed'>
          반납 기간이 지났을 경우 대여자에게 연락을 진행하며,
          <span className='font-bold text-red-500'>
            {' '}
            1회의 제재 횟수가 추가
          </span>
          됩니다.
        </li>
        <li className='hanging-indent-6 pl-2 leading-relaxed'>
          1회 이상 제재를 받을 경우
          <span className='font-bold text-red-500'>
            {' '}
            일주일간 물품 대여가 제한
          </span>
          됩니다.
        </li>
        <li className='hanging-indent-6 pl-2 leading-relaxed'>
          3회 이상 제재를 받을 경우
          <span className='font-bold text-red-500'>
            {' '}
            물품 대여가 영구적으로 제한
          </span>
          됩니다.
        </li>
        <li className='hanging-indent-6 pl-2 leading-relaxed'>
          일부 물품의 경우 대여가 제한될 수 있습니다. 대여 가능 물품 목록은 아래
          페이지에서 확인할 수 있습니다.
        </li>
        <li className='hanging-indent-6 pl-2 leading-relaxed'>
          대여 물품의 원활한 관리를 위해 운영진은 대여자의 정보를 확인할 수
          있습니다.
        </li>
      </ol>
    </div>
  );
};
