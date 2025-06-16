import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components';
import { Checkbox, Input } from '@/components/CommonForm';

import { LexicalEditor } from './LexicalEditor';
import * as styles from './NoticeCreateForm.css';

const noticeCreateSchema = z.object({
  title: z.string().min(1, '제목을 입력해주세요'),
  content: z.string().min(1, '내용을 입력해주세요'),
  isImportant: z.boolean().default(false),
});

type NoticeCreateFormData = z.infer<typeof noticeCreateSchema>;

export const NoticeCreateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<NoticeCreateFormData>({
    resolver: zodResolver(noticeCreateSchema),
    defaultValues: {
      title: '',
      content: '',
      isImportant: false,
    },
  });

  const onSubmit = (data: NoticeCreateFormData) => {
    console.log('공지사항 생성:', data);
  };

  const handleContentChange = (content: string) => {
    setValue('content', content);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <div className={styles.headerSection}>
        <div className={styles.titleRow}>
          <Input
            {...register('title')}
            placeholder='제목을 입력하세요'
            className={styles.titleInput}
            isError={!!errors.title}
          />
          <Checkbox
            {...register('isImportant')}
            className={styles.importantCheckbox}
          >
            중요
          </Checkbox>
        </div>
      </div>

      <div className={styles.editorSection}>
        <LexicalEditor
          placeholder='내용을 입력해주세요'
          onChange={handleContentChange}
        />
      </div>

      <div className={styles.actionSection}>
        <Button type='submit' variant='primary' className={styles.submitButton}>
          게시하기
        </Button>
      </div>
    </form>
  );
};
