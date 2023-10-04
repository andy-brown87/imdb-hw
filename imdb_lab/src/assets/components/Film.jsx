const Film = ({film}) => {
    return (
        <li name = 'film'>
        <a href={film.url}>{film.name}</a>
        </li>
    )
}

export default Film