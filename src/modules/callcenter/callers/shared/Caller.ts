export interface Caller {
    id: string;
    callerName: string;
    email: string;
    type: string;
    status: string;
    video: string;
    voice: string;

}
export interface CreateCaller{
    name:string;
    email:string;
    type:string;
}