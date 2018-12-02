<template>
  <div id="app">
    <input
      :value="input"
      @input="onInputChange"
      class="input"
      placeholder="Tap on the virtual keyboard to start"
    />
    <div class="keyboardContainer">
      <div class="simple-keyboard-main"></div>

      <div class="controlArrows">
        <div class="simple-keyboard-control"></div>
        <div class="simple-keyboard-arrows"></div>
      </div>

      <div class="numPad">
        <div class="simple-keyboard-numpad"></div>
        <div class="simple-keyboard-numpadEnd"></div>
      </div>
    </div>
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

</style>
