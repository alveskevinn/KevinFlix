const API_KEY = "de03fdc5f755111d83d7c9d9750d7f2e";
const API_BASE = "https://api.themoviedb.org/3";

const fetchAndHandleErrors = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      redirect: 'follow', // Trata redirecionamentos
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const api = {
  getHomeList: async () => {
    try {
      const homeList = [
        {
          slug: "originals",
          title: "Originais do Netflix",
          items: await fetchAndHandleErrors(
            `${API_BASE}/discover/tv/?with_network=213&language=pt-BR&api_key=${API_KEY}`
          ),
        },
        {
          slug: "trending",
          title: "Recomendados para Você",
          items: await fetchAndHandleErrors(
            `${API_BASE}/trending/all/week?&language=pt-BR&api_key=${API_KEY}`
          ),
        },
        {
          slug: "toprated",
          title: "Em Alta",
          items: await fetchAndHandleErrors(
            `${API_BASE}/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`
          ),
        },
        {
          slug: "action",
          title: "Ação",
          items: await fetchAndHandleErrors(
            `${API_BASE}/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
          ),
        },
        {
          slug: "comedy",
          title: "Comédia",
          items: await fetchAndHandleErrors(
            `${API_BASE}/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
          ),
        },
        {
          slug: "horror",
          title: "Terror",
          items: await fetchAndHandleErrors(
            `${API_BASE}/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
          ),
        },
        {
          slug: "romance",
          title: "Romance",
          items: await fetchAndHandleErrors(
            `${API_BASE}/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
          ),
        },
        {
          slug: "documentary",
          title: "Documentários",
          items: await fetchAndHandleErrors(
            `${API_BASE}/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
          ),
        },
      ];

      return homeList;
    } catch (error) {
      console.error('Error getting home list:', error);
      throw error;
    }
  },
};

export default api;
