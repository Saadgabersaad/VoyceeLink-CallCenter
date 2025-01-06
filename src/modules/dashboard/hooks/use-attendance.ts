import { useState } from 'react';
import { createUserAttendanceTimeEntrie, getCurrentStatus, getUserTimeEntries, getUserTimeEntriesForDate } from '../services/attendance';
import { Attendance, CreateAttendanceEntrie } from '../shared/Attendance';

export function useAttendance() {

  const [ entrieStatus, setEntrieStatus ] = useState<Attendance|null>(null);
  const [entries, setEntries] = useState<Attendance[]>([]);

  const onGetCurrentStatus = async (userID: string) => {
    const currentStatus = await getCurrentStatus(userID);
    setEntrieStatus(currentStatus[0]);
  }

  const onChangeUserAttendance = async (newEntrie: CreateAttendanceEntrie) => {
    const entryStatus = await createUserAttendanceTimeEntrie(newEntrie);
    setEntrieStatus(entryStatus);
    setEntries((currentEntries)=>{
      return [entryStatus,...currentEntries];
    })
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