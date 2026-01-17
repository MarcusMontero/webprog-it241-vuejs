<template>
  <div class="Potato">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Potato',
      message: 'I love Potato'
    }
  }
};
</script>

<style>
  .Potato {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: rgb(118, 80, 56);
  }


</style>
