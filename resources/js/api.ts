import * as Type from './types/type';
export async function addTask(group_id: number, task_id: number, task: Type.Task) {

}
export async function deleteTask(group_id: number, task_id: number) {

}
export async function getGroupUsers(group_id: number): Promise<Type.User[]> {
    return [];

}
export async function addGroup(group: Type.Group) {

}
export async function leaveGroup(group_id: number, user_id: number) { }
export async function searchGroup(searchText: string) { }
export async function joinGroup(searchText: string) { }