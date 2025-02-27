import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import Slider from "react-slick";
import Card from '../../component/Card';
import { Link } from 'react-router-dom';
import data from '../../data/data.json';
import { Recipe } from '../../model/Recipe';

type RecipeReferProps = {
    id: number
}

const setting = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 200,
    slidesToShow: 2.5,
    // rtl: true,
    // centerMode: true,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1.5, // Ở mobile, hiển thị 1.5 slide
          },
        },
      ],
}


export default function RecipeRefer({ id }: RecipeReferProps) {
    const [related] = useState<Recipe[]>([...data])

    return (
        <Slider
            {...setting}
            className="
            lg:[&_.slick-slide]:px-2 
            [&_.slick-prev:before]:text-pink-200 
            [&_.slick-next:before]:text-pink-200 
            [&_.slick-prev:hover:before]:text-pink-500 
            [&_.slick-next:hover:before]:text-pink-500 
            max-lg:[&_.slick-slide]:px-1 
            "
        >
            {related.filter(item => item.id !== id).map((item, idx) => {
                return (
                    <div key={String(idx) + item.title}>
                        <Link to={`/recipe/${item.id}`}>
                            <Card
                                imgUrl={item.image || ''}
                                cuisine={item.cuisine}
                                time={item.time}
                                title={item.title}
                            />
                        </Link>
                    </div>
                )
            })}


        </Slider>
    )
}
