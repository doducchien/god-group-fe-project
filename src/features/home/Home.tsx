import React, { useEffect, useState } from 'react'
import Header from './Header'
import ListCard from './ListCard'
import Layout from '../../component/Layout'
import { useSearchParams } from 'react-router-dom'
import { Recipe } from '../../model/Recipe'
import data from '../../data/data.json'
import { getRecipes } from '../../api/recipe_api'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import Loading from '../../component/Loading'
import { offLoading, onLoading } from '../loading/LoadingSlice'
import { useDebounce } from 'use-debounce'

export default function Home() {
  const [searchParams] = useSearchParams();
  const [listData, setListData] = useState<Recipe[]>([...data]);

  const keyword = (searchParams.get('keyword') || '').toLowerCase()
  const [keywordDebounce] = useDebounce(keyword, 1000)
  const ingredientsFilter = (searchParams.get('ingredients') || '')
  const [ingredientsFilterDebounce] = useDebounce(ingredientsFilter, 200)

  const dispatch = useAppDispatch();
  const loading = useAppSelector(state => state.loading.loading);

  useEffect(() => {
    dispatch(onLoading())
    const ingredients = ingredientsFilter.split(',').filter(item => item)
    getRecipes({ keyword, ingredients }).then(setListData).then(() => dispatch(offLoading()))
  }, [ingredientsFilterDebounce, keywordDebounce])
  return (
    <Layout>
      <Header />
      {loading && <Loading />}
      {!loading && (
        <main className='lg:mt-24 max-lg:mt-48'>
          <ListCard listData={listData} />
        </main>

      )}

    </Layout>

  )
}
