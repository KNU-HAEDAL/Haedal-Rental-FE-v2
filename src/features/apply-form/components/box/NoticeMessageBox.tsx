import { NOTICE_MESSAGE } from '../../constants';

export const NoticeMessageBox = () => {
  return (
    <ol className='list-outside list-decimal space-y-[1px] pl-4 text-[15px]'>
      {NOTICE_MESSAGE.map((notice, index) => (
        <li
          key={index}
          className='hanging-indent-6 leading-relaxed'
          dangerouslySetInnerHTML={{ __html: notice }}
        />
      ))}
    </ol>
  );
};
