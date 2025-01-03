export type CreateEmployee = {
    name: string
    lastname: string
    email: string
    phone: string
    department: number
    picture: string
    positions: number[]
}
export type Employees = {
    id: string;
    name: string;
    lastname: string;
    email: string;
    phone: string;
    department: number;
    status: string;
    positionId: string;
    createdAt: string;
    position: {
        id: string;
        name: string;
        description: string;
        department_id: string;
        created_at: string;
        updated_at: string;
        tenant_id: string;
    };
};
