<template>
  <div>
    <h3 class="color-light">{{ title }}</h3>
    <div class="resume-item" v-for="(post, index) in posts" :key="index">
      <div class="year color-darker">{{ post.year }}</div>
      <div class="resume-description">
        <strong class="color-light" v-html="post.title"></strong>
      </div>
      <div class="color-darker" v-html="post.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceColumn",
  props: ["posts", "title"],
};
</script>

<style scoped lang="scss">
@import "@/styles/constants.scss";

.resume-item {
  margin-bottom: 25px;
  p {
    font-size: 1.5rem;
    margin-top: 0;
  }
  .resume-description {
    font-size: 1.7rem;
  }
  .year {
    font-weight: 600;
    margin-bottom: 5px;
  }
}
.color-light {
  color: map-get($colors, light);
}
.color-darker {
  color: map-get($colors, dark);
}
</style>
