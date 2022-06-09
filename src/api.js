// esse arquivo vai ter todas as informações de requisições
const API_KEY = '1243465d2ab9d3389884380ebd6d7b76';

//url que PRECEDE todas as url's que a gente for consultar para essa API
export const API_BASE = 'https://api.themoviedb.org/3';

const categories = [
  {
    name: 'trending',
    title: 'Em alta',
    path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
    isLarge: true,
  },
  {
    name: 'netflixOriginals',
    title: 'Originais da Netflix',
    path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    isLarge: false,
  },
  {
    name: 'topRated',
    title: 'Populares',
    path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
    isLarge: false,
  },
  {
    name: 'comedy',
    title: 'Comédias',
    path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    isLarge: false,
  },
  {
    name: 'romances',
    title: 'Romances',
    path: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    isLarge: false,
  },
  {
    name: 'documentaries',
    title: 'Documentários',
    path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
    isLarge: false,
  },
];

// método para pegar os Filmes - porque a gente tem as categorias
// e dessas categorias, a gente vai receber uma lista de filmes
// então a gente vai criar uma funcao getMovies para pegar a lista de filmes
// nesse método é onde vou passar o path de cada filme

export const getMovies = async (path) => {
  try {
    let url = `${API_BASE}${path}`;
    const response = await fetch(url);
    return await response.json();
  } catch {
    // eslint-disable-next-line no-undef
    console.log('error getMovies: ', error);
  }
};

//usa o default porque aí o categories se torna um alias !!**
// isso quer dizer que, se não usar o default na hora de exportar as categorias,
// na hora de importar no APP.js, não teria um alias para importar
// sem default tem que fazer assim: {categories}
export default categories;
