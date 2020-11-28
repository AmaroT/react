import React from 'react';
import ReactDOM from 'react-dom';
//Importing CSS
import './index.css'

const books = [
    {
        id: 1,
        img: 'https://target.scene7.com/is/image/Target/GUEST_856c906a-8925-43a5-8245-facaa4e947cc?wid=588&hei=588&qlt=80&fmt=webp',
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K Rowling',
    },
    {
        id: 2,
        img: 'https://drdianehamilton.com/wp-content/uploads/2018/11/img-dia2.png',
        title: 'The third stage of life',
        author: 'Daisaku Ikeda',

    },
    {
        id: 3,
        img: 'https://images-na.ssl-images-amazon.com/images/I/51jNORv6nQL._SL350_.jpg',
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K Rowling',
    },
];

function BookList() {
    return (
        <section className="bookList">
            {books.map((book, index) => {
                return <Book key={book.id} {...book}></Book>;
            })}
        </section>
    );
}

const Book = ({img, title, author}) => {
    const clickHandler = (e) => {
        console.log(e);
        console.log(e.target);
        alert('hello world');
    };
    const complexExample = (author) =>{
        console.log(author);
    }
    return (
        <article className="book" onMouseOver={()=>{
            console.log(title);
        }}>
            <img src={img} alt=''/>
            <h1 onClick={() => console.log(title)}>{title}</h1>
            <h4>{author}</h4>
            <button type="button" onClick={clickHandler}>Reference Example</button>
                <button type ="button" onClick={() => complexExample(author)}>more complex example</button>
        </article>
    );
};


ReactDOM.render(<BookList/>, document.getElementById('root'));
