import {useState} from "react";
import { FcSearch } from "react-icons/fc";

import css from './searchBar.module.css'

export default function SearchBar({ query, onFormSubmit }) {
    const [text, setText] = useState('');
    const [showContent, setShowContent] = useState(false);

    const handleChange = event => {
        setText(event.target.value);
    }

    const formSubmit = (e) => {
        e.preventDefault();
        setShowContent(true);
        onFormSubmit(text);
        setText('');
    }

    return (
        <>
            <header className={css.searchBar}>
                <form className={css.form} onSubmit={formSubmit}>
                    <button type="submit" className={css.button} >
                        <FcSearch className={css.reactIcon} />
                        <span className={css.buttonLabel}>Search</span>
                    </button>

                    <input
                        className={css.input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={text}
                        onChange={handleChange}
                    />
                </form>
                {showContent && <p className={css.text}>Search item: {query}</p>}
            </header>           
        </>
    )
};