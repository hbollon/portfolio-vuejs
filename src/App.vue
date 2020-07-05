<template>
  <div class="wrapper" v-if="isLoaded" id="app">
    <LandingPage :user="user" />
    <Description :user="user" />
    <Experience :content="findSlug('experiences')" />
    <Skills />
    <Projects />
    <Footer :user="user" />
  </div>
</template>

<script>
import LandingPage from "./components/LandingPage.vue";
import Description from "./components/Description.vue";
import Experience from "./components/Experience.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";

import { bucket } from "./cosmic.js";

export default {
  name: "App",
  components: {
    LandingPage,
    Description,
    Experience,
    Skills,
    Projects,
    Footer,
  },
  data: () => ({
    isLoaded: false,
    user: { name: "Hugo Bollon", description: "Full-Stack Developer" },
    posts: [],
  }),
  methods: {
    fetchPosts() {
      return bucket.getObjects({
        type: "portfolio-contents",
        props: "slug,title,metadata",
      });
    },
    fetchObjectTypes() {
      return bucket.getObjectTypes();
    },
    findSlug(slug) {
      return this.posts.find((item) => {
        return item.slug === slug;
      });
    },
  },
  created() {
    document.body.classList.add("loading");
    Promise.all([this.fetchPosts()]).then(([posts]) => {
      this.posts = posts.objects;
      this.isLoaded = true;
      this.$nextTick(() => document.body.classList.remove("loading"));
    });
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/constants.scss";

#app {
  font-family: Montserrat-Regular, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.wrapper {
  height: 100%;
}
</style>
