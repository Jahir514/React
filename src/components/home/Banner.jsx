import React from 'react'
import bannerImg from '../../assets/banner-2.jpg'
import Button from '../utilites/Button'
const Banner = () => {
    return (
        <section className='bg-cover bg-no-repeat bg-center py-36' style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="container">
                <h1 className='text-6xl text-gray-800 font-medium py-4 capitalize'>
                    best collection for <br /> home decoration
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At aut <br /> praesentium nesciunt illum eos repellat, odit iste maxime magni? <br /> Enim iusto maiores fugit quas excepturi. Itaque omnis quidem accusamus delectus.
                </p>
                <Button text={"Shop Now"} textColor={"red"} bgColor={"black"} />
            </div>

        </section >

    )
}

export default Banner
