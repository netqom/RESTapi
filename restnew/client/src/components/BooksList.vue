
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
    <tr v-for="row in books" v-on:click="show_panel_pricing_card()">
      <td>{{row.id}}</td>
      <td>
	  <div v-if="`${row.image}`!=''"><img v-bind:src="`http://localhost:8080/${row.image}`" /></div>
	  <div v-else><img v-bind:src="`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAM1BMVEXm5uazs7OwsLDa2trJycnX19fp6enh4eHPz8/l5eXd3d2urq7R0dG9vb24uLi1tbXBwcHTzhj9AAACdklEQVR4nO3d626jMBBAYcfAQBJu7/+0uxjShEy7q+BpI0/P96NSIoHkIxrCzQkBAAAAAAAAAAAAAAAAAAAA+C855nn5N47AloSq6fu+O2BZ/LysYn3ZX3xUkWaIhy09UpPt9XV2EEUuYzwd99Hk9kaqVDbprhlFPmtSvXtIuaTO2UhcNpE+M4nDJm1uEn9NZMhN4q/JJXszcdck+wPWY5NpP744DS9H8tbkvC8QO5F2UqP+XU2ePk4GWb7nv7il+G4S6+VI5dW9M01oQhOaLGii0USjiUYTjSYaTTSaaDTRaKLRRKOJRhONJhpNNKsmbaDJUxOZAk32TaS/dkKTfZPxNLGd7JosVz9iLzR5bDL+/TvR5EGolgViQ5O77XaNkSZ3VdxK3C4002S63dUz0ORrNKEJTWhCk4QmGk00mmg00Wii0USjiUYTjSYaTTSaaDTRaKLRRKOJRhONJhpNNJpoNNFootFEe3q+OM36U9FkPxqR/JkufDU5xbl+9dF8901M0IQmNKEJTRKaaDTRvqfJ5d3DyvI9TcqeA3PX5Ph0qTvXuuy5Uu9N4mmuTXRV2Uk+msSxOTjz8j/mYi7U1iR6mBrYytaEJA/WJoXvKIylJtFwRyFt8fOWr00auxU2TvbFsTVbX3o0sPB/ResmIa2v7OOds/UYHDRJzzVafsZ6aDIvUSa7FTpoEhrjnbGHJiFdzomdVRQPTbafQYhza3Pw5qHJ+o0iVekaAy6ahLPpKaWTiyahtTjf+MhBk3DO+kmiT5qUfY56Jf0YLbOUfQy4EanqIf8mi9XgYTNJ7E6kuthKAAAAAAAAAAAAAAAAAAAAgB/zB8nrM+X3qvXOAAAAAElFTkSuQmCC`" /></div>
	  </td>
      <td>{{row.name}}</td>
      <td>{{row.published}}</td>
      <td>{{row.rating}}/10</td>
      <td><a v-if="`${row.amazonlink}`!=''" v-bind:href="`${row.amazonlink}`" target="_blank">Amazon</a><span v-else>--</span></td>
    </tr>
  </tbody>
</table>
<div class="col-md-6">
            <router-view @refreshData="refreshList"></router-view>
        </div>
 <b-pagination
        v-model="page"
        :total-rows="count"
        :per-page="pageSize"
        prev-text="Prev"
        next-text="Next"
        @change="handlePageChange"
      ></b-pagination>

        </div>
        
    </div>
</template>
  
<script>
import http from "../http-common";
 
export default {
  name: "books-list",
  data() {
    return {
      books: [],
	  page: 0,
      count: 0,
      pageSize: 5,
    };
  },
  methods: {
    /* eslint-disable no-console */
    retrieveBooks() {
      http
        .get("/books?page="+this.page)
        .then(response => {
          this.books = response.data.books; // JSON are parsed automatically.
          this.count = response.data.totalItems; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveBooks();
    },
	show_panel_pricing_card(){
		//if(!this.show_panel_pricing_cards){
			//this.show_panel_pricing_cards=true;
		//}else{
		//	this.show_panel_pricing_cards=false;
		//}
	},
	
    handlePageChange(value) {
      this.page = (value-1);
     this.retrieveBooks();
    },
    /* eslint-enable no-console */
  },
  mounted() {
    this.retrieveBooks();
  }
};

</script>
 
<style>
#firstTable tbody tr:nth-child(2n+2) {
    background-color: #fff;
}
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
    padding: 15px 20px;
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
border-radius: 5px;
}
.pagination.b-pagination {
    margin: 20px 0 0 0;
}
</style>