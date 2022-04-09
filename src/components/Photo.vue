<template>
  <div>
    <div class="photo">
        <a>
            <img :src="getImgUrl('photo.jpg')" alt="photo"/>
        </a>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Photo',
    props: ['user'],
    methods: {
        getImgUrl(img) {
            return require('../assets/img/'+img);
        },
    },
}
</script>

<style scoped lang="scss">
    .photo {
        a:focus {
            outline: none;
        }
        img {
            width: 350px;
            height: 420px;
            border-radius: 50%;
            display: inline-block;
        }
    }
    img {
        max-width: 100%;
    }
</style>