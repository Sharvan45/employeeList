import * as ACTION_TYPES from '../actions/action_type';
import { isEqual } from "lodash";

const initialState = {
    isLoggedIn: false,
    employeeList: {"user":[]},
    errorMessage:""
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.LOGIN:
            let correctData = {
                "username": "hruday@gmail.com",
                "password": 'hruday123'
            };
            let isCorrect = isEqual(correctData, action.payload);
            let msg = isCorrect ? "" : "Invalid UserName/ Password"; 
            console.log(msg);
            return {
                ...state,
                isLoggedIn: isCorrect,
                errorMessage : msg
            }
        case ACTION_TYPES.LOGOUT_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                employeeList:{"user":[]}
            }
        case ACTION_TYPES.FETCH_EMPLOYEES:
            return {
                ...state,
                employeeList: {
                    user: [{
                        "id": 1,
                        "name": "test1",
                        "age": "11",
                        "gender": "male",
                        "email": "test1@gmail.com",
                        "phoneNo": "9415346313"
                    },
                    {
                        "id": 2,
                        "name": "test2",
                        "age": "12",
                        "gender": "male",
                        "email": "test2@gmail.com",
                        "phoneNo": "9415346314"
                    },
                    {
                        "id": 3,
                        "name": "test3",
                        "age": "13",
                        "gender": "male",
                        "email": "test3@gmail.com", "phoneNo": "9415346315"
                    },
                    {
                        "id": 4,
                        "name": "test4",
                        "age": "14",
                        "gender": "male",
                        "email": "test4@gmail.com", "phoneNo": "9415346316"
                    },
                    {
                        "id": 5,
                        "name": "test5",
                        "age": "15",
                        "gender": "male",
                        "email": "test5@gmail.com", "phoneNo": "9415346317"
                    },
                    {
                        "id": 6,
                        "name": "test6",
                        "age": "16",
                        "gender": "male",
                        "email": "test6@gmail.com", "phoneNo": "9415346318"
                    }
                    ]
                }
            }
        default:
            return state

    }
}

export default rootReducer;