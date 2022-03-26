import { createStore } from "vuex";
import ITodoList from "@/interfaces/TodoList";
import ITodo from "@/interfaces/Todo";
import axios from "axios";

export default createStore({
  state: {
    todoListArray: [] as Array<ITodoList>,
    currentTodoList: {} as ITodoList,
    allTodos: [] as Array<ITodo>,
    currentTodosArray: [] as Array<ITodo>,
  },
  mutations: {
    SET_TODO_LIST_ARRAY(state, payload: Array<ITodoList>) {
      state.todoListArray = payload;
    },
    SET_CURRENT_TODO_LIST(state, payload: ITodoList) {
      state.currentTodoList = payload;
    },
    SET_ALL_TODOS(state, payload: Array<ITodo>) {
      state.allTodos = payload;
    },
    SET_CURRENT_TODOS_ARRAY(state, payload: Array<ITodo>) {
      state.currentTodosArray = payload;
    },
  },
  actions: {
    getAllTodoListsAction({ commit }) {
      axios.get("lists").then((response) => {
        commit("SET_TODO_LIST_ARRAY", response.data);
      });
    },
    getAllTodosAction({ commit }) {
      axios.get("todos").then((response) => {
        commit("SET_ALL_TODOS", response.data);
      });
    },
    getTodosOfCurrentTodoListAction({ state, commit }, todoList: ITodoList) {
      commit("SET_CURRENT_TODO_LIST", todoList);
      const todos = state.allTodos.filter(
        (item) => item.list_id === todoList.id
      );
      commit("SET_CURRENT_TODOS_ARRAY", todos);
    },
  },
  modules: {},
});
