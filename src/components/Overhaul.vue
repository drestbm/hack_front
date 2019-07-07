<template>
  <div class="Main">
    <div class="router">
      <a class="point" @click="goMenu">Главное меню</a>
      <h6 class="point"> > </h6>
      <a class="point main-point">Капитальный ремонт</a>
    </div>
    <div class="popup-cont" v-if="showModal" @click="showModal = false">
      <div class="popup">
        <h1>{{list[index].name}}</h1>
        <h3>Адрес: {{list[index].address}}</h3>
        <h3>Вид услуги: {{list[index].breakdown}}</h3>
        <h3>Дата подачи: {{list[index].challenge_accepted}}</h3>
        <h3>Дата выполнения: {{list[index].challenge_done}}</h3>
      </div>
    </div>
    <div class="left-block">
      <div class="left-title">
        <h1>Список заявок</h1>
      </div>
      <div class="mode-list">
        <h4 class="mode" @click="status='all'">Все</h4>
        <h4 class="mode" @click="status='is_progress'">Выполняется</h4>
        <h4 class="mode" @click="status='not_done'">Просроченные</h4>
        <div v-if="showCircle" class="circle" > </div>
      </div>
      <div class="list" v-for="(item, index) in list">
        <div v-if="status==='all'"> 
          <div class="elem" @click="showPopUp(index)">
            <h1 class="name">{{item.name}}</h1>
            <h2 class="number">№{{index+1}}</h2>
            <div v-if="item.status==='done'">
              <h3 class="status">Выполнено</h3>
              <img class="img"  src="@/assets/done.png" alt="img">
            </div>
            <div v-if="item.status==='in_progress'">
              <h3 class="status">Выполняется</h3>
              <img class="img"  src="@/assets/in_proccesing.png" alt="img">
            </div>
            <div v-if="item.status==='not_done'">
              <h3 class="status">Просрочено</h3>
              <img class="img"  src="@/assets/not_done.png" alt="img">
            </div>
          </div>
        </div>
        <div v-if="status==='is_progress'">
          <div v-if="item.status==='in_progress'">
            <div class="elem" @click="showPopUp(index)">
              <h1 class="name">{{item.name}}</h1>
              <h2 class="number">№{{index+1}}</h2>
              <h3 class="status">Выполняется</h3>
              <img class="img"  src="@/assets/in_proccesing.png" alt="img">
            </div>
          </div>
        </div>
        <div v-if="status==='not_done'">
          <div v-if="item.status==='not_done'">
            <div class="elem" @click="showPopUp(index)">
              <h1 class="name">{{item.name}}</h1>
              <h2 class="number">№{{index+1}}</h2>
              <h3 class="status">Просрочено</h3>
              <img class="img"  src="@/assets/not_done.png" alt="img">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right-block">
      <div class="right-main">
        <div class="right-title">
          <h2>Статистика</h2>
        </div>
        <div class="right-body">
          <h3>Тип статистики</h3>
          <select class="select">
            <option disabled selected>Выберите категорию</option>
            <option>По бюджету</option>
            <option>По причине вызова</option>
            <option>По времени работ</option>
          </select>
          <h3>Период статистики</h3>
          <h4 class="h4">от</h4>
          <input class="input" id="test-field" v-model="maskedField">
          <h4 class="h4"> до</h4>
          <input class="input" id="test-field2" v-model="maskedField">
          <a class="activate" href="#" @click="goStat">Выполнить</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Inputmask from 'inputmask';
