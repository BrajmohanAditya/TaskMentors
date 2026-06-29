import React, { useState } from 'react'
import { Search, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchInput.trim()) {
      console.log("Searching for:", searchInput)
    }
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className='w-full max-w-2xl flex items-center gap-3 justify-center group'
    >
      <div className='relative flex-1'>
        <Search className='absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors duration-300' />

        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder='What do you want to learn today?'
          className='w-full pl-11 pr-11 py-2.5 bg-slate-50 border border-slate-200 rounded-xl
          hover:bg-white hover:border-slate-300 hover:shadow-sm
          focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 focus:outline-none
          transition-all duration-300 text-[15px] placeholder-slate-400 text-slate-900 font-medium'
        />

        {searchInput && (
          <button
            type='button'
            onClick={() => setSearchInput('')}
            className='absolute right-3 top-1/2 -translate-y-1/2 p-1.5 
            hover:bg-slate-100 rounded-lg transition-colors duration-200 group/close'
          >
            <X className='w-4 h-4 text-slate-400 group-hover/close:text-slate-600' />
          </button>
        )}
      </div>

      <button
        type='submit'
        className='px-6 py-2.5 bg-indigo-600 text-white font-bold tracking-wide rounded-xl shadow-md hover:shadow-lg 
        hover:-translate-y-0.5 hover:bg-indigo-700 border border-transparent
        active:translate-y-0 transition-all duration-300 text-sm'
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar
