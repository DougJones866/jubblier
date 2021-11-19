<template>
  <div class="about">
    <the-nav></the-nav>
    <h1>★ Commission Samples ★</h1>
    <h2>Sketch</h2>
    <h2>Coloured Sketch</h2>
    <h2>Full Colour</h2>
    <h2>Chibis</h2>
    <base-card>
    <div>
    <h1 class="title">Sketches</h1>
    </div>
    </base-card>
    
  </div>
</template>

<script>
import BaseCard from '../components/ui/BaseCard.vue'
export default {
  components: { BaseCard },
  name: 'Samples'
}
</script>

<style scoped>
.title {
  color:white;
  text-shadow:-1px 0 #e8562d, 0 2px #e8562d, 2px 0 #e8562d, 0 -1px #e8562d;
}

/* #e8562d; */

</style>
