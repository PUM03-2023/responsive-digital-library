import './css/Book.css'

import Tag from '../components/Tag'

import {
    useParams
} from "react-router-dom";

import React, {useEffect, useState} from 'react'

function Book(props) {
    let { id } = useParams();

    const [title, setTitle] = useState(undefined);
    const [subtitle, setSubtitle] = useState(undefined);
    const [desc, setDesc] = useState(undefined);
    const [date, setDate] = useState(undefined);
    const [author, setAuthor] = useState(undefined);
    const [category, setCategory] = useState(undefined);
    const [img, setImg] = useState(undefined);

    // TODO: fetch tags from our database
    const tags = ['this', 'is', 'some', 'test', 'tags'];

    useEffect(() => {
        // COMMENT: This should be fetched from our database in the future 
        // because if it has a page someone have put the book into our database.
        // The same goes for BookPreview component.
        var isbn = require('node-isbn');
        isbn.resolve(id, function (err, book) {
            if (err) {
                console.log('Book not found', err);
            } else {
                setTitle(book.title);
                setSubtitle(book.subtitle);
                setDesc(book.description);
                setDate(book.publishedDate);
                setAuthor(book.authors[0]); // TODO: Traverse whole list
                setCategory(book.categories[0]); // TODO: Traverse whole list
                setImg(book.imageLinks.thumbnail);
                console.log(book);
            }
        });
    // eslint-disable-next-line
    }, [])

    return (
    <main className='Book-Wrapper'>
        <div className='Book-Header'>
            <div className='Book-Thumbnail'>
                <img src={img} height='256px' alt="thumbnail"></img>
            </div>
            <div className='Book-Text'>
                <h1 className='Book-Title'>{title}</h1>
                <h2 className='Book-Sub-Title'>{subtitle}</h2>
                <p className='Book-Desc'>{desc}</p>
            </div>
        </div>
        <br/>
        <div className='Book-Meta'>
            <p className='Book-Date'><b>Published: </b>{date}</p>
            <p className='Book-Author'><b>Author: </b>{author}</p>
            <p className='Book-Category'><b>Category: </b>{category}</p>
            <p className='Book-Id'><b>ISBN: </b>{id}</p>
            <div className='Tags-Wrapper'>
                {tags.map((tag) => <Tag content={tag} />)}
            </div>
        </div>

    </main>);
}

export default Book;