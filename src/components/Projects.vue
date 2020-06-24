<template>
  <section id="projects">
    <Title
      class="title"
      :title="category.title"
      :description="category.description"
    />
    <div class="container-fluid center-block">
      <article class="content text-center">
        <carousel class="mx-auto" :perPage="1" :navigationEnabled="true" :autoplay="true" :autoplayTimeout=4000 :loop=true :scrollPerPage="true" style="width: 70%;">
            <slide v-for="(post, index) in posts.projects" :key="index" style="width: 70%;">
                <header class="text-center mx-auto vertical-center">
                    <div class="container p-0" style="word-wrap: break-word;">
                        <h1>{{post.title}}</h1>
                        <h2>
                        {{post.content}}
                        </h2>
                        <hr>
                        <h3>Link : <a :href="post.link">{{post.link}}</a></h3>
                    </div>
                </header>
            </slide>
        </carousel>
      </article>
    </div>
  </section>
</template>

<script>
import Title from "./Title.vue";
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: "Projects",
  components: {
    Title,
    Carousel,
    Slide
  },
  data: () => ({
    category: {
      title: "My projects",
      description: "Let's flip the carousel !",
    },
    posts: {
      projects: [
        {
          title: "Urbalog",
          content: "Android adaptation of board game using Nearby Connections API and Java fot the LAET",
        link: "https://github.com/hbollon/Urbalog",
        },
        {
          title: "Laganga",
          content: "Collaborative agenda written in Java",
          link: "https://github.com/hbollon/Laganga",
        },
        {
          title: "android-sqlite-toolbox",
          content: "Android java package designed to manage any sqlite database. Includes creation of the db and interactions with it (CRUD), import and export in several file formats (easily adaptable to any other format) and synchronization in http.",
          link: "https://github.com/hbollon/android-sqlite-toolbox",
        },
        {
          title: "LabyrinthEvolved",
          content: "3D labyrinth game project for Android using Unity. Use device gyroscope.",
          link: "https://github.com/hbollon/LabyrinthEvolved",
        },
        {
          title: "Le-Parrainage-Boursorama",
          content: "Website builded with Laravel. Used to promote and manage sponsorships for a online bank. Hosted on personnal vps.",
          link: "https://le-parrainage-boursorama.fr",
        },
        {
          title: "GyroscopeControl",
          content: "Unity script used for smooth and customizable object rotation with gyroscope. It include initial calibration with offset, rotation speed, smoothing parameter editable in Unity inspector and debug overlay.",
          link: "https://github.com/hbollon/GyroscopeControl",
        },
      ],
    },
  }),
};
</script>

<style scoped lang="scss">
@import "@/styles/constants.scss";

$linear: map-get($colors, dark);

#projects {
  background-color: lighten(map-get($colors, primary), 5%);

}

.title {
  color: map-get($colors, light);
}

/deep/ .text-wrapper {
  &:after {
    border-bottom: 1px solid map-get($colors, dark);
  }
}

article .inner {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    z-index: 1;
}

.content {
    color: map-get($colors, light);
    margin-top: 30px;
    header {
        height: 100%;
        width: 70%;
    }
    h1{
        font-size: 3rem;
    }
}

.vertical-center {
    display: flex;
    align-items: center;
}

h1 {
    margin-top: 10px;
    margin-bottom: 20px;
}
</style>
