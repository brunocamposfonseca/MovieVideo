import { BsSearch } from 'react-icons/bs';
import './css/SearchBar.css';

function SearchBar() {
  return (
    <div className='div3-searchbox-topbar'>
        <div className='div4-searchbox-topbar'>
          <div className='div5-boxsearch-topbar'>
            <button className='button-search'>
              <BsSearch />
            </button>
            <input
                className='input-search'
                placeholder='Buscar Filmes e Séries'
                type='text'
                autoComplete='off'
                autoCorrect='off'
            />
          </div>
        </div>
    </div>
  )
}

export default SearchBar