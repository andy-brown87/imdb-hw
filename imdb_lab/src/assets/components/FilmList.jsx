import React from 'react';
import Film from './Film';

const FilmList = ({ filmsProp = [] }) => {
const filmReactComponents = filmsProp.map((film) => (
    <Film key={film.id} film={film} />
))

return (
    <ul name='film-list'>
    {filmReactComponents}
    </ul>
)
}

export default FilmList;
