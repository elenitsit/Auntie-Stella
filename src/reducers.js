let defaultState = {};

function reducer(oldState = defaultState, action) {
    let state = JSON.parse(JSON.stringify(oldState));
    switch (action.type) {

      default:
            return state;
}}

export default reducer;
