import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import { TeamSearchResponse } from '@/apis/models';
import { CalendarIcon, MagnifyingGlassIcon } from '@/assets/icons';
import {
  Button,
  ErrorMessage,
  Input,
  InputWithIcon,
  Label,
  RadioGroup,
  Select,
} from '@/components';
import { TimeSelect } from '@/routes/matches/create/-components/TimeSelect';

import * as styles from './MatchCreateForm.css';
import {
  MatchCreateFormData,
  matchCreateFormSchema,
} from './MatchCreateForm.schema';

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

const matchTypeOptions: {
  value: MatchCreateFormData['matchType'];
  label: string;
}[] = [
  { value: '리그', label: '리그' },
  { value: '대회', label: '대회' },
  { value: '친선경기', label: '친선 경기' },
];

interface MatchCreateFormProps {
  teamList: TeamSearchResponse[];
  onSubmit?: (data: MatchCreateFormData) => void;
}

export const MatchCreateForm = ({
  teamList,
  onSubmit,
}: MatchCreateFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
    watch,
    setValue,
  } = useForm<MatchCreateFormData>({
    mode: 'all',
    resolver: zodResolver(matchCreateFormSchema),
    defaultValues: {
      plannedStartTime: '',
      plannedEndTime: '',
    },
  });

  useFormPersist('match-create-form', {
    watch,
    setValue,
    storage: window.localStorage,
  });

  const handleFormSubmit = (data: MatchCreateFormData) => {
    onSubmit?.(data);
  };

  const handleReset = () => {
    reset();
  };

  const timeOptions = generateTimeOptions();

  const teamOptions = teamList.map(team => ({
    value: team.id.toString(),
    label: team.name,
  }));

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className={styles.fullWidthField}>
          <Label label='경기 유형' required>
            <Controller
              name='matchType'
              control={control}
              render={({ field }) => (
                <RadioGroup
                  name={field.name}
                  options={matchTypeOptions}
                  value={field.value}
                  onChange={field.onChange}
                  isError={!!errors.matchType}
                />
              )}
            />
            <ErrorMessage message={errors.matchType?.message} />
          </Label>
        </div>

        <div className={styles.fullWidthField}>
          <Label label='매치명' required>
            <Input
              placeholder='매치명을 입력해주세요.'
              isError={!!errors.title}
              {...register('title')}
            />
            <ErrorMessage message={errors.title?.message} />
          </Label>
        </div>

        <div className={styles.gridContainer({ columns: 2 })}>
          <Label label='소속팀' required>
            <Controller
              name='homeTeamId'
              control={control}
              render={({ field }) => (
                <Select
                  options={teamOptions}
                  placeholder='소속팀을 선택해주세요.'
                  value={field.value ? field.value.toString() : ''}
                  onChange={e =>
                    field.onChange(
                      e.target.value ? Number(e.target.value) : undefined,
                    )
                  }
                  isError={!!errors.homeTeamId}
                />
              )}
            />
            <ErrorMessage message={errors.homeTeamId?.message} />
          </Label>
          <Label label='상대팀' required>
            <Controller
              name='awayTeamId'
              control={control}
              render={({ field }) => (
                <Select
                  options={teamOptions}
                  placeholder='상대팀을 선택해주세요.'
                  value={field.value ? field.value.toString() : ''}
                  onChange={e =>
                    field.onChange(
                      e.target.value ? Number(e.target.value) : undefined,
                    )
                  }
                  isError={!!errors.awayTeamId}
                />
              )}
            />
            <ErrorMessage message={errors.awayTeamId?.message} />
          </Label>
        </div>

        {/* FIXME: 추후 장소 선택 컴포넌트로 전환 */}
        <div className={styles.gridContainer({ columns: 2 })}>
          <Label label='경기장 주소' required>
            <InputWithIcon
              placeholder='주소를 입력해주세요.'
              isError={!!errors.stadium}
              {...register('stadium')}
              icon={<MagnifyingGlassIcon />}
            />
            <ErrorMessage message={errors.stadium?.message} />
          </Label>
          <Label label='상세 주소'>
            <Input
              placeholder='상세주소를 입력해주세요.'
              isError={!!errors.detailAddress}
              {...register('detailAddress')}
            />
            <ErrorMessage message={errors.detailAddress?.message} />
          </Label>
        </div>

        <div className={styles.gridContainer({ columns: 2 })}>
          <Label label='날짜' required>
            <InputWithIcon
              placeholder='날짜를 선택해주세요.'
              isError={!!errors.matchDate}
              {...register('matchDate')}
              type='date'
              icon={<CalendarIcon />}
            />
            <ErrorMessage message={errors.matchDate?.message} />
          </Label>
          <Label label='시간' required>
            <TimeSelect
              startTimeSelect={
                <Controller
                  name='plannedStartTime'
                  control={control}
                  render={({ field }) => (
                    <Select
                      options={timeOptions}
                      placeholder='-- : --'
                      tabIndex={0}
                      value={field.value}
                      onChange={field.onChange}
                      isError={!!errors.plannedStartTime}
                    />
                  )}
                />
              }
              endTimeSelect={
                <Controller
                  name='plannedEndTime'
                  control={control}
                  render={({ field }) => (
                    <Select
                      options={timeOptions}
                      placeholder='-- : --'
                      tabIndex={0}
                      value={field.value}
                      onChange={field.onChange}
                      isError={!!errors.plannedEndTime}
                    />
                  )}
                />
              }
            />
            <ErrorMessage
              message={
                errors.plannedStartTime?.message ||
                errors.plannedEndTime?.message
              }
            />
          </Label>
        </div>

        <div className={styles.gridContainer({ columns: 4 })}>
          <Label label='주심' required>
            <Input
              placeholder='이름을 입력해주세요.'
              isError={!!errors.mainRefereeName}
              {...register('mainRefereeName')}
            />
            <ErrorMessage message={errors.mainRefereeName?.message} />
          </Label>
          <Label label='부심1' required>
            <Input
              placeholder='이름을 입력해주세요.'
              isError={!!errors.assistantReferee1}
              {...register('assistantReferee1')}
            />
            <ErrorMessage message={errors.assistantReferee1?.message} />
          </Label>
          {/* 디자인에 없어서 임의로 추가 */}
          <Label label='부심2'>
            <Input
              placeholder='이름을 입력해주세요.'
              isError={!!errors.assistantReferee2}
              {...register('assistantReferee2')}
            />
            <ErrorMessage message={errors.assistantReferee2?.message} />
          </Label>
          <Label label='대기심'>
            <Input
              placeholder='이름을 입력해주세요.'
              isError={!!errors.fourthReferee}
              {...register('fourthReferee')}
            />
            <ErrorMessage message={errors.fourthReferee?.message} />
          </Label>
        </div>

        {/* 디자인에 없어서 임의로 추가, 좌측 배치를 위해 columns 4 지정 */}
        <div className={styles.gridContainer({ columns: 4 })}>
          <Label label='전반 시간 (분)' required>
            <Input
              type='number'
              placeholder='45'
              isError={!!errors.firstHalfPeriod}
              {...register('firstHalfPeriod', { valueAsNumber: true })}
            />
            <ErrorMessage message={errors.firstHalfPeriod?.message} />
          </Label>
          <Label label='후반 시간 (분)' required>
            <Input
              type='number'
              placeholder='45'
              isError={!!errors.secondHalfPeriod}
              {...register('secondHalfPeriod', { valueAsNumber: true })}
            />
            <ErrorMessage message={errors.secondHalfPeriod?.message} />
          </Label>
        </div>

        <div className={styles.buttonContainer}>
          <Button type='button' variant='danger' onClick={handleReset}>
            초기화
          </Button>
          <Button
            type='button' // NOTE: 각 요소에서 엔터 누를 시 제출되지 않게
            variant='primary'
            onClick={handleSubmit(handleFormSubmit)}
          >
            다음으로
          </Button>
        </div>
      </form>
    </div>
  );
};
