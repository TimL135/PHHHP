import axios from 'axios';
import * as Type from './types/type';
export async function addTask(group_id: number, task_id: number, task: Type.Task) {
    axios.post("/api/addTask", { group_id, task_id, task })
}
export async function deleteTask(group_id: number, task_id: number) { }
export async function addGroup(group: Type.Group) { }
export async function leaveGroup(group_id: number, user_id: number) { }
export async function searchGroup(searchText: string) { }
export async function joinGroup(searchText: string) { }