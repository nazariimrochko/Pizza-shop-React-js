export const setSortBy = ({type, order}) => ({
    type: 'SET_SORT_BY',
    sortBy: {type, order},
});

export const setCategory = (catIndex) => ({
    type: 'SET_CATEGORY',
    payload: catIndex,
});
