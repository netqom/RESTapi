<template>
  <div class="submitform">
    <div v-if="!submitted">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" required v-model="book.name" name="name">
        </div>
    
        <div class="form-group">
          <label for="age">Published</label>
          <input type="text" class="form-control" id="age" required v-model="book.published" name="age">
        </div>
		
		<div class="form-group">
          <label for="age">Rating</label>
          <input type="text" class="form-control" id="age" required v-model="book.rating" name="age">
        </div>
		
		<div class="form-group">
          <label for="age">Image</label>
      <input type="file" accept="image/jpeg">
        </div>
        <button v-on:click="saveCustomer" class="btn btn-success">Submit</button>
    </div>
    
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" v-on:click="newCustomer">Add</button>
    </div>
  </div>
</template>
 
<script>
import http from "../http-common";
 
export default {
  name: "add-book",
  data() {
    return {
      book: {
        id: 0,
        name: "",
        published: "",
        rating: "",
        active: false
      },
      submitted: false
    };
  },
  methods: {
    /* eslint-disable no-console */
    saveCustomer() {
      var data = {
        name: this.book.name,
        published: this.book.published,
        rating: this.book.rating
      };
 
      http
        .post("/book", data)
        .then(response => {
          this.book.id = response.data.id;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
 
      this.submitted = true;
    },
    newCustomer() {
      this.submitted = false;
      this.book = {};
    }
    /* eslint-enable no-console */
  }
};
</script>
 
<style>
.submitform {
  max-width: 500px;
  margin: auto;
}
.submitform .form-group {
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-family: arial;
    font-size: 15px;
	margin-bottom: 15px;
}
.submitform .form-group input {
	width: 79%;
	border: 1px solid #ccc;
	height: 32px;
	border-radius: 5px;
}
.submitform .btn.btn-success {
	background-color: #333;
	border: none;
	color: #fff;
	text-transform: uppercase;
	padding: 10px 20px;
	font-size: 15px;
	letter-spacing: 1px;
	border-radius: 5px;
}

.submitform .form-group label {
    width: 100px;
}
</style>