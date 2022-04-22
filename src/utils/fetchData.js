export const fetchData = async (optionToRender, pageNumber) => {
    return await pageNumber 
    ? fetch(`https://rickandmortyapi.com/api/${optionToRender}?page=${pageNumber}`).then(data => data.json())
    : fetch(`https://rickandmortyapi.com/api/${optionToRender}`).then(data => data.json());
};