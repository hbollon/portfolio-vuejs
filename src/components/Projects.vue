<template>
  <section id="projects">
    <AnimateOnVisible name="fadeDown" duration="1">
		<Title
		class="title"
		:title="content.metadata.title"
		:description="content.metadata.description"
		/>
    </AnimateOnVisible>

    <div class="container-fluid center-block">
      <article class="content text-center">
		<AnimateOnVisible name="fadeUp" duration="1">
			<carousel class="mx-auto" :perPage="1" :navigationEnabled="true" :autoplay="true" :autoplayTimeout=4000 :loop=true :scrollPerPage="true" style="width: 70%;">
				<slide v-for="(post, index) in content.metadata.items" :key="index" style="width: 70%;">
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
		</AnimateOnVisible>
      </article>
    </div>
  </section>
</template>

<script>
import Title from "./Title.vue";
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: "Projects",
  props: ['content'],
  components: {
    Title,
    Carousel,
    Slide
  },
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
