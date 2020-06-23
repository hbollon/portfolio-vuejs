<template>
  <div class="paragraph">
    <h3>Who am I ?</h3>
    <div class="begin">I'm a Full-Stack Developer student. Actually, I have a Licence BAC+3 in IT and I will start next year a computer science Master specialized in artificial intelligence and collaborative systems. IT is not only my professional background. It is also and above all a passion that has grown since I was 16 years old.</div>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
  </div>
</template>

<script>
export default {
    name: 'Description'
}
</script>

<style lang="scss">
    @import '@/styles/constants.scss';

    .paragraph {
        color: map-get($colors, primary);
        .begin {
            color: map-get($colors, secondary);
        }
    }
</style>