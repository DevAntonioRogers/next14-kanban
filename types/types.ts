export interface Task {
  id: string;
  status: string;
  name: string

}

export interface BoardTypes {
  tasks: Task[];
  id: string;
  name: string
}