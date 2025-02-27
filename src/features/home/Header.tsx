import React from 'react'
import Input from '../../component/Input'
import SearchIcon from '../../assets/icon/SearchIcon'
import Select, {StylesConfig } from 'react-select';
import chroma from 'chroma-js';
import data from '../../data/data.json'
import Layout from '../../component/Layout';
import {useSearchParams } from 'react-router-dom';
import { SearchParam } from '../../model/SearchParam';
export interface ColourOption {
  readonly value: string;
  readonly label?: string;
  readonly color?: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}



const colourStyles: StylesConfig<ColourOption, true> = {
  control: (provided: Record<string, unknown>, state: any) => ({
    ...provided,
    height: !state.isFocused ? 40 : '',
    overflow: 'hidden',
    border: "1px solid #64748b",
    width: '100%',
    boxShadow: state.isFocused ? "0px 0px 6px #64748b" : "none",
    "&:hover": {
      border: "1px solid #64748b",
      boxShadow: "0px 0px 6px #64748b"
    },
    
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data?.color || 'white');
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
          ? data.color
          : isFocused
            ? color.alpha(0.1).css()
            : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
          ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : 'black'
          : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  valueContainer: (provided) => ({
    ...provided,
    overflow: "hidden",

  }),
  multiValue: (styles, { data }) => {
    const color = chroma(data?.color || 'white');
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    opacity: state.selectProps.menuIsOpen ? 1 : 0,
    transition: "opacity 0.2s ease-in-out",
  }),
};
const colors = ['#1E88E5', '#2ECC71', '#FF5733', '#9B59B6', '#F1C40F', '#E74C3C', '#3498DB', '#008080', '#FF6F61', '#7B8D93']
const unique = (arr: string[]) => Array.from(new Set(arr))

export default function Header() {
  const [searchParams, setParams] = useSearchParams()
  const keyword = (searchParams.get('keyword') || '').toLowerCase()
  const ingredientsFilter = searchParams.get('ingredients') || ''
  const ingredientsFilterArray = ingredientsFilter.split(',').filter(item => item)
  const colourOptions: readonly ColourOption[] = unique(data.map(item => item.ingredients).flat()).map((item, idx) => {
    return {
      value: item,
      label: item,
      color: colors[idx % colors.length]
    }
  })

  const onChange = (selecteds: readonly ColourOption[]) => {
    const param: SearchParam = {ingredients: selecteds.map(item => item.value).join(','), keyword}
    if(param.ingredients?.length === 0) delete param['ingredients']
    if(!keyword) delete param['keyword']
    setParams(param)
  }

  const onChangeKeyword = (e: any)=>{
    const keyword = e.target.value;
    const param: SearchParam = {ingredients: ingredientsFilter, keyword}
    if(!ingredientsFilter) delete param['ingredients']
    if(!keyword) delete param['keyword']
    setParams(param)
  }

  return (
    <header className='fixed flex items-center backdrop-blur-sm top-0 left-0 right-0 w py-5 bg-white/40 z-10 mb-4 sm:px-2 max-sm:px-0'>
      <Layout>
        <div className='flex max-lg:flex-col max-lg:items-center lg:flex-row gap-x-6 gap-y-3'>
          <div className='bg-white p-1 rounded-md -translate-y-2'>
            <img
              src="https://www.godgroup.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-new.7a4c5141.png&w=640&q=75"
              alt=""
              className='h-10'
            />
          </div>
          <div className='grid grid-cols-1 gap-x-5  gap-y-2 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 w-full'>
            <div className='col-span-1 2xl:col-span-1'>
              <Select
                closeMenuOnSelect={false}
                defaultValue={[]}
                onChange={onChange}
                value={ingredientsFilterArray.map(item=>{
                  const itsColor = colourOptions.find(option => option.value === item)?.color || ''
                  return {
                    value: item,
                    label: item,
                    color: itsColor
                  }
                })}
                styles={colourStyles}
                openMenuOnFocus
                isMulti
                className='outline-none'
                options={colourOptions}
                placeholder='Lọc theo'
              />
            </div>
            <div className='col-span-1 2xl:col-span-2 w-full'>
              <Input
                className='z-1'
                onChange={onChangeKeyword}
                placeholder='Nhập từ khóa tìm kiếm ...'
                icon={<SearchIcon />}
                width='full'
                value={keyword}
              />
            </div>
          </div>
        </div>

      </Layout>
    </header>

  )
}
