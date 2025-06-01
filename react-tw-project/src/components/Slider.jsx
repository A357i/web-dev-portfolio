import React, { useEffect, useState } from 'react'

import image1 from '../slides/1.png';
import image2 from '../slides/2.jpg';
import image3 from '../slides/3.jpg';
import image4 from '../slides/4.jpg';

function Slider() {
    const [activeSlide, setActiveSlide] = useState(0)
    const [slides, setSlides] = useState([
        image1,
        image2,
        image3,
        image4
    ])

    useState(() => {
        setActiveSlide(2)
    }, [])

    useEffect(() => {
        const changeSlide = setInterval(() => {
            if(activeSlide < (slides.length -1)){
                setActiveSlide(slide => slide += 1)
            } else {
                setActiveSlide(0);
            }
        }, 3000);

        return () => {
            clearInterval(changeSlide)
        }

    }, [activeSlide])

    return (
        <section className={`bg-cover bg-[url('https://img.freepik.com/free-vector/gradient-blur-pink-blue-abstract-background_53876-117324.jpg?semt=ais_items_boosted&w=740')] py-12`}>
            {slides && <img src={slides[activeSlide]} className='my-10 mx-auto block rounded-xl' />}
        </section>
    )
}

export default Slider
