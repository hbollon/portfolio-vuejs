<template>
    <section id="about">
        <Title :title="category.title" :description="category.description" />

        <div class="section-content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-7 mr-auto">
                        <Presentation/>
                    </div>
                    <div class="col-md-4">
                        <PersonnalCard :user="user"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Title from './Title.vue'
    import PersonnalCard from './PersonnalCard.vue'
    import Presentation from './Presentation.vue'

    export default {
        name: 'AboutMe',
        props: ['user'],
        components: {
            Title,
            PersonnalCard,
            Presentation
        },
        data: () => ({
            category: {"title":"About Me", "description":"Hope to know you after"},
        }),
    }
</script>

<style lang="scss">
    @import '@/styles/constants.scss';

    #about {
        background-color: lighten(map-get($colors, dark), 100%);
        .col-12 {
            margin-top: 50px;
        }
    }

    @media(min-width: #{map-get($breakpoints, medium)}) {
        .section-content {
            width: 80%;
            margin: 0 auto;
        }
    }
</style>