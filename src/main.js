// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";
import "./index.css";

Vue.config.productionTip = false;

let keyboard;

/* eslint-disable no-new */
let vueInstance = new Vue({
  el: "#app",
  components: { App },
  template: `<App :input.sync="input" :onInputChange="onInputChange"/>`,
  data: {
    input: ""
  },
  methods: {
    update(input) {
      this.input = input;
    },
    onInputChange(e) {
      let input = e.target.value;
      keyboard.setInput(input);
    }
  }
});

keyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button),
  theme: "myTheme2",
  buttonTheme: [
    {
      class: "myTheme2b",
      buttons: "{bksp}"
    }
  ],
  display: {
    "{enter}": "submit",
    "{bksp}": "delete",
    "{lock}": "lock",
    "{shift}": "shift",
    "{tab}": "tab",
    "{space}": " "
  }
});

console.log(keyboard);

function onChange(input) {
  vueInstance.update(input);
  console.log("Input changed", input);
}

function onKeyPress(button) {
  console.log("Button pressed", button);

  /**
   * If you want to handle the shift and caps lock buttons
   */
  if (button === "{shift}" || button === "{lock}") handleShift();
}

function handleShift() {
  let currentLayout = keyboard.options.layoutName;
  let shiftToggle = currentLayout === "default" ? "shift" : "default";

  keyboard.setOptions({
    layoutName: shiftToggle
  });
}
