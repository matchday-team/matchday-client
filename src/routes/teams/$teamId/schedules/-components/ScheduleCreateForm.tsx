import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { CalendarIcon, PlusIcon, XIcon } from '@/assets/icons';
import {
  ErrorMessage,
  Input,
  InputWithIcon,
  Label,
  Select,
} from '@/components';
import { TimeSelect } from '@/routes/matches/create/-components/TimeSelect';

import * as styles from './ScheduleCreateForm.css';

interface ScheduleCreateFormProps {
  selectedDate: string;
  onCancel: () => void;
  onSubmit: (formData: ScheduleFormData) => void;
}

const scheduleFormSchema = z.object({
  title: z.string().min(1, '일정 이름을 입력해주세요.'),
  date: z.string().min(1, '날짜를 입력해주세요.'),
  startTime: z.string().min(1, '시작 시간을 입력해주세요.'),
  endTime: z.string().min(1, '종료 시간을 입력해주세요.'),
  description: z.string().optional(),
});

export type ScheduleFormData = z.infer<typeof scheduleFormSchema>;

const generateTimeOptions = () => {
  return Array.from({ length: 24 }, (_, hour) =>
    Array.from({ length: 2 }, (_, minuteIndex) => {
      const minute = minuteIndex * 30;
      const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;

      return {
        value: timeString,
        label: timeString,
      };
    }),
  ).flat();
};

export const ScheduleCreateForm = ({
  selectedDate,
  onCancel,
  onSubmit,
}: ScheduleCreateFormProps) => {
  const timeOptions = generateTimeOptions();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ScheduleFormData>({
    resolver: zodResolver(scheduleFormSchema),
    defaultValues: {
      title: '',
      date: selectedDate,
      startTime: '12:30',
      endTime: '14:30',
      description: '',
    },
  });

  const onFormSubmit = (data: ScheduleFormData) => {
    onSubmit(data);
  };

  return (
    <div className={styles.rootContainer}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.titleSection}>
            <h2 className={styles.title}>일정 등록</h2>
          </div>
          <button className={styles.cancelButton} onClick={onCancel}>
            <div className={styles.cancelIcon}>
              <XIcon />
            </div>
            <span className={styles.cancelText}>화면 닫기</span>
          </button>
        </div>
      </div>

      <form
        id='schedule-form'
        className={styles.content}
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <div className={styles.field}>
          <Label label='일정 이름' required>
            <Input
              placeholder='단체 축구 훈련'
              isError={!!errors.title}
              {...register('title')}
            />
            <ErrorMessage>{errors.title?.message}</ErrorMessage>
          </Label>
        </div>

        <div className={styles.field}>
          <Label label='날짜' required>
            <InputWithIcon
              placeholder='날짜를 선택해주세요.'
              isError={!!errors.date}
              {...register('date')}
              type='date'
              icon={<CalendarIcon />}
              variant='gray-small'
            />
            <ErrorMessage>{errors.date?.message}</ErrorMessage>
          </Label>
        </div>

        <div className={styles.field}>
          <Label label='시간' required>
            <TimeSelect
              startTimeSelect={
                <Controller
                  name='startTime'
                  control={control}
                  render={({ field }) => (
                    <Select
                      options={timeOptions}
                      placeholder='-- : --'
                      value={field.value}
                      onChange={field.onChange}
                      isError={!!errors.startTime}
                      variant='gray-small'
                    />
                  )}
                />
              }
              endTimeSelect={
                <Controller
                  name='endTime'
                  control={control}
                  render={({ field }) => (
                    <Select
                      options={timeOptions}
                      placeholder='-- : --'
                      value={field.value}
                      onChange={field.onChange}
                      isError={!!errors.endTime}
                      variant='gray-small'
                    />
                  )}
                />
              }
            />
            <ErrorMessage>
              {errors.startTime?.message || errors.endTime?.message}
            </ErrorMessage>
          </Label>
        </div>

        <div className={styles.field} style={{ flex: 1 }}>
          <Label label='일정 세부사항'>
            <textarea
              className={styles.textarea}
              placeholder='내용을 입력해주세요'
              rows={8}
              {...register('description')}
            />
            <ErrorMessage>{errors.description?.message}</ErrorMessage>
          </Label>
        </div>
        <button
          className={styles.submitButton}
          type='submit'
          form='schedule-form'
        >
          <div className={styles.submitIcon}>
            <PlusIcon />
          </div>
          일정 생성하기
        </button>
      </form>
    </div>
  );
};
