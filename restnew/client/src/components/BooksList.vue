	
<template>
    <div class="list row">
        <div class="col-md-6">
            <h4>Most Popular Books all the time</h4>
            

<table id="firstTable">
  <thead>
    <tr>
      <th>ID</th>
      <th>Image</th>
      <th>Name</th>
      <th>Published</th>
      <th>Rating</th>
      <th>Buy on</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="row in books">
      <td>{{row.id}}</td>
      <td><img v-bind:src="`http://localhost:8080/${row.image}`" /></td>
      <td>{{row.name}}</td>
      <td>{{row.published}}</td>
      <td>{{row.rating}}/10</td>
      <td>Amazon</td>
    </tr>
  </tbody>
</table>


        </div>
        <div class="col-md-6">
            <router-view @refreshData="refreshList"></router-view>
        </div>
    </div>
</template>
 
<script>
import http from "../http-common";
 
export default {
  name: "books-list",
  data() {
    return {
      books: []
    };
  },
  methods: {
    /* eslint-disable no-console */
    retrieveBooks() {
      http
        .get("/books")
        .then(response => {
          this.books = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveBooks();
    }
    /* eslint-enable no-console */
  },
  mounted() {
    this.retrieveBooks();
  }
};

</script>
 
<style>
.list {
    text-align: left;
    max-width: 700px;
    margin: auto;
    background-color: #fff;
    border: 15px solid #eaeaea;
    padding: 20px;
    box-sizing: border-box;
}
.list h4 {
    font-family: arial;
    font-size: 20px;
	margin-top: 0;
}
#firstTable th {
    font-family: arial;
    color: #a8a7a7;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 14px;
    padding: 0 20px 20px;
}
#firstTable td {
    font-family: arial;
    padding: 0 20px;
}
#firstTable tbody tr {
    background-color: #f0f0f0;
}
#firstTable {
    width: 100%;
}
#firstTable img{
height:70px;
width:70px;
}
</style>