import { atomFamily, atom, selectorFamily } from "recoil";
import axios from "axios";
import TODOS from "../../todos";

// fetch from local todos
/*
export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: (id) => {
    console.log(TODOS);
    return TODOS.find((x) => x.id === id);
  },
});
*/

// fetch from a hosted backend
export const todosAtomFamily = atomFamily({
  key : "todosAtomFamily",
  default : selectorFamily({
    key : "todoSelectorFamily",
    get : function(id){
      return async function ({get}){
        const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
        return res.data.todo;
      }
    }
  })
})

export const todoAtom = atom({
  key: "todoAtom",
  default: 1,
});
