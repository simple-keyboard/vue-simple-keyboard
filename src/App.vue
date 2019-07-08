<template>
  <div id="app">
    <input
      :value="input"
      class="input"
      @input="onInputChange"
      placeholder="Tap on the virtual keyboard to start"
    >
    <SimpleKeyboard @onChange="onChange" @onKeyPress="onKeyPress" :input="input"/>
  </div>
</template>

<script>
import SimpleKeyboard from "./SimpleKeyboard";
import "./App.css";

export default {
  name: "App",
  components: {
    SimpleKeyboard
  },
  data: () => ({
    input: ""
  }),
  methods: {
    onChange(input) {
      this.input = input;
    },
    onKeyPress(button) {
      console.log("button", button);
    },
    onInputChange(input) {
      this.input = input.target.value;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
