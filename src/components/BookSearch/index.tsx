import React, { useEffect } from 'react'
import { Books } from '../../App';
import styles from './BookSearch.module.css'


const BookSearch = ({ books }: { books: Books }) => {
  const [author, setAuthor] = React.useState('')
  const [title, setTitle] = React.useState('')
  const [year, setYear] = React.useState('')
  const [country, setCountry] = React.useState('')
  const [pages, setPages] = React.useState('')
  const [filteredBooks, setFilteredBooks] = React.useState(books)

  const handleOnChangeAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value)
  }
  const handleOnChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }
  const handleOnChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value)
  }
  const handleOnChangeCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value)
  }
  const handleOnChangePages = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPages(e.target.value)
  }

  const applyFilter = () => {
    const stateFilteredBooks = books.filter(book => {
      return (author ? book.author.toLowerCase().includes(author.toLowerCase()) : true) &&
        (title ? book.title.toLowerCase().includes(title.toLowerCase()) : true) &&
        (year ? book.year.toString().startsWith(year) : true) &&
        (country ? book.country.toLowerCase().includes(country.toLowerCase()) : true) &&
        (pages ? book.pages.toString().startsWith(pages) : true)
    })
    setFilteredBooks(stateFilteredBooks)
  }

  useEffect(() => {
    applyFilter()
  }, [
    author,
    title,
    year,
    country,
    pages,])
  

  return(
    <div>
      <h1>Books Search</h1>
      <p>Search for books</p>
      <section className={styles.filterSection}>

        <input className={styles.filterInput} type="text" placeholder="Author" onChange={handleOnChangeAuthor}/>
        <input className={styles.filterInput} type="text" placeholder="Title" onChange={handleOnChangeTitle}/>
        <input className={styles.filterInput} type="text" placeholder="Year" onChange={handleOnChangeYear}/>
        <input className={styles.filterInput} type="text" placeholder="Country" onChange={handleOnChangeCountry}/>
        <input className={styles.filterInput} type="text" placeholder="Pages" onChange={handleOnChangePages}/>
      </section>
      <section>
        {filteredBooks.map((book, index) => (
          <React.Fragment key={index}>
            <article className={styles.bookItem}>
              <h2 className={styles.bookTitle}>{book.title}</h2>
              <div className={styles.bookDetails}>
                <dl>
                  <dt>Author:</dt>
                  <dd>{book.author}</dd>

                  <dt>Year:</dt>
                  <dd>{book.year}</dd>

                  <dt>Country:</dt>
                  <dd>{book.country}</dd>

                  <dt>Pages:</dt>
                  <dd>{book.pages}</dd>
                </dl>
              </div>
            </article>
          </React.Fragment>
        ))}
      </section>
    </div>
  );
}

export { BookSearch as default }