import Vue from "vue";
import Router from "vue-router";
import BooksList from "./components/BooksList.vue";
import AddBook from "./components/AddBook.vue";
 
Vue.use(Router);
 
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/books",
      name: "books",
      alias: "/book",
      component: BooksList,
    },
	{
      path: "/add",
      name: "add",
      component: AddBook
    },
  ]
});