import { useState } from 'react';

import { CalendarIcon, MagnifyingGlassIcon } from '@/assets/icons';
import {
  Button,
  ErrorMessage,
  Input,
  InputWithIcon,
  Label,
  RadioGroup,
} from '@/components';
import { TimeSelect } from '@/routes/matches/create/-components/TimeSelect';

import * as styles from './MatchCreateForm.css';

const matchTypeOptions = [
  { value: 'league', label: '리그' },
  { value: 'tournament', label: '대회' },
  { value: 'friendly', label: '친선 경기' },
];

interface MatchCreateFormProps {
  className?: string;
}

export const MatchCreateForm = ({ className }: MatchCreateFormProps) => {
  const [selectedMatchType, setSelectedMatchType] = useState('');
  const [formData, setFormData] = useState({
    matchName: '교내 리그 3R 매치',
    homeTeam: '',
    awayTeam: 'FC 수원',
    address: '서울 성동구 왕십리로 22',
    detailAddress: '한양대학교 종합운동장',
    date: '2025-04-18-금',
    startTime: '',
    endTime: '',
    mainReferee: '',
    assistantReferee: '',
    fourthOfficial: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className={`${styles.container} ${className || ''}`}>
      <div className={styles.fullWidthField}>
        <Label label='경기 유형' required>
          <RadioGroup
            name='matchType'
            options={matchTypeOptions}
            value={selectedMatchType}
            onChange={setSelectedMatchType}
          />
          <ErrorMessage message='' />
        </Label>
      </div>

      <div className={styles.fullWidthField}>
        <Label label='매치명' required>
          <Input
            placeholder='매치명을 입력해주세요.'
            value={formData.matchName}
            onChange={e => handleInputChange('matchName', e.target.value)}
          />
          <ErrorMessage message='' />
        </Label>
      </div>

      <div className={styles.gridContainer({ columns: 2 })}>
        <Label label='소속팀' required>
          <Input
            placeholder='FC 서울'
            value={formData.homeTeam}
            onChange={e => handleInputChange('homeTeam', e.target.value)}
          />
          <ErrorMessage message='' />
        </Label>
        <Label label='상대팀' required>
          <Input
            placeholder='상대팀명을 입력해주세요.'
            value={formData.awayTeam}
            onChange={e => handleInputChange('awayTeam', e.target.value)}
          />
          <ErrorMessage message='' />
        </Label>
      </div>

      <div className={styles.gridContainer({ columns: 2 })}>
        <Label label='경기장 주소' required>
          <InputWithIcon
            placeholder='주소를 입력해주세요.'
            value={formData.address}
            onChange={e => handleInputChange('address', e.target.value)}
            icon={<MagnifyingGlassIcon />}
          />
          <ErrorMessage message='' />
        </Label>
        <Label label='상세 주소'>
          <Input
            placeholder='상세주소를 입력해주세요.'
            value={formData.detailAddress}
            onChange={e => handleInputChange('detailAddress', e.target.value)}
          />
          <ErrorMessage message='' />
        </Label>
      </div>

      <div className={styles.gridContainer({ columns: 2 })}>
        <Label label='날짜' required>
          <InputWithIcon
            placeholder='날짜를 선택해주세요.'
            value={formData.date}
            onChange={e => handleInputChange('date', e.target.value)}
            icon={<CalendarIcon />}
          />
          <ErrorMessage message='' />
        </Label>
        <Label label='시간' required>
          <TimeSelect
            startTime={formData.startTime}
            endTime={formData.endTime}
            onStartTimeChange={value => handleInputChange('startTime', value)}
            onEndTimeChange={value => handleInputChange('endTime', value)}
          />
          <ErrorMessage message='' />
        </Label>
      </div>

      <div className={styles.gridContainer({ columns: 3 })}>
        <Label label='주심' required>
          <Input
            placeholder='이름을 입력해주세요.'
            value={formData.mainReferee}
            onChange={e => handleInputChange('mainReferee', e.target.value)}
          />
          <ErrorMessage message='' />
        </Label>
        <Label label='부심' required>
          <Input
            placeholder='이름을 입력해주세요.'
            value={formData.assistantReferee}
            onChange={e =>
              handleInputChange('assistantReferee', e.target.value)
            }
          />
          <ErrorMessage message='' />
        </Label>
        <Label label='대기심'>
          <Input
            placeholder='이름을 입력해주세요.'
            value={formData.fourthOfficial}
            onChange={e => handleInputChange('fourthOfficial', e.target.value)}
          />
          <ErrorMessage message='' />
        </Label>
      </div>

      <div className={styles.buttonContainer}>
        <Button variant='danger'>초기화</Button>
        <Button variant='primary'>다음으로</Button>
      </div>
    </div>
  );
};
