import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import { Controller, useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import DefaultTeamLogo from '@/assets/images/teams/default-team-logo.svg?react';
import {
  Button,
  Checkbox,
  ErrorMessage,
  Input,
  Label,
  Select,
} from '@/components';
import {
  MAX_IMAGE_FILE_SIZE,
  REGION_OPTIONS,
  TEAM_TYPE_OPTIONS,
  TEMP_SAVED_TEAM_CREATE_FORM_KEY,
} from '@/constants';

import * as styles from './TeamCreateForm.css';
import {
  type TeamCreateFormData,
  teamCreateFormSchema,
} from './TeamCreateForm.schema';
import { UniformColorPicker } from './UniformColorPicker';

const yearOptions = Array.from(
  { length: new Date().getFullYear() - 1800 + 1 },
  (_, i) => {
    const year = new Date().getFullYear() - i;

    return {
      value: year.toString(),
      label: year.toString(),
    };
  },
);

interface TeamCreateFormProps {
  onSubmit: (data: TeamCreateFormData) => Promise<void>;
  onSuccess: () => void;
}

export function TeamCreateForm({ onSubmit, onSuccess }: TeamCreateFormProps) {
  const [profileImagePreview, setProfileImagePreview] = useState<string | null>(
    null,
  );

  const { enqueueSnackbar } = useSnackbar();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
    resetField,
    control,
  } = useForm<TeamCreateFormData>({
    resolver: zodResolver(teamCreateFormSchema),
    defaultValues: {
      activityArea: '',
      teamType: '',
      foundedYear: '',
      uniformColors: {
        top: '',
        bottom: '',
        socks: '',
      },
      teamImg: null,
    },
  });

  useFormPersist(TEMP_SAVED_TEAM_CREATE_FORM_KEY, {
    watch,
    setValue,
    storage: window.localStorage,
  });

  const hasNoMemberLimit = watch('hasNoMemberLimit');
  const uniformColors = watch('uniformColors');

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    if (!file.type.startsWith('image/')) {
      enqueueSnackbar('이미지 파일만 업로드 가능합니다.', { variant: 'error' });
      return;
    }

    if (file.size > MAX_IMAGE_FILE_SIZE) {
      enqueueSnackbar('파일 크기는 10MB 이하여야 합니다.', {
        variant: 'error',
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = e => {
      setProfileImagePreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleImageDelete = () => {
    setProfileImagePreview(null);
    setValue('teamImg', null);
  };

  const handleColorChange = (
    type: 'top' | 'bottom' | 'socks',
    color: string,
  ) => {
    setValue(`uniformColors.${type}`, color, { shouldValidate: true });
  };

  const handleFormSubmit = async (data: TeamCreateFormData) => {
    try {
      await onSubmit(data);
      reset();
      onSuccess();
    } catch (error) {
      console.error('팀 생성 실패:', error);
    }
  };

  const handleNoLimitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    // NOTE: shouldValidate 옵션이 없으면 오류 상태에서 체크 박스를 토글해도 즉시 반영되지 않아서 추가
    setValue('hasNoMemberLimit', checked, { shouldValidate: true });

    if (checked) {
      setValue('memberLimit', 0, { shouldValidate: true });
    } else {
      resetField('memberLimit');
      setValue('memberLimit', watch('memberLimit'), { shouldValidate: true });
    }
  };

  const handleReset = () => {
    reset();
    setProfileImagePreview(null);
  };

  return (
    <div className={styles.rootContainer}>
      <div className={styles.titleContainer}>
        <div className={styles.titleText}>팀 정보 입력</div>
        <div className={styles.titleText}>대표자 정보 입력</div>
      </div>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className={styles.formRootContainer}
      >
        <div className={styles.formContent}>
          <div className={styles.formColumnContainer}>
            {/* 프로필 이미지 */}
            <div className={styles.profileSection}>
              <div className={styles.profileImageContainer}>
                <div className={styles.profileImageWrapper}>
                  {profileImagePreview ? (
                    <img
                      src={profileImagePreview}
                      alt='팀 프로필 이미지'
                      className={styles.profileImage}
                    />
                  ) : (
                    <DefaultTeamLogo className={styles.profileImage} />
                  )}
                </div>
                <div className={styles.profileControls}>
                  <div className={styles.profileLabel}>프로필 이미지</div>
                  <div className={styles.profileButtons}>
                    <label className={styles.uploadButton}>
                      등록
                      <input
                        type='file'
                        accept='image/*'
                        onChange={handleImageSelect}
                        className={styles.hiddenInput}
                      />
                    </label>
                    <button
                      type='button'
                      onClick={handleImageDelete}
                      className={styles.deleteButton}
                    >
                      삭제
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 팀 이름 */}
            <div className={styles.fieldGroup}>
              <Label label='팀 이름' required>
                <Input
                  {...register('teamName')}
                  placeholder='팀 이름을 입력해주세요'
                  isError={!!errors.teamName}
                />
                <ErrorMessage>{errors.teamName?.message}</ErrorMessage>
              </Label>
            </div>

            {/* 팀 소개 */}
            <div className={styles.fieldGroup}>
              <Label label='팀 소개'>
                <Input
                  {...register('teamDescription')}
                  placeholder='팀 소개를 입력해주세요'
                  isError={!!errors.teamDescription}
                />
                <ErrorMessage>{errors.teamDescription?.message}</ErrorMessage>
              </Label>
            </div>

            {/* 팀 유형과 창단 연도 */}
            <div className={styles.twoColumnGroup}>
              <div className={styles.fieldGroup}>
                <Label label='팀 유형' required>
                  <Controller
                    name='teamType'
                    control={control}
                    render={({ field }) => (
                      <Select
                        options={Object.entries(TEAM_TYPE_OPTIONS).map(
                          ([value, label]) => ({
                            value,
                            label,
                          }),
                        )}
                        placeholder='팀 유형을 선택해주세요.'
                        value={field.value}
                        onChange={field.onChange}
                        isError={!!errors.teamType}
                      />
                    )}
                  />
                  <ErrorMessage>{errors.teamType?.message}</ErrorMessage>
                </Label>
              </div>
              <div className={styles.fieldGroup}>
                <Label label='창단 연도' required>
                  <Controller
                    name='foundedYear'
                    control={control}
                    render={({ field }) => (
                      <Select
                        options={yearOptions}
                        placeholder='창단 연도를 선택해주세요.'
                        value={field.value}
                        onChange={field.onChange}
                        isError={!!errors.foundedYear}
                      />
                    )}
                  />
                  <ErrorMessage>{errors.foundedYear?.message}</ErrorMessage>
                </Label>
              </div>
            </div>

            {/* 활동지역 */}
            <div className={styles.fieldGroup}>
              <Label label='활동지역' required>
                <Controller
                  name='activityArea'
                  control={control}
                  render={({ field }) => (
                    <Select
                      options={REGION_OPTIONS}
                      placeholder='활동지역을 선택해주세요.'
                      value={field.value}
                      onChange={field.onChange}
                      isError={!!errors.activityArea}
                    />
                  )}
                />
                <ErrorMessage>{errors.activityArea?.message}</ErrorMessage>
              </Label>
            </div>

            {/* 팀 유니폼 */}
            <div className={styles.fieldGroup}>
              <div className={styles.uniformSection}>
                <div className={styles.uniformHeader}>
                  <Label label='팀 유니폼' required>
                    <UniformColorPicker
                      uniformColors={uniformColors}
                      onColorChange={handleColorChange}
                    />
                    <ErrorMessage>
                      {errors.uniformColors?.top?.message ||
                        errors.uniformColors?.bottom?.message ||
                        errors.uniformColors?.socks?.message}
                    </ErrorMessage>
                  </Label>
                </div>
              </div>
            </div>
          </div>

          <div
            className={clsx(
              styles.formColumnContainer,
              styles.rightColumnContainer,
            )}
          >
            {/* 이름 */}
            <div className={styles.fieldGroup}>
              <Label label='이름' required>
                <Input
                  {...register('representativeName')}
                  placeholder='이름을 입력해주세요'
                  isError={!!errors.representativeName}
                />
                <ErrorMessage>
                  {errors.representativeName?.message}
                </ErrorMessage>
              </Label>
            </div>

            {/* 대표 연락처 */}
            <div className={styles.fieldGroup}>
              <Label label='대표 연락처' required>
                <Input
                  {...register('representativePhone')}
                  placeholder='전화번호를 입력해주세요'
                  isError={!!errors.representativePhone}
                />
                <ErrorMessage>
                  {errors.representativePhone?.message}
                </ErrorMessage>
              </Label>
            </div>

            {/* 멤버수 제한 */}
            <div className={styles.memberLimitGroup}>
              <Label label='멤버수 제한' required>
                <Input
                  {...register('memberLimit', { valueAsNumber: true })}
                  type='number'
                  placeholder='50'
                  disabled={hasNoMemberLimit}
                  isError={!!errors.memberLimit}
                  className={styles.memberLimitInput}
                />
                <Checkbox
                  checked={hasNoMemberLimit}
                  onChange={handleNoLimitChange}
                >
                  제한 없음
                </Checkbox>
                <ErrorMessage>{errors.memberLimit?.message}</ErrorMessage>
              </Label>
            </div>

            <div className={styles.submitSection}>
              <Button type='button' variant='danger' onClick={handleReset}>
                초기화
              </Button>
              <Button type='submit'>팀 생성하기</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
