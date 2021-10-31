<template>
  <div id="app">
    <input
      :value="input"
      class="input"
      ref="input"
      @input="onInputChange"
      placeholder="Tap on the virtual keyboard to start"
    />
    <SimpleKeyboard
      @onChange="onChange"
      @onKeyPress="onKeyPress"
      :input="input"
    />
  </div>
</template>

<script>
import SimpleKeyboard from "./SimpleKeyboard";
import "./App.css";

export default {
  name: "App",
  components: {
    SimpleKeyboard,
  },
  data: () => ({
    input: "",
  }),
  methods: {
    onChange(input, keyboard) {
      const inputElement = this.$refs.input;
      this.input = input;

      /**
       * Synchronizing input caret position
       */
      let caretPosition = keyboard.caretPosition;
      if (caretPosition !== null)
        this.setInputCaretPosition(inputElement, caretPosition);

      console.log("caretPosition", caretPosition, inputElement);
    },
    setInputCaretPosition(elem, pos) {
      setTimeout(() => {
        if (elem.setSelectionRange) {
          elem.focus();
          elem.setSelectionRange(pos, pos);
        }
      });
    },
    onKeyPress(button) {
      console.log("button", button);
    },
    onInputChange(input) {
      this.input = input.target.value;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
