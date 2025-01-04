import { useContext, useState } from 'react';
import { createUserAttendanceTimeEntrie, getCurrentStatus, getUserTimeEntries, getUserTimeEntriesForDate } from '../services/attendance';
import { Attendance, CreateAttendanceEntrie } from '../shared/Attendance';
import { ContextStatus } from 'modules/core/layouts/contexts/clockTimeEntryStatus';

export function useAttendance() {

  const { entrieStatus, setEntrieStatus } = useContext(ContextStatus);
  const [entries, setEntries] = useState<Attendance[] | null>(null);

  const onGetCurrentStatus = async (userID: string) => {
    const currentStatus = await getCurrentStatus(userID);
    setEntrieStatus(currentStatus[0]);
  }

  const onChangeUserAttendance = async (newEntrie: CreateAttendanceEntrie) => {
    const entryStatus = await createUserAttendanceTimeEntrie(newEntrie);
    setEntrieStatus(entryStatus);
  }

  const onGetUserTimeEntries = async (userID: string) => {
    const entriess = await getUserTimeEntries(userID);
    setEntries(entriess);
    return entries;
  }

  const onGetUserTimeEntriesDate = async (userID: string, date: string) => {
    const entriess = await getUserTimeEntriesForDate(userID, date);
    setEntries(entriess);
  }

  return { entrieStatus, entries, setEntrieStatus, onGetUserTimeEntriesDate, onChangeUserAttendance, onGetCurrentStatus, onGetUserTimeEntries }
}