import React from 'react'
import CharacterItem from '../CharacterItem'
import Loading from '../Loading'

const CharacterGrid = ({ items, loading }) => {
    return (
        loading ? <Loading /> : <section className='cards'>
            {items.map(item => (
                <CharacterItem item={item} key={item.char_id} />
            ))}
        </section>
    )
}

export default CharacterGrid;
