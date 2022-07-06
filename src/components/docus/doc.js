import React from 'react'
import './doc.css'

const Doc = () => {
    return (

        <div className='doc' data-test="test-doc">

            <h1>Hello everyone</h1><br />
            <p>
                Guide for easier and correct use of this application<br /><br />
                In this app, free and open-source API is used <b>(MealDB API)</b><br />
                and in the search box, you can search as an autocomplete. And as an example,  use words like <b>K, T, S, B, etc.</b>,  and in suggested searches, words like:<br />

                <b>Big Mac, Stamppot, Tamiya</b> and ...., You can see<br /><br />

                You can also <b>save, modify, or delete</b>  search results by date.<br /><br />

                This app is made with React JS and uses the <b>useState</b> and  <b>useEffect</b> and  <b>useRef</b> hooks
            </p>
        </div>
    )
}

export default Doc