import $ from 'jquery';

class AjaxCreator {

    constructor(type, baseUrl) {
        this.type = type;
        this.baseUrl = baseUrl;
    }

    createAction(param) {
        const { requestType, successType, failureType } = this.getActionTypes();
        const url = this.getUrl(param);

        return function(dispatch) {
            dispatch({
                type: requestType,
                param
            });

            $.get(url)
            .done(function(data) {
                dispatch({
                    type: successType,
                    data: data
                });
            })
            .error(function(jqXHR, textStatus) {
                dispatch({
                    type: failureType,
                    message: "Fetch URL: " + url + " failed with error: " + textStatus
                });
            });
        };
    }

    createReducer(parseFunction) {
        const { requestType, successType, failureType } = this.getActionTypes();

        return function(state = {
            isLoading: false,
            isLoaded: false,
            data: null
        }, action) {
            switch (action.type) {
                case requestType:
                    return Object.assign({}, state, {
                        isLoading: true,
                        isLoaded: false
                    });

                case successType:
                    return Object.assign({}, state, {
                        isLoading: false,
                        isLoaded: true,
                        data: parseFunction ? parseFunction(action.data) : action.data
                    });

                case failureType:
                    return Object.assign({}, state, {
                        isLoading: false,
                        isLoaded: false,
                        data: null
                    });

                default:
                    return state;
            }
        };
    }

    getActionTypes() {
        return {
            requestType: "FETCH_" + this.type.toUpperCase() + "_REQUEST",
            successType: "FETCH_" + this.type.toUpperCase() + "_SUCCESS",
            failureType: "FETCH_" + this.type.toUpperCase() + "_FAILURE"
        };
    }

    getUrl(param) {
        return this.baseUrl + param;
    }
}

export default AjaxCreator;