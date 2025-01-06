import React, { createContext, useState } from 'react';

type EmployeeNewDepartmentState = {
  employeeId: string
  departmentId: string
  positionId: string
}

export type NewAreaContextType = {
  newAreaState: EmployeeNewDepartmentState[]
  handleAddNewArea: (newArea: EmployeeNewDepartmentState) => void
}

export const NewAreaContext = createContext({} as NewAreaContextType)

export default function NewAreaContextProvider({ children }: {
  children: React.ReactNode
}) {
  const [newAreaState, setNewAreaState] = useState<EmployeeNewDepartmentState[]>([])
  
  const handleAddNewArea = (newArea: EmployeeNewDepartmentState) => {
    const { employeeId, departmentId, positionId } = newArea

    setNewAreaState((prev) => {
      if (prev.some((area) => area.employeeId === employeeId)) {
        return prev.map((area) => {
          if (area.employeeId === employeeId) {
            return {
              ...area,
              departmentId,
              positionId
            }
          }
          return area
        })
      }
      return [...prev, { employeeId, departmentId, positionId }]
    })
  }

  return (
    <NewAreaContext.Provider value={{
      newAreaState,
      handleAddNewArea
    }}>
      {children}
    </NewAreaContext.Provider>
  )
}
