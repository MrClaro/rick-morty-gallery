<script setup>
import { ref, onMounted, watch } from "vue";
import Card from "./Card.vue";
import { useImagens } from "../../composables/useImagens";
import { PhMagnifyingGlass } from "@phosphor-icons/vue";

const { images, info, loading, erro, loadImages, currentPage } = useImagens();
const searchTerm = ref("");

onMounted(() => {
  loadImages();
});

let timeout = null;
watch(searchTerm, (newValue) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    loadImages(1, newValue);
  }, 500);
});

const handleSearch = () => {
  loadImages(1, searchTerm.value);
};

const changePage = (newPage) => {
  if (newPage >= 1 && newPage <= info.value.pages) {
    loadImages(newPage, searchTerm.value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
</script>

<template>
  <section class="container">
    <div class="search-container">
      <div class="search-box">
        <input
          v-model="searchTerm"
          type="text"
          placeholder="Pesquisar personagem..."
          @keyup.enter="handleSearch"
        />
        <button class="search-btn" @click="handleSearch">
          <PhMagnifyingGlass :size="32" />
        </button>
      </div>
    </div>

    <div v-if="loading" class="status-msg">Carregando Galeria...</div>
    <div v-else-if="erro" class="status-msg erro">{{ erro }}</div>

    <div v-else>
      <section v-if="images.length > 0" class="grid">
        <Card
          v-for="img in images"
          :key="img.id"
          :image="img.image"
          :name="img.name"
        />
      </section>

      <div v-else class="status-msg">
        Nenhum personagem encontrado com o nome "{{ searchTerm }}".
      </div>

      <nav v-if="info.pages > 1" class="pagination">
        <button
          :disabled="currentPage === 1"
          @click="changePage(currentPage - 1)"
          class="page-btn"
        >
          Anterior
        </button>

        <span class="page-info">
          Página {{ currentPage }} de {{ info.pages }}
        </span>

        <button
          :disabled="currentPage === info.pages"
          @click="changePage(currentPage + 1)"
          class="page-btn"
        >
          Próxima
        </button>
      </nav>
    </div>
  </section>
</template>

<style scoped lang="scss">
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  .search-container {
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;

    .search-box {
      display: flex;
      width: 100%;
      max-width: 500px;
      border: 2px solid #ddd;
      border-radius: 25px;
      overflow: hidden;
      transition: border-color 0.3s;

      &:focus-within {
        border-color: #2c3e50;
      }

      input {
        flex: 1;
        border: none;
        padding: 0.8rem 1.5rem;
        outline: none;
        font-size: 1rem;
      }

      .search-btn {
        background: white;
        border: none;
        padding: 0 1rem;
        cursor: pointer;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #666;
        transition: color 0.3s;

        &:hover {
          color: #2c3e50;
        }
      }
    }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, 290px);
    justify-content: center;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin-top: 2rem;

    .page-info {
      font-weight: 500;
      color: #2c3e50;
    }

    .page-btn {
      padding: 0.6rem 1.2rem;
      border: none;
      background-color: #2c3e50;
      color: white;
      border-radius: 8px;
      cursor: pointer;
      transition: opacity 0.3s;

      &:disabled {
        background-color: #bdc3c7;
        cursor: not-allowed;
      }

      &:hover:not(:disabled) {
        opacity: 0.8;
      }
    }
  }

  .status-msg {
    text-align: center;
    padding: 3rem;
    font-size: 1.2rem;

    &.erro {
      color: #e1306c;
      background: #ffe5ee;
      border-radius: 8px;
    }
  }
}
</style>
