<template>
  <transition name="fade" tag="div" class="wrapper" mode="out-in">
    <div class="wrapper" v-if="isLoaded" id="app">
      <LandingPage :user="user" />
      <Description :user="user" :content="findSlug('description')" :links="findSlug('links')" />
      <Experience :content="findSlug('experiences')" />
      <Skills v-if="skills.length" :skills="skills" />
<!--      <Projects :content="findSlug('projects')" />-->
      <Footer :user="user" :links="findSlug('links')" />
    </div>
  </transition>
</template>

<script>
import LandingPage from "./components/LandingPage.vue";
import Description from "./components/Description.vue";
import Experience from "./components/Experience.vue";
import Skills from "./components/Skills.vue";
// import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";

import { bucket } from "./cosmic.js";

export default {
  name: "App",
  components: {
    LandingPage,
    Description,
    Experience,
    Skills,
    // Projects,
    Footer,
  },
  data: () => ({
    isLoaded: false,
    user: {},
    posts: [],
    skills: [],
  }),
  methods: {
    fetchPosts() {
      const params = {
        query: {
          type: 'posts',
          // locale: 'en' // optional, if localization set on Objects
        },
        props: 'slug,title,content,metadata', // get only what you need
        sort: '-created_at' // optional, defaults to order in dashboard
      }
      return bucket.getObjects(params);
    },
    fetchSkills() {
      const params = {
        query: {
          type: 'skills',
          // locale: 'en' // optional, if localization set on Objects
        },
        props: 'slug,title,content,metadata', // get only what you need
        // sort: '-created_at' // optional, defaults to order in dashboard
      }
      return bucket.getObjects(params);
    },
    fetchUser() {
      const params = {
        query: {
          type: 'users',
          // locale: 'en' // optional, if localization set on Objects Les Simpson
        },
        limit: 5,
        props: 'slug,title,content,metadata', // get only what you need
        sort: '-created_at' // optional, defaults to order in dashboard
      }
      return bucket.getObjects(params);
    },
    fetchObjectTypes() {
      return bucket.getObjectTypes();
    },
    findSlug(slug) {
      return this.posts.find((item) => {
        return item.slug === slug;
      });
    },
    extractFirstObject(objects) {
      if(objects.objects == null)
        return void 0;
      else
        return objects.objects[0];
    }
  },
  created() {
    document.body.classList.add("loading");

    Promise.all([this.fetchPosts(), this.fetchSkills(), this.fetchUser()]).then(([posts, skills, user_data]) => {
      user_data = this.extractFirstObject(user_data);
      this.posts = posts.objects;
      console.log("user skills ==>> ", skills.objects)
      this.skills = skills.objects;
      this.user = {
        name: user_data.metadata.name,
        status: user_data.metadata.status,
        email: user_data.metadata.email,
        phone: user_data.metadata.phone,
        city: user_data.metadata.city,
        lang: user_data.metadata.lang,
        photo: user_data.metadata.photo,
      }
      this.isLoaded = true;
      this.$nextTick(() => document.body.classList.remove("loading"));
    });
  },
};
</script>

<style scoped lang="scss">
@import "./styles/constants.scss";

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
