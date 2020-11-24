import React from 'react';
import ReactDOM from 'react-dom';
//Importing CSS
import './index.css'

//JSX RULES
//RETURN SINGLE ELEMENT
//DIV/SECTION/ ARTICLE OR FRAGMENT
// USE CAMELCASE FOR HTML ATTRIBUTE
//className instead of class
//close every element
//formatting
//------
//Nested Components, React Tools
// ------
//CSS

// function Greeting () {
//     return (
//         <div>
//             <Person />
//             <Message />
//         </div>
//     );
// };
//
// const Person = () => <h2>John Doe</h2>;
// const Message = () => {
//     return <p>This is my message</p>
// };
// ReactDOM.render(<Greeting/>,document.getElementById('root'));
const firstBook = {
    img: 'https://target.scene7.com/is/image/Target/GUEST_856c906a-8925-43a5-8245-facaa4e947cc?wid=588&hei=588&qlt=80&fmt=webp',
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K Rowling'
}
const secondBook = {
    img: 'https://drdianehamilton.com/wp-content/uploads/2018/11/img-dia2.png',
    title: 'The third stage of life',
    author: 'Daisaku Ikeda'

}


function BookList() {
    return (
        <section className="bookList">
            <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} >
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores deleniti harum in nam nobis optio quas? Atque deleniti dolores quam quis, similique sit tempora temporibus. Nobis non officia repellat!</p>
            </Book>
            <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
        </section>
    );
}

const Book = ({img, title, author, children}) => {
    // const {img, title, author} = props
    return (
        <article className="book">
            <img src={img} alt=''/>
            <h1>{title}</h1>
            {children}
            <h4>{author}</h4>
        </article>
    );
};


ReactDOM.render(<BookList/>, document.getElementById('root'));
