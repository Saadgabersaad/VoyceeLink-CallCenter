import { useState } from 'react'
import { createUserAttendanceTimeEntrie } from '../services/attendance'
import { CreateAttendanceEntrie } from '../shared/Attendance'

export function useAttendance() {
  //
  const [entrieState, setEntrieState] = useState<CreateAttendanceEntrie | null>(null)


  const onChangeUserAttendance = async (newEntrie: CreateAttendanceEntrie) => {
    setEntrieState(newEntrie)
    await createUserAttendanceTimeEntrie(newEntrie)
  }
}
