<template>
  <section id="experience">
    <Title class="title" :title="category.title" :description="category.description" />
    <div class="container-fluid">
      <div class="row">
        <ExperienceColumn
          :posts="posts.academic"
          title="Education"
          class="col-12 col-md left"
        />
        <ExperienceColumn
          :posts="posts.professional"
          title="Professional"
          class="col-12 col-md right"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Title from "./Title.vue";
import ExperienceColumn from "./ExperienceColumn.vue";
export default {
  name: "Experience",
  components: {
    Title,
    ExperienceColumn,
  },
  data: () => ({
	category: { title: "Experience", description: "Professional and academic" },
	posts: { 
		academic: [{
			year: "From September 2020",
			title: "Computer Science Master at USMB",
			content: "Specialized in artificial intelligence and collaborative systems"
		},
		{
			year: "2017 - 2020",
			title: "IT License",
			content: "University Savoie Mont-Blanc, France"
		},
		{
			year: "2013 - 2017",
			title: "Scientific Baccalaureate",
			content: "Lycée de l'Albanais at Rumilly, France"
		}],

		professional: [{
			year: "01.2020 - 05.2020",
			title: "Urbalog LAET Project",
			content: "Digitizing the Urbalog board game on Android with the Nearby Connection API"
		},
    {
			year: "07.2019",
			title: "Pfeiffer Vacuum SAS, Annecy",
			content: "Interim IT mission: implementation of a new Qlickview access management program + Laravel development"
		},
		{
			year: "07.2018",
			title: "Pfeiffer Vacuum SAS, Annecy",
			content: "Interim IT mission: Management of SAP tables and inventory of sub-programs."
		}]
	}
  }),
};
</script>

<style scoped lang="scss">
@import "@/styles/constants.scss";

$linear: map-get($colors, dark);

#experience {
	background-color: lighten(map-get($colors, primary), 5%);
}

.title{
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

/deep/ .text-wrapper {
    &:after {
      border-bottom: 1px solid map-get($colors, dark);
    }
  }
</style>
