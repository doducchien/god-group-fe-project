import data from '../data/data.json'
import { Recipe } from '../model/Recipe'
import { fakeApi } from '../util/util'

type SearchParam = {
    keyword?: string,
    ingredients?: string[]
}

export const getRecipes = (params: SearchParam)=>{
    const {keyword='', ingredients = []} = params;
    const ingredientsSet = new Set(ingredients);
    let listAfterFilter: Recipe[] = []

    if(ingredients.length !== 0){
        for(let i = 0; i < data.length; i++){
            const currentData = structuredClone(data[i]);
            if(!currentData?.ingredients) continue

            for(let j = 0; j < currentData.ingredients?.length; j++){
                const currentItem = currentData.ingredients[j];
                if(ingredientsSet.has(currentItem)){
                    listAfterFilter.push(currentData)
                    break
                }
            }
        }
    }
    else listAfterFilter = structuredClone(data);

    let listAfterSearch: Recipe[] = [];
    if(keyword){
        listAfterSearch = listAfterFilter.filter(item => item.title && (item.title.toLowerCase().includes(keyword) || keyword.includes(item.title.toLowerCase())))
    }
    else listAfterSearch = listAfterFilter;
    return fakeApi(listAfterSearch)
}

export const getRecipe = (id: number)=>{
    const newData = data.find(item => item.id ==id);
    return fakeApi(newData);

}