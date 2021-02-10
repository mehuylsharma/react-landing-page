const counterReducer = (index = 0, action) => {
    const maxImages = 3;

    switch(action.type) {
        case 'INCREMENT': 
            if (index+2 > maxImages) {
                return 0;
            } else return index + 1;

        case 'DECREMENT':
            if (index-1 < 0) {
                return maxImages-1;
            } else return index - 1;

        default:
            return index;
    }
}

export default counterReducer;