export default {
  name: 'Login',
  beforeCreate() {
    this.$http.get("http://localhost:8000/api/challenges/8922890/capital/wrong").then(function(response2) {
      this.showCircle = !response2.body.flag
      console.log(this.showCircle)
      this.$http.get("http://localhost:8000/api/challenges/8922890/capital").then(function(response) {
        this.list = response.body
      }, function(error) {
        alert("Неверные данные")
      })
    }, function(error) {
      alert("Неверные данные")
    })
  },
  mounted () {
    var im = new Inputmask("99-99-9999");
    im.mask(document.getElementsByClassName('input'));
   },
  data() {
    return {
      list: [],
      showModal: false,
      status: "all",
      index: 0,
      showCircle: false,
    }
  },
  methods: {
    goMenu(){
      this.$router.push({name: "main"})
    },
    showPopUp(index){
      this.index=index
      this.showModal=true
    },
    goStat(){
      this.$router.push({name: "stat"})
    }
  },
}
</script>

<style scoped>
.point {
  display: inline-block;
  margin-left: 3px;
}
#app > div.Main > div.router > a:nth-child(1):hover{
  cursor: pointer;
  border-bottom: 2px dotted #28578E;
}
.main-point{
  font-weight: bold;
}
.router{
  font-size: 15px;
  margin: 80px 0 0 100px;
  position: absolute;
  top: 10px;
}
.circle{
  background-color:red;
  border-radius:100%;
  height: 15px;
  width: 15px;
  text-align:center;
  display:inline-block;
  position: fixed;
  left: 422px;
  top: 190px;
}
.select{
  margin-left: 20px;
  border: 1px solid #74AFD9;
  background-color: #fff;
  width: 80%;
  height: 30px;
}
.Main{
  display: flex;
  color: #28578E;
}
.h4{
  margin-top: 10px;
  margin-bottom:10px;
  width: 20%;
  text-align: right;
  display: inline-block;
}
.activate{
  margin: 10px 0 20px 70px;
  border: 1px solid #fff;
  display: inline-block;
  padding: 15px 15px 0 15px;
  text-decoration: none;
  background-color: #61A4D4;
  height: 30px;
  width: 120px;
  text-align:center;
  color: #fff;
}
.input{
  text-align: center;
  width: 40%;
  display: inline-block;
  margin-left: 10px;
  margin-right: 80px;
  height: 25px;
  border: 1px solid #74AFD9;
  color: #28578E;
}
.right-title{
  margin: 5px 0 0 20px;
}
.right-body{
  margin: 5px 0 0 20px;
}
.name{
  font-size: 20px;
  margin: 10px 0 0 20px;
  width: 46%;
  display: inline-block;
}
.number{
  font-size: 20px;
  margin: 10px 20px 0 0;
  width: 46%;
  text-align: right;
  display: inline-block;
}
.elem{
  margin: 10px 10px 10px 100px;
  width: 84%;
  height: 75px;
  border: 2px solid #74AFD9;
}
.elem:hover{
  cursor:pointer;
  border: 2px solid #F2F539;
}
.status{
  font-size: 15px;
  display: inline-block;
  margin: 10px 0 0 20px;
}
.img{
  width:4%;
  display: inline-block;
}
.mode-list{
  margin: 10px 0 0 100px;
}
.mode{
  display:inline;
  margin: 0 30px 0 0;
}
.mode:hover{
  cursor: pointer;
  border-bottom: 2px dotted #28578E;
}
.active{
  border-bottom: 2px dotted #28578E;
}
.left-title{
  margin: 0 0 0 100px;
}
.left-block{
  margin-top: 35px;
  width: 60%;
  display: inline-block;
}
.right-main{
  margin-left: 12%;
  margin-top: 40px;
  width: 60%;
  border: 2px solid #74AFD9;
}
.right-block{
  width: 40%;
  margin-top: 30px;
  display: inline-block;
}
.popup-cont{
  height: 100%;
  width: 100%;
  text-align:center;
  position: absolute;
  top:0;
  left:0;
  z-index:2000;
  background-color: rgba(0, 0, 0, .5);
}
.popup{
  background-color: #fff;
  border: 2px solid #74AFD9;
  height: 40%;
  width: 30%;
  margin-top: 10%;
  display: inline-block;
  text-align: left;
  padding-left: 30px;
  padding-top:20px;
}
</style>
