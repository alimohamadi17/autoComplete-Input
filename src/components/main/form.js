import './main.css'
import { v4 as uuidv4 } from 'uuid'
import { useEffect, useRef } from 'react';
import axios from 'axios'
import useDebounce from '../debounce/useDebounce';

const Form = (props) => {
    const { input, setInput, search, setSearch, edit, setEdit, change, setChange, suggest,
        text,
        setText,
        setSuggest,
        setSuggestMatch,
        suggestMatch, setDate, data } = props;

    const ref = useRef(true);

    useEffect(() => {
        ref.current.focus();
    });


    //update box for edit
    const onInputChange = (e) => {
        setText(e.target.value)
    }



    const debounceSearchTerm = useDebounce(text, 500);

    useEffect(() => {
        if (debounceSearchTerm) {

            loadSuggest(debounceSearchTerm)
            console.log('debounceSearchTerm')


        }
    }, [debounceSearchTerm])// eslint-disable-next-line




    // get suggestion word for  App with MealDB Api & axios
    const loadSuggest = async () => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
        const data = response.data.meals;
        if (!text) {
            setSuggestMatch([])
        } else {

            setSuggestMatch(data.filter(item => {
                const regex = new RegExp(`^${text}`, 'gi')
                return item.strMeal.match(regex) || item.strMealThumb.match(regex)

            }))
        }
    }




    // update value
    const handleUpdate = (text) => {
        setInput(text)
        setText(text)
    }

    //update box for edit
    useEffect(() => {
        if (edit) {
            setInput(edit.title)
            setText(edit.title)
        } else {
            setInput('')
        }
    }, [setInput, edit])









    const updateItem = (title, id, completed) => {
        const newItem = search.map((s) =>
            s.id === id ? { title, id, completed } : s
        )

        setSearch(newItem)
        setEdit('')
        setChange(false)
        setInput('')

    }

    //get date with javascript method
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + ' ' + time;




    const onFormSubmit = (e) => {
        e.preventDefault()

        if (!edit) {
            setSearch([...search, { id: uuidv4(), title: text, completed: false, date: dateTime }])
            setText('')
            setSuggestMatch([])

        } else {
            updateItem(...text, { id: edit.id, date: dateTime })
            setDate(date);
            setText('')
            setInput(text)
            setSuggestMatch([])

        }
    }



    //delete all search
    const deleteAll = () => {
        setSearch([])
    }


    return (

        <div>
            <form
                data-test='form-test'
                onSubmit={onFormSubmit} >
                <div className="form-group">
                    <input type="text"
                        className='textInput'
                        value={text}
                        required
                        onChange={onInputChange}
                        ref={ref}
                    />
                    <button data-test='test-button' type="submit" className='buttonSearch'>{change ? 'update' : 'Search'}</button>

                </div>
                {suggestMatch && suggestMatch.map(item => (
                    <div className='match' key={item.idMeal} onClick={() => handleUpdate(item.strMeal)}>
                        <span className='matchItem'>{item.strMeal}</span> <img src={item.strMealThumb} alt='food' className='img-match' />
                    </div>
                )
                )}
                <div className='deleteSearch'>
                    <h1>Search History</h1>
                    <button onClick={(e) => deleteAll(e)} type="delete">Clear search history</button>
                </div>
            </form>
        </div>


    );

}

export default Form;