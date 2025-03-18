import { NAVIGATE_BUTTONS_DATA } from '@/features/main/model';

export const ItemListDescriptionSection = () => {
  return (
    <div className='mx-5 text-start'>
      <p>{NAVIGATE_BUTTONS_DATA[0].description}</p>
    </div>
  );
};
