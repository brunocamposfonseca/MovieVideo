import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import './css/CardSlider.css';

function CardSlider() {
    return(
    <div className="div1-ctn-cardslider">
        <h1 className="h1-namecat-cardslider">Ação</h1>
        <div className="div2-carousel-cardslider">
            <div className="div3-carouselbox-cardslider">

            </div>
            <button className="btn1-arrow-cardslider arrow-right_cardslider"><BsChevronLeft /></button>
            <button className="btn1-arrow-cardslider arrow-left_cardslider"><BsChevronRight /></button>
        </div>
    </div>
    )
}

export default CardSlider;