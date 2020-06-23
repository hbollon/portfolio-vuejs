<template>
  <footer class="footer">
    <div>
        <font-awesome-icon class="copyright-icon" icon="copyright"/> 
        2020 {{user.name}}
    </div>
    <SocialBar class=""/>
  </footer>
</template>

<script>
import SocialBar from './SocialBar'
export default {
  name: 'Footer',
  props: ['user'],
  components: {
    SocialBar,
  },
}
</script>

<style scoped lang="scss">
  @import '@/styles/constants.scss';

  $bg-footer: map-get($colors, primary) !default;

  .footer {
    padding: 10px 20px 10px 20px;
    background-color: $bg-footer;
    color: map-get($colors, light);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .copyright-icon{
      font-size: 1.5rem;
      vertical-align: middle;
  }

  /deep/ .social-wrap {
    float: right;
    .icon {
      font-size: 2.8rem;
      &:hover {
        color: map-get($colors, light);
      }
    }
  }

  /deep/ li{
      margin-bottom: 0 !important;
  }

</style>