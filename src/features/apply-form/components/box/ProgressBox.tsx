import { Progress } from '@/shared';

type Props = {
  step: number;
  progressValue: number;
};

export const ProgressBox = ({ step, progressValue }: Props) => {
  return (
    <div className='flex w-2/5 items-center gap-3 py-3'>
      <Progress value={progressValue} className='flex-1' />
      <p className='text-sm font-semibold'>{step} / 2 페이지</p>
    </div>
  );
};
