class BaseCreator {

    constructor(type) {
        this.type = type;
    }

    createAction(param) {
        const { actionType } = this.getActionTypes();

        return function(dispatch) {
            dispatch({
                type: actionType,
                param
            });
        };
    }

    createReducer() {
        const { actionType } = this.getActionTypes();
        
        return function(state = {}, action) {
            switch (action.type) {
                case actionType:
                    return Object.assign({}, state, {});

                default:
                    return state;
            }
        };
    }

    getActionTypes() {
        return {
            actionType: this.type.toUpperCase() + "_ACTION"
        };
    }
}

export default BaseCreator;