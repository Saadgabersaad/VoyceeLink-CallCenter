import { api, HttpMethod } from 'modules/core/utils/api'
import { CreateAttendanceEntrie } from '../shared/Attendance'

export const createUserAttendanceTimeEntrie = (createAttendanceEntrie: CreateAttendanceEntrie) => {
  return api<CreateAttendanceEntrie>(HttpMethod.POST, '/time-entries', createAttendanceEntrie)
}