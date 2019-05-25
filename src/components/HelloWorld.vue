<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <div>
        <button class="btn" @click="clickCounterHunter">
          Click counter {{$store.state.count}}
        </button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    clickCounterHunter(){
      console.log("clickCounterHunter");
      this.$store.commit('setCount', 3)
    }
  },
  mounted(){
    console.log(this.$store.state.count);
  },
  computed:{
    count(){
      return this.$store.state.count;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

  .btn{
    border: 1px solid #42b983;
    background-color: #fff;
    color: #42b983;
    padding: 10px 20px;
    border-radius: 4px;
    outline: unset;
    cursor: pointer;
  }
</style>
