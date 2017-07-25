export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}



export function items(state = [], action) {
            // console.log(action.items)
    
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            console.log(action.items)
            return [...state,...action.items];

        default:
            return state;
    }
}
