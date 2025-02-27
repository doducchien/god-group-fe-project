import React from 'react'
import Card from '../../component/Card'
import { Link } from 'react-router-dom'
import { Recipe } from '../../model/Recipe';

type ListCardProps = {
    listData: Recipe[]
}
export default function ListCard(props: ListCardProps) {
    const {listData} = props;
    return (
        <div
            className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 lg:gap-y-4 max-lg:gap-y-2'
        >
            {
                listData.map(item => (
                    <Link key={item.id} to={`/recipe/${item.id}`}>
                        <Card
                            imgUrl={item.image || ''}
                            cuisine={item.cuisine}
                            time={item.time}
                            title={item.title}
                        />
                    </Link>)
                )
            }

        </div>

    )
}   