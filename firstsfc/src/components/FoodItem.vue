<template>
  <div class="Patatas">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Patatas',
      message: 'I love Patatas'
    }
  }
};
</script>

<style>
  .Patatas {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: brown;
  }

</style>
