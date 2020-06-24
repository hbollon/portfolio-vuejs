<template>
  <div class="paragraph">
    <h3>Who am I ?</h3>
    <div class="begin">I'm a Full-Stack Developer student. Actually, I have a Licence BAC+3 in IT and I will start next year a computer science Master specialized in artificial intelligence and collaborative systems. IT is not only my professional background. It is also and above all a passion that has grown since I was 16 years old.</div>
    <p>I always liked to get into projects using the skills that I did not have or were even spare pure programming like web design, 3D modeling ect... <br>
    This allowed me to learn to be autonomous and to learn on my own, certainly not without difficulties far from it, but I always managed to overcome the obstacles and solve the problems I encountered !</p>
  </div>
</template>

<script>
export default {
    name: 'Description'
}
</script>

<style scoped lang="scss">
    @import '@/styles/constants.scss';

    .paragraph {
        color: map-get($colors, primary);
        .begin {
            color: map-get($colors, secondary);
        }
    }
</style>