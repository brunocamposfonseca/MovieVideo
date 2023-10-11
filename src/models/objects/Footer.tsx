import React from 'react';
import './css/Footer.css';
import { BsInstagram, BsFacebook, BsTwitter, BsTiktok } from 'react-icons/bs';
import imageLetreiro from '../../assets/letreiro1.png'

function Footer() {
  return (
    <div className='div1-footerctn-footer'>
        <div className='div2-footerctn-footer'>
            <div className='div3-midiasocial-footer'>
                <h1><img className='img1-imgletreiro-footer' href={'/'} src={imageLetreiro}></img></h1>
                <p>O seu site de filmes favorito.</p>
                <div className='div4-footersociallink-footer'>
                    <a href="#" className='a1-sociallink-footer instagram'>
                        <BsInstagram  
                            className='icn1-iconlink-footer'
                        />
                    </a>
                    <a href="#" className='a1-sociallink-footer facebook'>
                        <BsFacebook 
                            className='icn1-iconlink-footer'
                        />
                    </a>
                    <a href="#" className='a1-sociallink-footer twitter'>
                        <BsTwitter  
                            className='icn1-iconlink-footer'
                        />
                    </a>
                    <a href="#" className='a1-sociallink-footer tiktok'>
                        <BsTiktok  
                            className='icn1-iconlink-footer'
                        />
                    </a>
                </div>
            </div>
            <ul className='ul1-listfooter-footer'>
                <li>
                    <h3 className='h3-namecatft-footer'>Documents</h3>
                </li>
                <li>
                    <a className='a1-linkfooter-footer' href="">Policy and Privacy</a>
                </li>
                <li>
                    <a className='a1-linkfooter-footer' href="">Terms of Use</a>
                </li>
                <li>
                    <a className='a1-linkfooter-footer' href="">User Agreement</a>
                </li>
                <li>
                    <a className='a1-linkfooter-footer' href="">User Defense</a>
                </li>
                <li>
                    <a className='a1-linkfooter-footer' href="">Copyright</a>
                </li>
                <li>
                    <a className='a1-linkfooter-footer' href="">API</a>
                </li>
            </ul>
            <ul className='ul1-listfooter-footer'>
                <li>
                    <h3 className='h3-namecatft-footer'>Help</h3>
                </li>
                <li>
                    <a className='a1-linkfooter-footer' href="">Report</a>
                </li>
                <li>
                    <a className='a1-linkfooter-footer' href="">Platform issues</a>
                </li>
                <li>
                    <a className='a1-linkfooter-footer' href="">User Account</a>
                </li>
                <li>
                    <a className='a1-linkfooter-footer' href="">Movies</a>
                </li>
            </ul>
            <ul className='ul1-listfooter-footer'>
                <li>
                    <h3 className='h3-namecatft-footer'>Satus Inc</h3>
                </li>
                <li>
                    <a className='a1-linkfooter-footer' href="#">About</a>
                </li>
                <li>
                    <a className='a1-linkfooter-footer' href="https://mysoundapp.website" target='_blank'>MySound</a>
                </li>
                <li>
                    <a className='a1-linkfooter-footer' href="">Drilling</a>
                </li>
                <li>
                    <a className='a1-linkfooter-footer' href="">Projects</a>
                </li>
            </ul>
        </div>
        <div className='div2-copyright-footer'>
            <p>&copy; 2023 - Todos os direitos reservado por <a href="#">Movie Vídeo</a></p>
        </div>
    </div>
  )
}

export default Footer