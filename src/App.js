import React from 'react';
import './App.css';
import Book from './Book';
import books from './data'

function App() {
  return (
    <main>
      <section className = "heading">
        <h2>Amazon Best Seller</h2>
        <div className = "underline"></div>
      </section>
      <section>
        <div className="container">
            {
              books.map((book) =>{
                 return <Book key={book.id} book={book}/>
              })
            }
        </div>
      </section>
    </main>
  );
}

export default App;
