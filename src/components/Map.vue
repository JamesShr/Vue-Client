<template>

  <GmapMap
    :center="{lat:25.040945, lng:121.566305}"
    :zoom="14"
    map-type-id="terrain"
    style="width: 1000px; 
           height: 600px; 
           margin-left: auto; 
           margin-right: auto; 
         "
  >
  <!--
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    />
  -->
  </GmapMap>

</template>

<script>
export default {
  data: () => ({})
};
</script>

<style>
</style>
