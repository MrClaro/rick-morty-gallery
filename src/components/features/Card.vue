<script setup>
defineProps(["image", "name"]);
</script>

<template>
  <div class="card">
    <div class="image-wrapper">
      <img :src="image" :alt="name" loading="lazy" />
    </div>
    <div class="content">
      <h3>{{ name }}</h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  .image-wrapper {
    width: 100%;
    height: 250px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    padding: 1rem;
    text-align: center;

    h3 {
      font-size: 1.1rem;
      color: #333;
      margin: 0;
      font-weight: 500;
    }
  }
}
</style>
