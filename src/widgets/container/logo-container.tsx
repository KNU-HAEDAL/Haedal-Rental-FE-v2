import { AuthButtons, SymbolLogo } from '@/shared';

type Props = {
  children: React.ReactNode;
  title: string;
};

export const LogoContainer = ({ children, title }: Props) => {
  return (
    <div className='flex h-full flex-col items-center justify-center gap-3 text-center'>
      <SymbolLogo />
      <AuthButtons />
      <div className='flex h-full w-[550px] flex-col items-center gap-5 border border-gray-200 pb-5'>
        <div className='bg-haedal flex w-full justify-center py-3'>
          <p className='text-xl font-bold text-white'>{title}</p>
        </div>
        {children}
      </div>
    </div>
  );
};
