<template>
  <div>
    <h3 class="text-uppercase">Personnal Informations</h3>
    <h3>{{ user.name }}</h3>
    <div class="data"><strong>E-mail:</strong> hugo.bollon@gmail.com</div>
    <div class="data"><strong>Phone:</strong> +33 6 51 99 80 78</div>
    <div class="data"><strong>City:</strong> Chambéry, France</div>
    <div class="data"><strong>Languages:</strong> French, English</div>
  </div>
</template>

<script>
export default {
    name: 'PersonnalCard',
    props: ['user'],
}
</script>

<style lang="scss">
    @import '@/styles/constants.scss';

    .data {
        margin-bottom: 10px;
    }
</style>