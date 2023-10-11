import React from 'react'
import './css/SliderMovie.css'
import logoimg from '../../assets/logodest1.png';
import { BsPlayFill, BsPlus} from 'react-icons/bs';

function SliderMovie() {
  return (
    <div className='div1-sliderctn-slidermovie'>
        <div className='div2-sliderbox-slidermovie'>
          <div className='div3-ctninfo-slidermovie'>
            <div className='div4-boxinfo-slidermovie'>
              <div className='div5-msgdest-slidermovie'>
                <span className='span1-msgdest-slidermovie'>DESTAQUE MOVIE VÍDEO</span>
              </div>
              <img className='img1-logodest-slidermovie' src={logoimg} />
              <span className='span1-ctndesc-slidermovie'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque hic odio quisquam et! Praesentium similique vero porro numquam, ex aliquam labore adipisci perspiciatis nam dignissimos illo quas, laudantium harum beatae! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus deserunt cupiditate repellendus, distinctio hic aut fuga nihil molestiae?</span>
              <div className='div5-ctnbtns-slidermovie'>
                <button className='btn1-playerbtn-slidermovie'><BsPlayFill className='btnplay' />Assistir</button>
                <button className='btn1-playerbtn-slidermovie addList' style={{backgroundColor: '#1a1a1a', color: '#fff'}}><BsPlus className='btnplay' />Minha Lista</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SliderMovie