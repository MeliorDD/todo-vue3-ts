import ITodo from "@/interfaces/Todo";

export default interface ITodoList {
  id: number;
  title: string;
  todos: Array<ITodo>;
}
