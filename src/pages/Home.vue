<script setup>
import BaseLayout from "../components/layout/BaseLayout.vue";
import Header from "../components/layout/Header.vue";
import Footer from "../components/layout/Footer.vue";
import PhotoGrid from "../components/features/PhotoGrid.vue";
</script>

<template>
  <BaseLayout>
    <template #header><Header /></template>
    <template #default>
      <PhotoGrid />
    </template>
    <template #footer><Footer /></template>
  </BaseLayout>
</template>

<style scoped></style>
