export class TaskModel {
    TaskId: number;
    TaskName: string;
    Priority: number;
    ParentTaskId: number;
    ParentTaskName: string;
    StartDate: Date;
    EndDate: Date;
    Status:string;
    ProjectId: number;
    ProjectName: string;
    IsParentTask: boolean;
    ManagerName: string;
    ManagerId: number;
    
    constructor() {
    }
}