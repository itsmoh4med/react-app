import React from 'react'
import { useState } from 'react'
import product1 from './images/image-product-1-thumbnail.jpg'
import product1Th from './images/image-product-1.jpg'
import product2 from './images/image-product-2-thumbnail.jpg'
import product2Th from './images/image-product-2.jpg'
import product3 from './images/image-product-3-thumbnail.jpg'
import product3Th from './images/image-product-3.jpg'
import product4 from './images/image-product-4-thumbnail.jpg'
import product4Th from './images/image-product-4.jpg'
import plus from './images/icon-plus.svg'
import minus from './images/icon-minus.svg'
import next from './images/icon-next.svg'
import previous from './images/icon-previous.svg'

function Hero() {
    const [fade1, setFade1] = useState(false);
    const [fade2, setFade2] = useState(true);
    const [fade3, setFade3] = useState(true);
    const [fade4, setFade4] = useState(true);

    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(count => count + 1);
    };
    const decrease = () => {
        setCounter(count => count === 0 ? 0 : count - 1);
    };

    const slides = [
        {url:product1Th},
        {url:product2Th},
        {url:product3Th},
        {url:product4Th},
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const nextSlide = () => {
        const isLastIndex = currentIndex === slides.length - 1;
        const newIndex = isLastIndex ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setFade1(true);
        setFade2(true);
        setFade3(true);
        setFade4(true);
        switch(slideIndex){
            case 0:
                setFade1(false);
                break;
            case 1:
                setFade2(false);
                break;
            case 2:
                setFade3(false);
                break;
            case 3:
                setFade4(false);
                break;
            default:

        }
        setCurrentIndex(slideIndex);
    };

    const [zoomIn, setZoomIn] = useState(false);

    const handleZoom = () => {
        setZoomIn(!zoomIn);
    };

    const handelParentClick = event => {
        event.preventDefault();
        if(event.target === event.currentTarget){
            setZoomIn(!zoomIn);
        }
    };

    return (
        <div>
            <div className='w-screen h-auto max-w-[1240px] mx-auto grid grid-rows justify-end md:grid-cols-2'>
                <div className='hidden md:block gird grid-cols-2 items-center justify-center pt-10'>
                    <div className='flex justify-center mb-5'>
                        <img onClick={handleZoom} className='w-96 h-96 border border-transparent rounded-2xl' src={slides[currentIndex].url} alt='/'></img>
                    </div>
                    <div className='flex gap-6 justify-center'>
                        <div className={`border-2 rounded-2xl ${fade1 ? `border-transparent` : `border-orange-600` }`}><img onClick={() => goToSlide(0)} className={`object-cover w-20 h-20 border border-transparent rounded-2xl hover:opacity-50 ${fade1 ? `opacity-100` : `opacity-50` }`} src={product1} alt='/'></img></div>
                        <div className={`border-2 rounded-2xl ${fade2 ? `border-transparent` : `border-orange-600` }`}><img onClick={() => goToSlide(1)} className={`object-cover w-20 h-20 border border-transparent rounded-2xl hover:opacity-50 ${fade2 ? `opacity-100` : `opacity-50` }`} src={product2} alt='/'></img></div>
                        <div className={`border-2 rounded-2xl ${fade3 ? `border-transparent` : `border-orange-600` }`}><img onClick={() => goToSlide(2)} className={`object-cover w-20 h-20 border border-transparent rounded-2xl hover:opacity-50 ${fade3 ? `opacity-100` : `opacity-50` }`} src={product3} alt='/'></img></div>
                        <div className={`border-2 rounded-2xl ${fade4 ? `border-transparent` : `border-orange-600` }`}><img onClick={() => goToSlide(3)} className={`object-cover w-20 h-20 border border-transparent rounded-2xl hover:opacity-50 ${fade4 ? `opacity-100` : `opacity-50` }`} src={product4} alt='/'></img></div>
                    </div>
                </div>
                <div className="w-full h-72 md:hidden flex justify-between items-center bg-no-repeat bg-cover bg-center duration-500" style={{backgroundImage: `url(${slides[currentIndex].url})`}}>
                    <button className='ml-5 bg-white border border-transparent rounded-full p-2' onClick={prevSlide}><img className='w-3 h-3' src={previous} alt='/'></img></button>
                    <button className='mr-5 bg-white border border-transparent rounded-full p-2' onClick={nextSlide}><img className='w-3 h-3' src={next} alt='/'></img></button>    
                </div>    
                <div className='w-full p-10'>
                    <h1 className='md:text-xl text-base uppercase text-orange-600 font-medium md:tracking-widest mb-3 md:mb-5'>sneaker company</h1>
                    <h1 className='md:text-6xl text-3xl capitalize font-medium mb-5 md:mb-10'>fall limited edition sneakers</h1>
                    <p className='text-gray-600 md:text-lg mb-5 md:mb-7'>These Low-profile sneakers are your perfect casual wear companion. Featuring a durable outer sole, they'll withstand everything the weather can offer.</p>
                    <div className='flex justify-between items-center md:block mb-5 md:md:mb-7'>
                        <div className='flex items-center'>
                            <h1 className='mr-5 text-xl md:text-3xl font-semibold'>$125.00</h1>
                            <p className='text-orange-600 md:text-lg font-semibold bg-orange-200 pt-1 pb-1 pl-2 pr-2 border border-transparent rounded-lg'>50%</p>
                        </div>
                        <h1 className='text-gray-600 text-lg line-through'>$250.00</h1>
                    </div>
                    <div className='grid grid-rows-2 md:flex items-center'>
                        <div className='flex justify-between bg-gray-100 pl-5 pr-5 pt-3 pb-3 mb-3 md:mb-0 md:mr-7'>
                            <button className='md:ml-2 md:mr-9 opacity-100 hover:opacity-50' onClick={decrease}><img src={minus} alt='/'></img></button>
                            <span className='md:mr-9 md:text-xl font-medium'>{counter}</span>
                            <button className='md:mr-2 opacity-100 hover:opacity-50' onClick={increase}><img src={plus} alt='/'></img></button>
                        </div>
                        <div className='flex justify-center'>
                            <button className='flex justify-center w-full bg-orange-600 pt-3 pb-3 pl-10 pr-10 text-white border border-transparent rounded-xl opacity-100 hover:opacity-50'><svg className='fill-white' width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill-rule="nonzero"/></svg><span className='ml-2'>Add to cart</span></button>
                        </div>
                    </div>
                </div>
                <div className={`w-full h-full flex items-center justify-center fixed top-0 left-0 bg-black/[0.8] ${zoomIn ? `hidden md:flex` : `hidden`}`} onClick={handelParentClick}>
                    <div className='grid justify-center grid-row-2 gap-y-10'>
                        <button onClick={handleZoom} className='w-96 relative'><svg className='fill-white absolute top-0 right-0' width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill-rule="evenodd"/></svg></button>
                        <div className='w-96 h-96 border-transparent rounded-2xl bg-center bg-no-repeat bg-contain flex items-center justify-between duration-500' style={{backgroundImage: `url(${slides[currentIndex].url})`}}>
                            <button className='ml-[-5%] bg-white border border-transparent rounded-full p-2' onClick={prevSlide}><img className='w-3 h-3' src={previous} alt='/'></img></button>
                            <button className='mr-[-5%] bg-white border border-transparent rounded-full p-2' onClick={nextSlide}><img className='w-3 h-3' src={next} alt='/'></img></button>
                        </div>
                        <div className='flex gap-6 justify-center'>
                            <div className={`border-2 flex justify-center items-center rounded-2xl ${fade1 ? `border-transparent` : `border-orange-600` }`}><img onClick={() => goToSlide(0)} className={`object-cover w-20 h-20 border border-transparent rounded-2xl hover:opacity-50 ${fade1 ? `opacity-100` : `opacity-50` }`} src={product1} alt='/'></img></div>
                            <div className={`border-2 flex justify-center items-center rounded-2xl ${fade2 ? `border-transparent` : `border-orange-600` }`}><img onClick={() => goToSlide(1)} className={`object-cover w-20 h-20 border border-transparent rounded-2xl hover:opacity-50 ${fade2 ? `opacity-100` : `opacity-50` }`} src={product2} alt='/'></img></div>
                            <div className={`border-2 flex justify-center items-center rounded-2xl ${fade3 ? `border-transparent` : `border-orange-600` }`}><img onClick={() => goToSlide(2)} className={`object-cover w-20 h-20 border border-transparent rounded-2xl hover:opacity-50 ${fade3 ? `opacity-100` : `opacity-50` }`} src={product3} alt='/'></img></div>
                            <div className={`border-2 flex justify-center items-center rounded-2xl ${fade4 ? `border-transparent` : `border-orange-600` }`}><img onClick={() => goToSlide(3)} className={`object-cover w-20 h-20 border border-transparent rounded-2xl hover:opacity-50 ${fade4 ? `opacity-100` : `opacity-50` }`} src={product4} alt='/'></img></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero