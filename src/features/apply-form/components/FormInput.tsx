import { useRentalForm } from '../model';

export const FormInput = () => {
  const { itemName, setItemName } = useRentalForm();

  return (
    <div>
      <p className='mb-1 text-gray-800'>대여 물품의 이름을 작성해주세요.</p>
      <input
        type='text'
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        className='w-[300px] border-b border-gray-300 p-2 focus:outline-none'
      />
    </div>
  );
};
