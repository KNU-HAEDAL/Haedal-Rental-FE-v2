import { Progress } from '@/shared';

type Props = {
  step: number;
  progressValue: number;
};

export const ProgressContainer = ({ step, progressValue }: Props) => {
  return (
    <div className='flex w-full flex-col items-center'>
      <div className='mb-3 flex w-2/5 items-center gap-3'>
        <Progress value={progressValue} className='flex-1' />
        <span className='text-sm font-semibold'>{step} / 2 단계</span>
      </div>
    </div>
  );
};
