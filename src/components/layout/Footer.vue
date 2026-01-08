<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer>
    <p>
      &copy; {{ currentYear }} Galeria de Fotos. Todos os direitos reservados.
    </p>
  </footer>
</template>

<style scoped lang="scss">
footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem;
  padding: 2rem;
  background: linear-gradient(to bottom, transparent, rgba(225, 48, 108, 0.02));
  border-radius: 12px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);

  p {
    color: #666;
    font-size: 0.9rem;
    margin: 0;
    font-weight: 400;
  }
}
</style>
