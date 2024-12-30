import { useContext, useState } from 'react';
import { createUserAttendanceTimeEntrie, getCurrentStatus, getUserTimeEntries } from '../services/attendance';
import { Attendance, CreateAttendanceEntrie } from '../shared/Attendance';
import { ContextStatus } from 'modules/core/layouts/app';

export function useAttendance() {

  const [entrieState, setEntrieState] = useContext(ContextStatus);
  const [entries, setEntries] = useState<Attendance[] | null>(null);

  const onGetCurrentStatus = async (userID:string) => {
    const currentStatus = await getCurrentStatus(userID);
    setEntrieState(currentStatus[0]);
  }

  const onChangeUserAttendance = async (newEntrie: CreateAttendanceEntrie) => {
    const entryStatus = await createUserAttendanceTimeEntrie(newEntrie);
    setEntrieState(entryStatus);
  }

  const onGetUserTimeEntries = async (userID:string) => {
    const entriess = await getUserTimeEntries(userID);
    setEntries(entriess);
  }

  return {entrieState, entries, onChangeUserAttendance, onGetCurrentStatus, onGetUserTimeEntries}
}