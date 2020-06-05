<template>
  <div id="app">
    <div class="container">
      <h1>Vue Autosize Input</h1>
      <h2><a href="http://github.com/houjiazong/vue-autosize-input">View project on GitHub</a></h2>
      <form>
        <h3>Simple example:</h3>
        <autosize-input
          autofocus
          v-model="value1" />
        <h3>Styled example with default value:</h3>
        <autosize-input
          v-model="value2"
          :style="{ background: '#eee', borderRadius: '5px', padding: '5px' }"
          :input-style="{ border: '1px solid #999', borderRadius: '3px', padding: '3px', fontSize: '14px' }" />
        <h3>Typed example with default value:</h3>
        <autosize-input
          v-model="value3"
          type="number" />
        <h3>Input with placeholder:</h3>
        <autosize-input
          v-model="value4"
          placeholder="Placeholder"
          :style="{ background: '#eee', borderRadius: '5px', padding: '5px' }"
          :input-style="{ border: '1px solid #999', borderRadius: '3px', padding: '3px', fontSize: '14px' }" />
        <h3>Input with placeholder as minimum width:</h3>
        <autosize-input
          v-model="value5"
          placeholder-is-min-width
          placeholder="Placeholder"
          :style="{ background: '#eee', borderRadius: '5px', padding: '5px' }"
          :input-style="{ border: '1px solid #999', borderRadius: '3px', padding: '3px', fontSize: '14px' }" />
      </form>
      <div class="hint">
        Type in the text fields above to test the auto-size input.
      </div>
      <div class="footer">
        Copyright &copy; houjiazong 2020. MIT Licensed.
      </div>
    </div>
  </div>
</template>

<script>
import AutosizeInput from 'vue-autosize-input'

export default {
  name: 'App',
  components: {
    AutosizeInput,
  },
  data () {
    return {
      value1: '',
      value2: 'example',
      value3: 3,
      value4: '',
      value5: '',
    }
  },
}
</script>

<style lang="css">
body {
  font-family:Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size:14px;
  color:#333;
  margin:0;
  padding:0
}
a {
  color:#08c;
  text-decoration:none
}
a:hover {
  text-decoration:underline
}
.container {
  margin-left:auto;
  margin-right:auto;
  max-width:400px;
  padding:1em
}
.footer {
  margin-top:50px;
  border-top:1px solid #eee;
  padding:20px 0;
  font-size:12px;
  color:#999
}
h1, h2, h3, h4, h5, h6 {
  color:#222;
  font-weight:100;
  margin:.5em 0
}
label {
  color:#999;
  display:inline-block;
  font-size:.85em;
  font-weight:700;
  margin:1em 0;
  text-transform:uppercase
}
.hint {
  margin:15px 0;
  font-style:italic;
  color:#999
}
</style>
