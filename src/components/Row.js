/* eslint-disable no-unused-vars */
// componente para cada fileira onde vamos mostrar os filmes
// a gente vai passar as categorias para esse componente reportWebVitals
// entao esse componente Row não vai fazer nada além de pegar as propriedades
// e mostrar para a gente o que a gente vai precisar
// isso quer dizer que TODA CHAMADA de API  que a gente for fazer a gente vai o nosso APP.js
// a gente vai pegar todas as categorias que a gente quer pegar e vamos passar para
// cada Row as informações que a gente vai precisar

//useState serve para falar para o virtual dom do React
// a gente tem o dom do html que é como se fosse ua hirarquia de todos os componentes da tela
// e o React existe para poder facilitar e ficar mais rápido o jeito de renderizar e de atualizar a página
// para não ter que atualizar a página toda hora ou toda hora que alguma coisa mudar
//pois atualiza a página só quando eu quiser
// a gente tem um hook no React que é o useState, que além de guardar informação no estado dele,
// ele fala para o virtual dom: olha, quando alguma coisa nesse meu estado mudar, vc renderiza
// o React diferente do JS e HTML

//useEffect funciona toda vez que a gente renderizar a página, toda vez que o React
// for renderizar o DOM  dele, ele vai fazer o que a gente mandar nesse useEffect
// useEffect faz alguma coisa primeiro aí quando acabar de fazer essa coisa
// ou seja, quando esse componente for destruído, vai fazer alguma coisa
// lá no final [são as dependências] - se mudar vai atualizar tbm
// setiver o useEffect sem dependencia nenhuma, vai renderizar isso apenas uma vez
// a primeira vez que carregar o virtual dom
// *** É MUITO BOM DEIXAR NAS DEPENDENCIAS as informações que preciso no useEffect/NO fetch

import React, { useEffect, useState } from 'react';
import { getMovies } from '../api';
import './Row.css';

const imageHost = 'https://image.tmdb.org/t/p/original/';

function Row({ title, path, isLarge }) {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (_path) => {
    try {
      const data = await getMovies(_path);
      console.log('data ', data);
      setMovies(data?.results);
    } catch (error) {
      console.log('fetchMovies error: ', error);
    }
  };

  // a gente ta falando para o componente Row que ele precisa buscar as informações dos filmes

  useEffect(() => {
    fetchMovies(path);
  }, [path]);

  return (
    <div className="row-container">
      <h2 className="row-header">{title}</h2>
      <div className="row-cards">
        {movies?.map((movie) => {
          return (
            <img
              className={`movie-card ${isLarge && 'movie-card-large'}`}
              key={movie.id}
              src={`${imageHost}${
                isLarge ? movie.backdrop_path : movie.poster_path
              }`}
              alt={movie.name}
            ></img>
          );
        })}
      </div>
    </div>
  );
}

export default Row;
