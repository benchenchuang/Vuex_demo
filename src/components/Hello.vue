<template>
  <div class="hello">
    <p>{{count}}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <div>
      <p v-for="todo in doneCount">{{todo.text}}</p>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapMutations } from 'vuex'
  export default{
    computed: {
      ...mapGetters({
        doneCount:'doneList',
        count:'count'
      })
//      todos(){
//        return this.$store.getters.doneList
//      }
    },
    methods:{
//      increment(){
//        this.$store.commit('increment')
//      },
//      decrement(){
//        this.$store.commit('decrement')
//      }
      ...mapMutations([
        'increment',
        'decrement'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
</style>
