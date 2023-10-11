import React from 'react';
import image from '../../assets/letreiro1.png';
// import { BsSearch } from 'react-icons/bs';
import ButtonOne from '../components/Button/ButtonOne.tsx'
import './css/Navbar.css';
import SearchBar from '../components/Search/SearchBar.tsx';

function Navbar() {
  return (
    <section className='sect4-Ctn__topbar'>
        <div className='div1-logoctn-topbar'>
            <img className='img1-imglogo-topbar' src={image}></img>
            <div className='div2-pageslinks-topbar'>
                <ul className='ul1-listlinks-topbar'>
                    <a href='' className='a1-links-topbar active'>Home</a>
                    <a href='' className='a1-links-topbar'>Filmes</a>
                    <a href='' className='a1-links-topbar'>Séries</a>
                    <a href='' className='a1-links-topbar'>Gêneros</a>
                    <a href='' className='a1-links-topbar'>Lançamentos</a>
                    <a href='' className='a1-links-topbar'>Em breve</a>
                    <a href='' className='a1-links-topbar'>Canais</a>
                    <a href='' className='a1-links-topbar'>Minha lista</a>
                </ul>
            </div>
        </div>
        <SearchBar></SearchBar>
    </section>
  )
}

export default Navbar;