import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BooksList from "@/components/BooksList";
import AddBook from "@/components/AddBook";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
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
})
