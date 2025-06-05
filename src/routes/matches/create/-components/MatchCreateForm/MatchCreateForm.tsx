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
import { TEMP_SAVED_MATCH_CREATE_FORM_KEY } from '@/constants';
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
  onSubmit: (data: MatchCreateFormData) => Promise<void>;
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

  useFormPersist(TEMP_SAVED_MATCH_CREATE_FORM_KEY, {
    watch,
    setValue,
    storage: window.localStorage,
  });

  const handleFormSubmit = async (data: MatchCreateFormData) => {
    await onSubmit(data);
    reset();
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
            <ErrorMessage>{errors.matchType?.message}</ErrorMessage>
          </Label>
        </div>

        <div className={styles.fullWidthField}>
          <Label label='매치명' required>
            <Input
              placeholder='매치명을 입력해주세요.'
              isError={!!errors.title}
              {...register('title')}
            />
            <ErrorMessage>{errors.title?.message}</ErrorMessage>
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
            <ErrorMessage>{errors.homeTeamId?.message}</ErrorMessage>
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
            <ErrorMessage>{errors.awayTeamId?.message}</ErrorMessage>
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
            <ErrorMessage>{errors.stadium?.message}</ErrorMessage>
          </Label>
          <Label label='상세 주소'>
            <Input
              placeholder='상세주소를 입력해주세요.'
              isError={!!errors.detailAddress}
              {...register('detailAddress')}
            />
            <ErrorMessage>{errors.detailAddress?.message}</ErrorMessage>
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
            <ErrorMessage>{errors.matchDate?.message}</ErrorMessage>
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
            <ErrorMessage>
              {errors.plannedStartTime?.message ||
                errors.plannedEndTime?.message}
            </ErrorMessage>
          </Label>
        </div>

        <div className={styles.gridContainer({ columns: 4 })}>
          <Label label='주심' required>
            <Input
              placeholder='이름을 입력해주세요.'
              isError={!!errors.mainRefereeName}
              {...register('mainRefereeName')}
            />
            <ErrorMessage>{errors.mainRefereeName?.message}</ErrorMessage>
          </Label>
          <Label label='부심1' required>
            <Input
              placeholder='이름을 입력해주세요.'
              isError={!!errors.assistantReferee1}
              {...register('assistantReferee1')}
            />
            <ErrorMessage>{errors.assistantReferee1?.message}</ErrorMessage>
          </Label>
          {/* 디자인에 없어서 임의로 추가 */}
          <Label label='부심2'>
            <Input
              placeholder='이름을 입력해주세요.'
              isError={!!errors.assistantReferee2}
              {...register('assistantReferee2')}
            />
            <ErrorMessage>{errors.assistantReferee2?.message}</ErrorMessage>
          </Label>
          <Label label='대기심'>
            <Input
              placeholder='이름을 입력해주세요.'
              isError={!!errors.fourthReferee}
              {...register('fourthReferee')}
            />
            <ErrorMessage>{errors.fourthReferee?.message}</ErrorMessage>
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
            <ErrorMessage>{errors.firstHalfPeriod?.message}</ErrorMessage>
          </Label>
          <Label label='후반 시간 (분)' required>
            <Input
              type='number'
              placeholder='45'
              isError={!!errors.secondHalfPeriod}
              {...register('secondHalfPeriod', { valueAsNumber: true })}
            />
            <ErrorMessage>{errors.secondHalfPeriod?.message}</ErrorMessage>
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
