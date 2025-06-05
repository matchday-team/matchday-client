import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';

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
} from '@/constants';

import * as styles from './TeamCreateForm.css';
import {
  type TeamCreateFormData,
  teamCreateFormSchema,
} from './TeamCreateForm.schema';
import { UniformColorPicker } from './UniformColorPicker';

interface TeamCreateFormProps {
  onSubmit?: (data: TeamCreateFormData) => void;
}

export function TeamCreateForm({ onSubmit }: TeamCreateFormProps) {
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
  } = useForm<TeamCreateFormData>({
    resolver: zodResolver(teamCreateFormSchema),
    defaultValues: {
      teamType: '',
      uniformColors: {
        top: '',
        bottom: '',
        socks: '',
      },
      teamImg: null,
    },
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

  const handleFormSubmit = (data: TeamCreateFormData) => {
    onSubmit?.(data);
  };

  const handleNoLimitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setValue('hasNoMemberLimit', checked);
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

            {/* 팀 유형과 창단 년도 */}
            <div className={styles.twoColumnGroup}>
              <div className={styles.fieldGroup}>
                <Label label='팀 유형' required>
                  <Select
                    options={Object.entries(TEAM_TYPE_OPTIONS).map(
                      ([value, label]) => ({
                        value,
                        label,
                      }),
                    )}
                    placeholder='팀 유형을 선택해주세요.'
                    {...register('teamType')}
                    isError={!!errors.teamType}
                  />
                  <ErrorMessage>{errors.teamType?.message}</ErrorMessage>
                </Label>
              </div>
              <div className={styles.fieldGroup}>
                <Label label='창단 년도' required>
                  <Input
                    {...register('foundedYear', { valueAsNumber: true })}
                    type='number'
                    placeholder='2025'
                    isError={!!errors.foundedYear}
                  />
                  <ErrorMessage>{errors.foundedYear?.message}</ErrorMessage>
                </Label>
              </div>
            </div>

            {/* 활동지역 */}
            <div className={styles.fieldGroup}>
              <Label label='활동지역' required>
                <Select
                  options={REGION_OPTIONS}
                  placeholder='활동지역을 선택해주세요.'
                  {...register('activityArea')}
                  isError={!!errors.activityArea}
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
