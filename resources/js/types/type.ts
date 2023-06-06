export type Id = number;
export type ShoppingKey = string;
export type ShoppingAmount = string;
export type Errors = { [key: string]: any };
export interface Group {
  id: Id;
  name: string;
  users: Id[];
  tasks: Tasks;
  is_public: boolean
}
export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
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

export type Tasks = { [key: Id]: Task };

export interface Task {
  title: string;
  notes: string;
  done: boolean;
  creator_id: Id;
  worker_id?: Id;
  appointment: string;
  create_at?: string;
  doneAt?: string;
  repeat: 0 | 1 | 7 | 14 | 31;
}