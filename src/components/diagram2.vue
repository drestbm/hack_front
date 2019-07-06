<template>
  <div class="Main">
    <div class="left-block">
      <div class="left-title">
        <h1>Статистические данные2</h1>
      </div>
      <div class="mode-list">
        <table>
          <tr>
            <td>
              <div class="qube" style="background-color: #F22525"></div>
            </td>
            <td>
              <h4 class="mode">что-то</h4>
            </td>
          </tr>
          <tr>
            <td>
              <div class="qube" style="background-color: #F2F539"></div>
            </td>
            <td>
              <h4 class="mode">что-то</h4>
            </td>
          </tr>
          <tr>
            <td>
              <div class="qube" style="background-color: #52DD46"></div>
            </td>
            <td>
              <h4 class="mode">что-то</h4>
            </td>
          </tr>
          <tr>
            <td>
              <div class="qube" style="background-color: #5FC5F0"></div>
            </td>
            <td>
              <h4 class="mode">что-то</h4>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="right-block">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<style scoped>
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
