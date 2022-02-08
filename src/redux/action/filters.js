export const setSortBy = (sortName) => ({
    type: 'SET_SORT_BY',
    sortBy: sortName,
});

export const setCategory = (catIndex) => ({
    type: 'SET_CATEGORY',
    payload: catIndex,
});
