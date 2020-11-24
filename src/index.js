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

function BookList() {
    return (
        <section className="bookList">
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
}
const Book = () => {
    return <article className="book">
        <Image/>
        <Title/>
        <Author/>
    </article>;
};
const Image = () => (
    <img
        src='https://drdianehamilton.com/wp-content/uploads/2018/11/img-dia2.png'
        alt=""/>
);
const Title = () => <h1> The third stage of life</h1>;
const Author = () => <h4>Daisaku Ikeda</h4>;

ReactDOM.render(<BookList/>, document.getElementById('root'));
