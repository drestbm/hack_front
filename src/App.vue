<template>
  <div id="app">
    <div class="header">
      <img class="logo" src="@/assets/logo.png" @click="goMenu" alt="1">
      <h4 class="head-main">ЖИЛСТАТ</h4>
      <h4 class="head-sub">Сервис контроля качества услуг ЖКХ</h4>
      <img class="ico" src="@/assets/person.png" alt="1">
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goMenu(){
      this.$router.push({name: "main"})
    },
  }
}
</script>

<style>
.logo{
  width: 12%;
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 100px;
}
.ico{
  width: 90px;
  position: absolute;
  top: 15px;
  right:150px;
  z-index: 1000;
}
.head-sub{
  font-size: 15px;
  margin: 5px 0 10px 270px;
  z-index: 1000;
}
.head-main{
  font-size: 40px;
  margin: 20px 0 0 270px;
  z-index: 1000;
}
body{
  font-family: 'Roboto', 'Helvetica';
}
.header{
  background-color: #6D72E1;
  position:fixed;
  top:0px;
  left:0px;
  width: 100%;
  height: 100px;
  color: white;
  z-index: 500;
}
</style>
