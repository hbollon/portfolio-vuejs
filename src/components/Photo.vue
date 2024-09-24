<template>
  <div>
    <div class="photo">
      <a>
        <img :src="getImgUrl(user.photo)" alt="photo" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Photo",
  props: ["user"],
  methods: {
    getImgUrl(img) {
      if (img == undefined || img == "") return "";
      else if (/^https:\/\/cdn\.cosmicjs\.com\/.+\.(jpg|png|gif)$/.test(img))
        return img;
      return require("../assets/img/projects/" + img);
    },
  },
};
</script>

<style scoped lang="scss">
.photo {
  a:focus {
    outline: none;
  }
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: inline-block;
  }
}
img {
  max-width: 100%;
}
</style>
