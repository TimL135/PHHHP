export type Id = string;
export type ShoppingKey = string;
export type ShoppingAmount = string;
export type Errors = { [key: string]: any };
export interface Group {
  id: Id;
  name: string;
  users: User[];
  tasks: Task[];
  owner_id: Id;
  is_public: boolean
}
export interface User {
  id: Id;
  name: string;
  email: string;
  email_verified_at: string;
  groups: Group[];
}
export interface ShoppingItem {
  amount: ShoppingAmount
  done: boolean
  description: string
  creator: Id
}
export interface ShoppingList {
  shoppingItems: { [key: ShoppingKey]: ShoppingItem };
  allShoppingItems: ShoppingKey[];
}

export interface Task {
  id: Id;
  title: string;
  notes: string;
  done: boolean;
  creator_id: Id;
  worker_id?: Id;
  appointment: string;
  created_at: string;
  doneAt?: string;
  repeat: 0 | 1 | 7 | 14 | 31;
}