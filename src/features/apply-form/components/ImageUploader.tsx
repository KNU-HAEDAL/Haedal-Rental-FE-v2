import CameraIcon from '@/features/_assets/apply-form/camera-icon.png';

import { useRentalForm } from '../model';

export const ImageUploader = () => {
  const { image, setImage } = useRentalForm();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='bg-white text-left'>
      <div>
        <p className='mb-2 text-gray-800'>
          대여 물품을 사진으로 찍어서 업로드해주세요.
        </p>
        <label
          htmlFor='image-upload'
          className='mx-auto flex h-32 w-32 cursor-pointer items-center justify-center overflow-hidden border border-gray-300'
        >
          {image ? (
            <img
              src={image}
              alt='미리보기'
              className='h-full w-full object-cover'
            />
          ) : (
            <div className='flex flex-col items-center'>
              <img
                src={CameraIcon}
                alt='카메라 아이콘'
                className='mb-2 h-12 w-12'
              />
              <p className='font-bold text-gray-500'>사진 추가</p>
            </div>
          )}
        </label>
        <input
          id='image-upload'
          type='file'
          accept='image/*'
          className='hidden'
          onChange={handleImageUpload}
        />
      </div>
    </div>
  );
};
