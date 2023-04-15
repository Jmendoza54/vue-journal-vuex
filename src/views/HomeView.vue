<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>

  <button @:click="goToDaybook">Ir A Day Book</button>
</template>

<script>


export default {
    methods: {
        goToDaybook(){
            this.$router.push({name: 'no-entry'})
        }
    }
}
</script>
