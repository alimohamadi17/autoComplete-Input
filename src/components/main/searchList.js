import './main.css'
import { FiEdit } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';

const SearchList = ({ search, setSearch, setEdit, change, setChange, date, setDate }) => {


    const handleDelete = ({ id }) => {
        setSearch(search.filter((s) => s.id !== id))
    }

    const handleEdit = ({ id }) => {
        const findItem = search.find((s) => s.id === id)
        setEdit(findItem)

        change ? setChange('Search') : setChange('update')
    }




    return (
        <>


            <div>
                {
                    search.map((s) => (
                        <div key={s.id} className="listItem">
                            <div>

                                <div
                                    className="list"
                                    onChange={(e) => e.preventDefault()}
                                >{s.title}</div>
                            </div>
                            <div className='date'>
                                <span>{s.date}</span>
                            </div>

                            {/* start-use icon from react-icons */}
                            <div className='icons'>

                                <AiFillDelete
                                    title='Delete'
                                    className="buttonDelete"
                                    onClick={() => handleDelete(s)}


                                />

                                <FiEdit
                                    title='Edit'
                                    className="buttonEdit"
                                    onClick={() => handleEdit(s)}
                                />
                                {/* end */}
                            </div>

                        </div>
                    ))


                }


            </div>
        </>
    );
}

export default SearchList;