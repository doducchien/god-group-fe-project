import React, { useEffect, useState } from 'react'
import { Recipe } from '../../model/Recipe';
import recipeData from '../../data/data.json'
import { replace, useNavigate, useParams } from 'react-router-dom';
import Layout from '../../component/Layout';
import UserIcon from '../../assets/icon/UserIcon';
import CalendaIcon from '../../assets/icon/CalendaIcon';
import CommentIcon from '../../assets/icon/CommentIcon';
import SaveIcon from '../../assets/icon/SaveIcon';
import StarIcon from '../../assets/icon/StarIcon';
import CountryIcon from '../../assets/icon/CountryIcon';
import RecipeRefer from './RecipeRefer';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RightArrow from '../../assets/icon/RightArrow';
import { getRecipe } from '../../api/recipe_api';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { offLoading, onLoading } from '../loading/LoadingSlice';
import Loading from '../../component/Loading';


export default function RecipeDetail() {
    const params = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState<Recipe | undefined>();
    const dispatch = useAppDispatch();
    const loading = useAppSelector(state => state.loading.loading);

    useEffect(() => {
        const id = params?.id;
        if (!id) return;
        dispatch(onLoading())
        getRecipe(Number(id))
            .then(setData)
            .then(() => dispatch(offLoading()))
    }, [params?.id])

    return (
        <Layout>
            {loading && <Loading />}
            {!loading && data && (
                <div className='flex flex-col gap-4 py-2'>
                    <div className='sticky top-0 bg-white pb-2 '>
                        <div className='relative '>
                            <span className='absolute right-0 sm:top-1 flex cursor-pointer p-1 rounded-md hover:bg-slate-100  items-center' onClick={() => navigate('/', { replace: true })}>
                                <span className='max-sm:hidden sm:inline'>home</span>
                                <span className='translate-y-0.5'><RightArrow /></span>
                            </span>
                            <p className='font-bold sm:text-3xl max-sm:text-xl max-sm:text-center '>{data.title}</p>
                        </div>
                    </div>


                    <div className='flex flex-wrap max-[400px]:flex-col  gap-x-10 border-b-2 pb-2 lg:mb-4 max-lg:mb-2 gap-y-2'>
                        <div className='flex gap-x-0.5'>
                            <span className='inline'><UserIcon /></span>
                            <span>{data.author}</span>
                        </div>
                        <div className='flex gap-x-0.5'>
                            <span className='inline'><CalendaIcon /></span>
                            <span>{data.date}</span>
                        </div>
                        <div className='flex gap-x-0.5'>
                            <span className='inline'><CommentIcon /></span>
                            <span>{data.comments} comments</span>
                        </div>
                        <div className='flex gap-x-0.5'>
                            <span className='inline'><CountryIcon /></span>
                            <span>{data.cuisine}</span>
                        </div>

                        <div className='flex gap-x-0.5'>
                            <span className='inline'><SaveIcon /></span>
                            <span>{data.saves} saves</span>
                        </div>

                        <div className='flex gap-x-0.5 '>
                            <span className='inline'><StarIcon number={data.rating?.value || 0} /></span>
                            <span>{data.rating?.value}/5 ({data.rating?.reviews} reviews)</span>
                        </div>
                    </div>
                    <div className='lg:grid lg:grid-cols-3 max-lg:flex-col gap-10'>
                        <div
                            style={{ backgroundImage: `url(${data.image})` }}
                            className='col-span-2 w-full md:h-[500px] max-md:h-[300px] bg-cover bg-no-repeat rounded-md'
                        />
                        <div className='col-span-1'>
                            <div className='mb-4'>
                                <p className='text-2xl font-bold mb-2'>Nguyên liệu thế biến: </p>
                                <ul className='max-md:flex max-md:flex-wrap max-md:gap-x-2'>
                                    {data.ingredients?.map(item => (
                                        <li key={item} className='flex items-center font-semibold gap-x-1 mb-2'>
                                            <input type='checkbox' checked readOnly className='accent-pink-500 md:w-6 md:h-6 max-md:w-4 max-md:h-4' />
                                            <span className='text-gray-600'>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p className='text-2xl font-bold'>Mô tả</p>
                                <span>{data.description}</span>
                            </div>

                        </div>

                    </div>

                    <div className='lg:grid lg:grid-cols-5 pr-1 max-lg:flex-col'>
                        <div className='col-span-2'>
                            <div className='mb-4'>
                                <p className='text-2xl font-bold mb-2'>Các bước thực hiện</p>
                                <ul>
                                    {data.instructions?.map((item, idx) => (
                                        <li key={item} className='mb-1 font-semibold'>
                                            <span className='inline-flex bg-pink-500 text-white sm:w-6 sm:h-6 max-sm:w-5 max-sm:h-5 items-center justify-center mr-2'>{idx + 1}</span>
                                            <span className='text-gray-600'>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p className='text-2xl font-bold sm:mb-2 max-sm:mb-1'>Các thông tin khác</p>
                                <div>
                                    <div className='mb-1 font-semibold'>
                                        <span className=''>Thời gian chuẩn bị: </span>
                                        <span className='text-gray-600'>{data.prep_time}</span>
                                    </div>
                                    <div className='mb-1 font-semibold'>
                                        <span className=''>Thời gian chế biến: </span>
                                        <span className='text-gray-600'>{data.cook_time}</span>
                                    </div>
                                    <div className='mb-1 font-semibold'>
                                        <span className=''>Đã phục vụ: </span>
                                        <span className='text-gray-600'>{data.servings} clients</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-3'>
                            <p className='text-2xl font-bold mb-2'>Các món ăn có thể tham khảo khác</p>
                            <RecipeRefer id={data.id} />
                        </div>
                    </div>

                </div>
            )}
        </Layout>
    )
}
