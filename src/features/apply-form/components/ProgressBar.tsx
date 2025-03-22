import { Progress } from '@/shared';

type Props = {
  step: number;
};

export const ProgressBar = ({ step }: Props) => {
  const progressValue = (step / 3) * 100;

  return (
    <div className='my-4 flex w-2/5 items-center px-2'>
      <Progress value={progressValue} className='flex-1' />
      <span className='ml-2 text-sm text-gray-800'>
        {step}/{3} 페이지
      </span>
    </div>
  );
};
