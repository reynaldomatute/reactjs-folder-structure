// The reducer updates the count
const initialState = {
    count: 0
};

const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case "INC":
            return { ...state, count: state.count + 1 };
        case "DEC":
            return { ...state, count: state.count - 1 };
        case "RESET":
            return { ...state, count: 0 };
        default:
            return state;
    }
}

export default reducer;