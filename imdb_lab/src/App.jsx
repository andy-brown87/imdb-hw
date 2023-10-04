import { useState } from 'react'
import './App.css'
import FilmBox from './assets/containers/FilmBox'

function App  () {
  return (
    <>
    <h1>Upcoming Film Releases for UK</h1>
    <FilmBox/>
    
    <footer>
    <a href="https://www.imdb.com/calendar/?region=gb">View more upcoming releases</a>
    </footer>

    </>
  )
}

export default App
