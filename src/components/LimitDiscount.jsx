import React from 'react'
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function LimitDiscount() {
    const filterData = list.filter((data) => data.category === "Free");
   // console.log(filterData);
   var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <h1 className='font-semibold text-xl pb-2'>Amazing Discount on Foods</h1>
    <p>"Indulge in gourmet flavors at unbeatable prices with our limited-time discounts – savor more for less!"
    Treat yourself to culinary delights with our exclusive discounts on a delectable range of dishes!
    </p>
   </div>
   <div className="slider-container max-w-screen-2xl container mx-auto md:px-20 px-4">
      <Slider {...settings}>
       {filterData.map((item)=>(
        <Cards item={item} key={item.id}/>
       ))}
      </Slider>
    </div>
   </>
  )
}

export default LimitDiscount
