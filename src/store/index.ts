import { createStore } from "vuex";
import ITodoList from "@/interfaces/TodoList";
import ITodo from "@/interfaces/Todo";
import axios from "axios";

export default createStore({
  state: {
    todoListArray: [] as Array<ITodoList>,
    currentTodoList: {} as ITodoList,
  },
  mutations: {
    SET_TODO_LIST_ARRAY(state, payload: Array<ITodoList>) {
      state.todoListArray = payload;
    },
    SET_CURRENT_TODO_LIST(state, payload: ITodoList) {
      state.currentTodoList = payload;
    },
  },
  actions: {
    getAllTodoLists({ commit }) {
      axios
        .get("")
        .then((response) => {
          commit("SET_TODO_LIST_ARRAY", response.data);
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
  modules: {},
});
