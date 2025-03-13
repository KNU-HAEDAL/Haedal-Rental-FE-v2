import { AuthButtons, SymbolLogo } from '@/shared';

type Props = {
  children: React.ReactNode;
  title: string;
};

export const LogoContainer = ({ children, title }: Props) => {
  return (
    <div className='flex flex-col items-center justify-center h-full gap-3 text-center'>
      <SymbolLogo />
      <AuthButtons />
      <div className='flex h-full w-[550px] flex-col items-center gap-5 border border-gray-200 pb-5'>
        <div className='flex justify-center w-full py-3 bg-haedal'>
          <p className='text-xl font-bold text-white'>{title}</p>
        </div>
        {children}
      </div>
    </div>
  );
};
