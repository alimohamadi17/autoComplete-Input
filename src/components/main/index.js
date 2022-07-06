import './main.css'
import React, { useState, useEffect } from 'react'
import Form from './form';
import SearchList from './searchList';




const Task2 = () => {


    //get item with localStorage
    const gestItem = JSON.parse(localStorage.getItem('Search') || '[]')

    const [suggest, setSuggest] = useState([])
    const [suggestMatch, setSuggestMatch] = useState([])
    const [text, setText] = useState('')

    const [input, setInput] = useState("")
    const [search, setSearch] = useState(gestItem)

    const [edit, setEdit] = useState(null)
    const [change, setChange] = useState(false);

    const [date, setDate] = useState('')

    //set item with localStorage
    useEffect(() => {
        localStorage.setItem("Search", JSON.stringify(search))
    }, [search])

    return (
        <div className='react-task'>
            <div className="container">

                <div className="appWrapper">

                    <Form
                        input={input}
                        setInput={setInput}
                        search={search}
                        setSearch={setSearch}
                        edit={edit}
                        setEdit={setEdit}
                        change={change}
                        setChange={setChange}
                        suggest={suggest}
                        setSuggest={setSuggest}
                        suggestMatch={suggestMatch}
                        setSuggestMatch={setSuggestMatch}
                        text={text}
                        setText={setText}
                        setDate={setDate}
                        date={date}
                    />
                    <SearchList
                        search={search}
                        setSearch={setSearch}
                        setEdit={setEdit}
                        setChange={setChange}
                    />
                </div>

            </div>
        </div>
    );
}

export default Task2;