import React from 'react'

function Search( { getQuery }) {
    const [ text, setText ] = React.useState('');

    const handleChange = (query) => {
        setText(query)
        getQuery(query)
    }

    return (
        <section className='search'>
            <form>
                <input 
                type='text' 
                className='form-control' 
                placeholder='Search characters'
                value={text}
                onChange={(e) => handleChange(e.target.value)}
                autoFocus />
            </form>
        </section>
    )
}

export default Search
