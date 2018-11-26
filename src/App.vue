<template>
  <div id="app">
    <input
      :value="input"
      @input="onInputChange"
      class="input"
      placeholder="Tap on the virtual keyboard to start"
    />
    <div class="simple-keyboard"></div>
  </div>
</template>

<script>
export default {
  props: ["input", "onInputChange"]
};
</script>

<style>
app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

input {
  width: 100%;
  height: 100px;
  padding: 20px;
  font-size: 20px;
  border: none;
}

.img {
  text-align: center;
}

.img img {
  width: 100px;
}
</style>
