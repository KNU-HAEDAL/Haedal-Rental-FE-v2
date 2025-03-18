import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { toast } from 'sonner';

import { Button, Checkbox, Form, Input } from '@/shared';

import { ItemField } from '../components';
import { AddItem, AddItemSchema, ITEM_TYPE } from '../model';
import { zodResolver } from '@hookform/resolvers/zod';

export const AddItemForm = () => {
  //TODO: isPending 으로 변경
  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const promise = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve({ name: 'Sonner' }), 2000),
    );
  const navigate = useNavigate();

  const form = useForm<AddItem>({
    resolver: zodResolver(AddItemSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      type: 'book',
      approved: undefined,
    },
  });

  const onSubmit = (data: AddItem) => {
    console.log('물품 추가 데이터:', data);
    toast.promise(promise, {
      loading: '물품을 추가하는 중...',
      success: '물품이 성공적으로 추가되었습니다!',
      error: '물품 추가에 실패했습니다.',
    });

    // TODO: onSuccess 이후에 물품 추가 페이지로 이동
    wait(2000).then(() => navigate(-1));
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={(e) => e.preventDefault()}
          className='flex w-full flex-col px-5 text-start'
        >
          <div className='flex flex-col gap-8 py-3'>
            <ItemField name='name' label='대여 물품의 이름을 작성해주세요.'>
              {(field) => (
                <Input
                  value={field.value}
                  onChange={field.onChange}
                  variant='underline'
                  placeholder='물품 이름을 입력해주세요.'
                />
              )}
            </ItemField>
            <ItemField name='type' label='대여 물품의 종류를 선택해주세요.'>
              {(field) => (
                <div className='flex w-full gap-2'>
                  {ITEM_TYPE.map((item) => (
                    <Button
                      key={item.value}
                      variant={
                        field.value === item.value ? 'moonTag' : 'outline'
                      }
                      onClick={() => field.onChange(item.value)}
                    >
                      {item.type}
                    </Button>
                  ))}
                </div>
              )}
            </ItemField>
            <ItemField name='approved'>
              {(field) => (
                <div className='flex w-full items-center gap-2'>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <p>해달 구성원들의 해당 물품 대여를 승인합니다.</p>
                </div>
              )}
            </ItemField>
          </div>
          <div className='flex justify-center py-2'>
            <Button
              type='submit'
              onClick={() => form.handleSubmit(onSubmit)()}
              variant='primary'
              className='px-5'
            >
              물품 추가
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};
