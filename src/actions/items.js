export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    // console.log("SOme Error")
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    // console.log('dasd')
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}



export function itemsFetchData(url) {
    console.log("Called",url)
    return (dispatch) => {
                // console.log("GOT RESPONSE")
        
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response) => {
                // console.log("GOT RESPONSE")
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}
