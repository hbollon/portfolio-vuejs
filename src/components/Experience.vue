<template>
  <section id="experience">
    <AnimateOnVisible name="fadeDown" :duration="1">
      <Title
        class="title"
        :title="content.metadata.title"
        :description="content.metadata.description"
      />
    </AnimateOnVisible>

	<AnimateOnVisible name="fadeUp" :duration="1">
		<div class="container-fluid">
			<div class="row">
				<ExperienceColumn
					:posts="content.metadata.academic"
					title="Education"
					class="col-12 col-md left"
				/>
				<ExperienceColumn
					:posts="content.metadata.professional"
					title="Professional"
					class="col-12 col-md right"
				/>
			</div>
		</div>
	</AnimateOnVisible>
  </section>
</template>

<script>
import Title from "./Title.vue";
import ExperienceColumn from "./ExperienceColumn.vue";

export default {
  name: "Experience",
  props: ["content"],
  components: {
    Title,
    ExperienceColumn
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/constants.scss";

$linear: map-get($colors, dark);

#experience {
  background-color: lighten(map-get($colors, primary), 5%);
}

.title {
  color: map-get($colors, light);
}

.row {
  padding-top: 20px;
  text-align: center;
}

@media (min-width: #{map-get($breakpoints, small)}) {
  .left {
    text-align: right;
    border-right: 2px solid $linear;
  }
  .right {
    text-align: left;
  }
}

@media (max-width: #{map-get($breakpoints, small)}) {
  .right {
    margin-top: 20px;
  }
  .left:before {
    content : "";
    position: absolute;
    left    : 20%;
    bottom  : 0;
    height  : 2px;
    width   : 60%;  /* or 100px */
    border-bottom:2px solid $linear;
}
}

/deep/ .text-wrapper {
  &:after {
    border-bottom: 1px solid map-get($colors, dark);
  }
}
</style>
