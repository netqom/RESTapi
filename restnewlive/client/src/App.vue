<template>
    <div id="app" class="container-fluid">
        <div class="site-info">
            <h1>Dev</h1>
            <h3>Vue Nodejs test job</h3>
        </div>
        <nav>
            <router-link class="btn btn-primary" to="/books">Books</router-link>
            <router-link class="btn btn-primary" to="/add">Add</router-link>
        </nav>
        <br/>
        <router-view/>
    </div>
</template>
 
<script>
export default {
  name: "app"
};
</script>
 
<style>
.site-info {
  color: blue;
  margin-bottom: 20px;
}
 
.btn-primary {
  margin-right: 5px;
}
 
.container-fluid {
  text-align: center;
}
#app .btn.btn-primary {
    background-color: #0096b9;
    color: #fff;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-family: arial;
}
.site-info {
    color: #333;
    margin-bottom: 30px;
    font-family: arial;
}
.site-info h1 {
	margin-bottom: 0;
}
.site-info h3 {
    margin: 6px 0 0px 0;
}
</style>