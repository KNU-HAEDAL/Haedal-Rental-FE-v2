type Props = {
  penaltyData: number;
};

export const PenaltySection = ({ penaltyData }: Props) => {
  return (
    <span className='flex w-full justify-end px-3'>
      <p className='text-sun text-lg font-bold'>제재 횟수 : {penaltyData}회</p>
    </span>
  );
};
