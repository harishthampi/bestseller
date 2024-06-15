import React from 'react';

const Book = ({book}) =>{
    const{id,author,title,price,img} = book
    console.log("title");
    return(
       <div className='single-book' onClick={()=>window.alert(author)}>
        <img src={img} alt={title} className='image'/>
        <h4>{title}</h4>
        <h5 className='author'>by {author}</h5>
        <h5 className='price'>${price}</h5>
       </div>
    )
}

export default Book;