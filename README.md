Vue-autosize-input
====================

A text input for [Vue](https://vuejs.org/) that resizes itself to the current content.


## Demo & Examples

Live demo: [houjiazong.github.io/vue-autosize-input](http://houjiazong.github.io/vue-autosize-input/)

To run the examples locally, run:

```
yarn install
yarn serve
```

Then open [localhost:8000](http://localhost:8000) in a browser.


## Installation

### NPM
```
npm install vue-autosize-input --save
```
### Yarn
```
yarn add vue-autosize-input
```


## Usage

Vue-autosize-input generates an input field, wrapped in a `<div>` tag so it can detect the size of its value. Otherwise it behaves very similarly to a standard Vue input.


```es6
<template>
  <autosize-input
    v-model="value"
    @change="onChange />
</template>

<script>
import AutosizeInput from 'vue-autosize-input'

export default {
  components: {
    AutosizeInput,
  },
  data () {
    return {
      value: '',
    }
  },
  methods: {
    onChange (e) {
      console.log(e.target.value)
    },
  },
}
</script>
```

## Gotchas

### Changing the styles at runtime
The styles applied to the input are only copied when the component mounts. Because of this, subsequent changes to the stylesheet may cause size to be detected incorrectly.

To work around this, either re-mount the input (e.g. by providing a different `key` prop) or call the `copyInputStyles()` method after the styles change.

### CSP and the IE "clear" indicator
The input will automatically inject a stylesheet that hides IE/Edge's "clear" indicator, which otherwise breaks the UI. This has the downside of being incompatible with some CSP policies.

To work around this, you can pass the `injectStyles={false}` prop, but if you do this I *strongly* recommend targeting the `input` element in your own stylesheet with the following rule:

```css
input::-ms-clear {display: none;}
```

### Custom font sizes
If your input uses custom font sizes, you will need to provide the custom size to `AutosizeInput`.

```es6
<template>
  <autosize-input
    name="form-field-name"
    v-model="value"
    :style={{ fontSize: '36px' }}
    @change="onChange />
</template>

<script>
import AutosizeInput from 'vue-autosize-input'

export default {
  components: {
    AutosizeInput,
  },
  data () {
    return {
      value: '',
    }
  },
  methods: {
    onChange (e) {
      console.log(e.target.value)
    },
  },
}
</script>
```

## License

Copyright (c) 2018 houjiazong. [MIT](LICENSE) License.
