<template>
  <div class="Main">
    <table class="list">
      <tr class="icon">
        <td>
          <img class="img1" src="@/assets/home.png" alt="1">
        </td>
        <td>
          <img class="img2" src="@/assets/lamp.png" alt="2">
        </td>
        <td>
          <img class="img3" src="@/assets/forest.png" alt="3">
        </td>
      </tr>
      <tr class="block">
        <td>
          <h2 class="sphere">Жилищное хозяйство</h2>
        </td>
        <td>
          <h2 class="sphere">Ресурсоснабжение</h2>
        </td>
        <td>
          <h2 class="sphere">Благоустройство</h2>
        </td>
      </tr>
      <tr class="sub">
        <td class="list-sub">
          <a class="subsphere" @click="goOverhaul">Капитальный ремонт</a>
        </td>
        <td class="list-sub">
          <a class="subsphere">Теплоснабжение</a>
        </td>
        <td class="list-sub">
          <a class="subsphere">Дорожно-мостовое хозяйство</a>
        </td>
      </tr>
      <tr class="sub">
        <td class="list-sub">
          <a class="subsphere">Технический ремонт</a>
        </td>
        <td class="list-sub">
          <a class="subsphere">Электроснабжение</a>
        </td>
        <td class="list-sub">
          <a class="subsphere">Озеленение</a>
        </td>
      </tr>
      <tr class="sub">
        <td class="list-sub">
          <a class="subsphere">Подсфера</a>
        </td>
        <td class="list-sub">
          <a class="subsphere">Газоснабжение</a>
        </td>
        <td class="list-sub">
          <a class="subsphere">Очистка и утилизация</a>
        </td>
      </tr>
      <tr class="sub">
        <td class="list-sub">
        </td>
        <td class="list-sub">
          <a class="subsphere" @click="goWaterSupply">Водоснобжение</a>
        </td>
        <td class="list-sub">
          <a class="subsphere">Канализация</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    goOverhaul(){
      this.$router.push({name: "overhaul"})
    },
    goWaterSupply(){
      this.$router.push({name: "water_supply"})
    },
  }
}
</script>

<style scoped>
a:hover{
  cursor: pointer;
  border-bottom: 2px dotted #28578E;
}
.sphere{
  border-bottom: 2px solid #E4E4E4;
  display: inline-block;
  color: #1D426F;
  margin-bottom: 10px;
  text-transform: uppercase;
}
td{
  width: 33%;
}
.icon{
  text-align: left;
}
.img1{
  width: 35%;
  margin-left: -20px;
}
.img2{
  width: 35%;
  margin-left: -20px;
}
.img3{
  width: 35%;
  margin-left: -20px;
}
.sub{
  text-align: top center;
}
.subsphere{
  width: 100%;
  display: list-item inline-block;
  list-style-type: none;
  color: #28578E;
  margin-bottom: 10px;
}
.block{
  height:20%;
  text-align: top;
}
.list{
  width: 90%;
  margin-left:12%;
  margin-top: 120px;
}
.list-sub{
  padding: 0;
  bottom: 0;
}
.sub{
  height: 30px;
}
</style>
