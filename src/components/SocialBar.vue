 <template>
  <div class="social-wrap">
    <ul>
      <li>
        <a href="https://www.facebook.com/hugo.bollon" target="_blank">
          <font-awesome-icon class="icon" :icon="['fab', 'facebook-square']" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/_hbollon" target="_blank">
          <font-awesome-icon class="icon" :icon="['fab', 'instagram-square']" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/hugo-bollon-68a2381a4" target="_blank">
          <font-awesome-icon class="icon" :icon="['fab', 'linkedin']" />
        </a>
      </li>
      <li>
        <a href="https://github.com/hbollon" target="_blank">
          <font-awesome-icon class="icon" :icon="['fab', 'github-square']" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'SocialBar',
    }
</script>

<style scoped lang="scss">
  @import '@/styles/constants.scss';
 .social-wrap {
    li {
      display: inline-block;
      margin-right: 10px;
    }
    .icon {
      font-size: 3rem;
    }
  }
</style>