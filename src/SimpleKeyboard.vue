<template>
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
</template>

<script>
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";

export default {
  name: "SimpleKeyboard",
  props: {
    input: String
  },
  data: () => ({
    keyboard: null,
    keyboardControlPad: null,
    keyboardArrows: null,
    keyboardNumPad: null,
    keyboardNumPadEnd: null
  }),
  mounted() {
    let commonKeyboardOptions = {
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button),
      theme: "simple-keyboard hg-theme-default hg-layout-default",
      physicalKeyboardHighlight: true,
      syncInstanceInputs: true,
      mergeDisplay: true,
      debug: true
    };

    this.keyboard = new Keyboard(".simple-keyboard-main", {
      ...commonKeyboardOptions,
      /**
       * Layout by:
       * Sterling Butters (https://github.com/SterlingButters)
       */
      layout: {
        default: [
          "{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}",
          "` 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
          "{tab} q w e r t y u i o p [ ] \\",
          "{capslock} a s d f g h j k l ; ' {enter}",
          "{shiftleft} z x c v b n m , . / {shiftright}",
          "{controlleft} {altleft} {metaleft} {space} {metaright} {altright}"
        ],
        shift: [
          "{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}",
          "~ ! @ # $ % ^ & * ( ) _ + {backspace}",
          "{tab} Q W E R T Y U I O P { } |",
          '{capslock} A S D F G H J K L : " {enter}',
          "{shiftleft} Z X C V B N M < > ? {shiftright}",
          "{controlleft} {altleft} {metaleft} {space} {metaright} {altright}"
        ]
      },
      display: {
        "{escape}": "esc ⎋",
        "{tab}": "tab ⇥",
        "{backspace}": "backspace ⌫",
        "{enter}": "enter ↵",
        "{capslock}": "caps lock ⇪",
        "{shiftleft}": "shift ⇧",
        "{shiftright}": "shift ⇧",
        "{controlleft}": "ctrl ⌃",
        "{controlright}": "ctrl ⌃",
        "{altleft}": "alt ⌥",
        "{altright}": "alt ⌥",
        "{metaleft}": "cmd ⌘",
        "{metaright}": "cmd ⌘"
      }
    });

    this.keyboardControlPad = new Keyboard(".simple-keyboard-control", {
      ...commonKeyboardOptions,
      layout: {
        default: [
          "{prtscr} {scrolllock} {pause}",
          "{insert} {home} {pageup}",
          "{delete} {end} {pagedown}"
        ]
      }
    });

    this.keyboardArrows = new Keyboard(".simple-keyboard-arrows", {
      ...commonKeyboardOptions,
      layout: {
        default: ["{arrowup}", "{arrowleft} {arrowdown} {arrowright}"]
      }
    });

    this.keyboardNumPad = new Keyboard(".simple-keyboard-numpad", {
      ...commonKeyboardOptions,
      layout: {
        default: [
          "{numlock} {numpaddivide} {numpadmultiply}",
          "{numpad7} {numpad8} {numpad9}",
          "{numpad4} {numpad5} {numpad6}",
          "{numpad1} {numpad2} {numpad3}",
          "{numpad0} {numpaddecimal}"
        ]
      }
    });

    this.keyboardNumPadEnd = new Keyboard(".simple-keyboard-numpadEnd", {
      ...commonKeyboardOptions,
      layout: {
        default: ["{numpadsubtract}", "{numpadadd}", "{numpadenter}"]
      }
    });
  },
  methods: {
    onChange(input) {
      this.$emit("onChange", input);
    },
    onKeyPress(button) {
      this.$emit("onKeyPress", button);

      /**
       * If you want to handle the shift and caps lock buttons
       */
      if (
        button === "{shift}" ||
        button === "{shiftleft}" ||
        button === "{shiftright}" ||
        button === "{capslock}"
      )
        this.handleShift();
    },
    handleShift() {
      let currentLayout = this.keyboard.options.layoutName;
      let shiftToggle = currentLayout === "default" ? "shift" : "default";

      this.keyboard.setOptions({
        layoutName: shiftToggle
      });
    }
  },
  watch: {
    input(input) {
      this.keyboard.setInput(input);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>