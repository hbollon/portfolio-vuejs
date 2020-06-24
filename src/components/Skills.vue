<template>
    <section id="skills">
        <Title :title="category.title" :description="category.description" />
        <div class="section-content">
            <div class="container-fluid">
                <div class="row d-flex flex-wrap align-items-center">
                    <div class="col-md-2 m-auto pb-4" v-for="(post, index) in posts.skills" :key="index">
                        <img id="imgLogo" class="img-responsive mx-auto d-block" :src="post.img" :alt="post.title"/>
                        <div id="divAlt" class="altCaption text-center">{{post.title}}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Title from './Title.vue'

    export default {
        name: 'Skills',
        components: {
            Title,
        },
        data: () => ({
            category: {"title":"Skills", "description":"Here is my armament"},
            posts: {
                skills: [
                    {
                        title: "C",
                        img: require('@/assets/img/logo/C.png')
                    },
                    {
                        title: "C++",
                        img: require('@/assets/img/logo/cplusplus.png')
                    },
                    {
                        title: "C#",
                        img: require('@/assets/img/logo/Csharp.png')
                    },
                    {
                        title: "Java",
                        img: require('@/assets/img/logo/java.png')
                    },
                    {
                        title: "Unity",
                        img: require('@/assets/img/logo/unity.png')
                    },
                    {
                        title: "HTML",
                        img: require('@/assets/img/logo/html.png')
                    },
                    {
                        title: "CSS",
                        img: require('@/assets/img/logo/css.png')
                    },
                    {
                        title: "PHP",
                        img: require('@/assets/img/logo/php.png')
                    },
                    {
                        title: "Laravel",
                        img: require('@/assets/img/logo/laravel.png')
                    },
                    {
                        title: "VueJS",
                        img: require('@/assets/img/logo/vuejs.png')
                    },
                    {
                        title: "Android",
                        img: require('@/assets/img/logo/android.png')
                    },
                    {
                        title: "Linux",
                        img: require('@/assets/img/logo/linux.png')
                    },
                    {
                        title: "Git/Github",
                        img: require('@/assets/img/logo/Octocat.png')
                    },
                    {
                        title: "VPS/Web Hosting",
                        img: require('@/assets/img/logo/ovh.png')
                    },
                ]
            }
        }),
    }
</script>

<style scoped lang="scss">
    @import '@/styles/constants.scss';

    #skills {
        background-color: lighten(map-get($colors, dark), 100%);
    }

    @media(min-width: #{map-get($breakpoints, medium)}) {
        .section-content {
            width: 80%;
            margin: 0 auto;
        }
    }

    img{
        max-width: 120px;
    }

    .altCaption{
        color: map-get($colors, secondary);
    }
</style>