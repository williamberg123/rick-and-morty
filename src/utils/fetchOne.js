const fetchOne = async (option, id) => {
    return fetch(`https://rickandmortyapi.com/api/${option}/${id}`).then(data => data.json());
};

export default fetchOne;