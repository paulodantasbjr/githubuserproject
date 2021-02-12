import React, { useState } from 'react'

import { AiOutlineSearch } from 'react-icons/ai'

const Search = () => {
  const [user, setUser] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <AiOutlineSearch />
          <input
            type='text'
            placeholder='Entre com o nome de usuario'
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <button type='submit'>search</button>
        </div>
      </form>
    </section>
  )
}

export default Search
