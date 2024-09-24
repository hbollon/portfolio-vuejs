<template>
  <transition name="fade" tag="div" class="wrapper" mode="out-in">
    <div class="wrapper" v-if="isLoaded" id="app">
      <LandingPage :user="user" />
      <Description :user="user" :content="description" :links="links" />
      <Experience :content="experiences" />
      <Skills :content="skills" />
      <Projects :content="projects" />
      <Footer :user="user" :links="links" />
    </div>
  </transition>
</template>

<script>
import LandingPage from "./components/LandingPage.vue";
import Description from "./components/Description.vue";
import Experience from "./components/Experience.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";

import { cosmic } from "./cosmic.js";

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
    user: {},
    description: {},
    links: {},
    experiences: {},
    skills: {},
    projects: {},
  }),
  methods: {
    async fetchObject(slug) {
      return await cosmic.objects.findOne({
        type: slug,
        slug: slug
      }).props("slug,title,metadata")
      .depth(1)
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
    Promise.all([
      this.fetchObject('user-data'),
      this.fetchObject('description'),
      this.fetchObject('links'),
      this.fetchObject('experiences'),
      this.fetchObject('skills'),
      this.fetchObject('projects')
    ]).then(([
      user_data,
      description,
      links,
      experiences,
      skills,
      projects
    ]) => {
      this.user = {
        name: user_data.object.metadata.name,
        status: user_data.object.metadata.status,
        email: user_data.object.metadata.email,
        phone: user_data.object.metadata.phone,
        city: user_data.object.metadata.city,
        lang: user_data.object.metadata.lang,
        photo: user_data.object.metadata.photo,
      }
      this.description = description
      this.links = links
      this.experiences = experiences
      this.skills = skills
      this.projects = projects
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
