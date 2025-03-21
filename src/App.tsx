import books from '../books.json'
import BookSearch from './components/BookSearch'
import './App.css'

export type Books = typeof books

function App() {

  return (
    <>
      <BookSearch books={books}/>
    </>
  )
}

export default App
