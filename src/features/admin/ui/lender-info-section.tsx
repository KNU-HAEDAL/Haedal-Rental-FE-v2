import { ItemWrapper } from '../components';

type Props = {
  name: string;
  phoneNumber: string;
};

export const LenderInfoSection = ({ name, phoneNumber }: Props) => {
  return (
    <ItemWrapper className='gap-5'>
      <p>물품 대여자 정보</p>
      <div className='flex gap-10'>
        <div className='flex items-center gap-3'>
          <p>이름: </p>
          <span className='border-b px-5'>
            <p className='py-1'>{name}</p>
          </span>
        </div>
        <div className='flex items-center gap-3'>
          <p>전화번호: </p>
          <span className='border-b px-5'>
            <p className='py-1'>{phoneNumber}</p>
          </span>
        </div>
      </div>
    </ItemWrapper>
  );
};
