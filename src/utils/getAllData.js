import { fetchData } from './fetchData';

export default async function getAllData(whichRenderingOption, quantPages){
    const data = [];
    let fetchPageData = [];
    const loadingDiv = document.querySelector('.LoadingDiv');

    for(let i = 1; i <= quantPages; i++){
        if(i === 1){
            fetchPageData = await fetchData(whichRenderingOption);
        } else{
            fetchPageData = await fetchData(whichRenderingOption, i);
        }

        fetchPageData = fetchPageData.results;
        data.push(...fetchPageData);
    }

    !!loadingDiv && (loadingDiv.remove());
    return data;
}