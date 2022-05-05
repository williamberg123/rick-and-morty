const fetchOne = async (option, id, url) => {
    return await url
    ? fetch(`${url}`).then(data => data.json())
    : fetch(`https://rickandmortyapi.com/api/${option}/${id}`).then(data => data.json());
};

export default fetchOne;