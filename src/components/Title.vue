<template>
    <div class="title">
      <h2>{{ title }}</h2>
      <div class="wrapper">
        <div class="text-wrapper">{{ description }}</div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Title',
    props: [
      'title',
      'description'
    ]
  }
</script>

<style scoped lang="scss">
  @import '@/styles/constants.scss';

  .title {
    text-align: center;
    color: map-get($colors, primary);
    h2 {
      font-size: 4rem;
      text-transform: uppercase;
    }
  }

  .text-wrapper {
    text-transform: uppercase;
    &:after {
      content: "";
      width: 150px;
      display: block;
      margin: 20px auto;
      border-bottom: 1px solid map-get($colors, primary);
    }
  }
</style>