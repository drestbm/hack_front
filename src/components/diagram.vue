<template>
  <div class="Main">
    <div class="left-block">
      <div class="left-title">
        <h1>Статистические данные</h1>
      </div>
      <div class="mode-list">
        <table>
          <tr>
            <td>
              <div class="qube" style="background-color: #F22525"></div>
            </td>
            <td>
              <h4 class="mode">Ремонт систем отопления</h4>
            </td>
          </tr>
          <tr>
            <td>
              <div class="qube" style="background-color: #F2F539"></div>
            </td>
            <td>
              <h4 class="mode">Ремонт систем водоснабжения</h4>
            </td>
          </tr>
          <tr>
            <td>
              <div class="qube" style="background-color: #52DD46"></div>
            </td>
            <td>
              <h4 class="mode">Ремонт систем канализации</h4>
            </td>
          </tr>
          <tr>
            <td>
              <div class="qube" style="background-color: #5FC5F0"></div>
            </td>
            <td>
              <h4 class="mode">Прочее</h4>
            </td>
          </tr>
          <tr>
            <td>
              <a class="activate" href="#" >Скачать</a>
            </td>
            <td>
              <a class="activate" href="#" >Печать</a>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="right-block">
      <img class="diagram" src="@/assets/d0.png" alt="0">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<style scoped>
.activate{
  margin-top: 20px;
  border: 1px solid #fff;
  display: inline-block;
  text-decoration: none;
  background-color: #61A4D4;
  height: 30px;
  width: 120px;
  text-align:center;
  color: #fff;
}
table{
  margin-left: 100px;
}
.Main{
  display: flex;
  color: #28578E;
}
.qube{
  width:40px;
  height:40px;
  display: inline-block;
  margin-right:10px;
}
.img{
  width:4%;
  display: inline-block;
}
.mode-list{
  margin: 10px 0 0 100px;
}
.mode{
  margin: 0;
  display: inline-block;
}
.left-title{
  margin: 0 0 0 100px;
}
.left-block{
  margin-top: 35px;
  width: 50%;
  display: inline-block;
}
.right-block{
  width: 50%;
  display: inline-block;
}
</style>
