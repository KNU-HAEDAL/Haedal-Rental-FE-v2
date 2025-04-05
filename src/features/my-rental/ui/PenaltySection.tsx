type Props = {
  penaltyData: number;
};

export const PenaltySection = ({ penaltyData }: Props) => {
  return (
    <span className='border-sun mx-3 flex flex-col items-start gap-1 self-end border px-3 py-1'>
      <p className='text-sun text-lg font-bold'>제재 횟수 : {penaltyData}회</p>
      <div className='flex flex-col text-start text-sm'>
        <p>기한 초과 반납 시 제재 횟수가 추가됩니다.</p>
        <ul style={{ listStyleType: 'disc' }} className='ml-5'>
          <li>
            <b className='text-sun'>1회 </b>제재 시
            <b className='text-sun'> 물품 대여가 일주일 간 제한</b>
            됩니다.
          </li>
          <li>
            <b className='text-sun'>3회 </b>제재 시
            <b className='text-sun'> 물품 대여가 영구 제한</b>
            됩니다.
          </li>
        </ul>
      </div>
    </span>
  );
};
