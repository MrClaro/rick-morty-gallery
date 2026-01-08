import { ref } from "vue";
import axios from "axios";

export function useImagens() {
  const images = ref([]);
  const info = ref({});
  const loading = ref(true);
  const erro = ref(null);
  const currentPage = ref(1);

  async function loadImages(page = 1, name = "") {
    try {
      loading.value = true;
      erro.value = null;

      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/`,
        {
          params: {
            page: page,
            name: name,
          },
        },
      );

      images.value = response.data.results;
      info.value = response.data.info;
      currentPage.value = page;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        images.value = [];
        info.value = { pages: 0 };
      } else {
        erro.value = "Erro ao carregar imagens";
      }
    } finally {
      loading.value = false;
    }
  }

  return { images, info, loading, erro, loadImages, currentPage };
}
