const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0)

const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.')
    return keys.reduce((val, key) => {
        return  val[key]
    }, obj[firstKey])
}

const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path)
            return sum + value;
        }, 0
    );
}


const basket = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_BASKET': {
            const uniqueId = `${action.payload.id}-${action.payload.type}-${action.payload.size}`
            const currentPizzaItems = !state.items[uniqueId]
                ? [action.payload]
                : [...state.items[uniqueId].items, action.payload,]

            const newItems = {
                ...state.items,
                [uniqueId]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems),
                },
            };
            const totalCount = getTotalSum( newItems, 'items.length')
            const totalPrice = getTotalSum( newItems, 'totalPrice')

            return {
                ...state,
                items: newItems,
                 totalCount,
                 totalPrice,
            }
        }
        case 'REMOVE_BASKET_ITEM':
            const newItems = {
                ...state.items
            }
            const currentTotalPrice = newItems[action.payload].totalPrice
            const currentTotalCount = newItems[action.payload].items.length
            delete newItems[action.payload]
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            }

        case 'CLEAR_BASKET':
            return {
                items: {},
                totalPrice: 0,
                totalCount: 0,
            }
        case 'PLUS_BASKET_ITEM': {
            const newObjItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0],
            ];

            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length')
            const totalPrice = getTotalSum(newItems, 'totalPrice')

            return {
                ...state,
                items: newItems,
                totalPrice,
                totalCount,

            }

        }
        case 'MINUS_BASKET_ITEM':{
            const oldItems = state.items[action.payload].items;
            const newObjectItems = oldItems.length > 1
                ? state.items[action.payload].items.slice(1)
                : oldItems;

            const newItems = {
                    ...state.items,
                    [action.payload]: {
                        items: newObjectItems,
                        totalPrice: getTotalPrice(newObjectItems),
                    },
                };
            const totalCount = getTotalSum( newItems, 'items.length')
            const totalPrice = getTotalSum( newItems, 'totalPrice')

            return {
                ...state,
                items: newItems,
                totalPrice,
                totalCount,

            }
        }
        default:
            return state;
    }
}
export default basket;
