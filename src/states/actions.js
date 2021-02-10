export const change = (add = true) => {
    if (add) {
        return {
            type: "INCREMENT"
        };
    } else {
        return {
            type: "DECREMENT"
        };
    }
}

export const decrement = () => {
    return {
      type: "DECREMENT"
    };
}