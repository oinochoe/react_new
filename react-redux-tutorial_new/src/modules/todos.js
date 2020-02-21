import { createAction, handleAction, handleActions } from 'redux-actions';

// 액션 타입
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE'; // todos를 체크/체크 해제함
const REMOVE = 'todos/REMOVE'; // todo를 제거함

let id = 3; // insert가 호출될 때마다 1씩 더해집니다.

// 액션 생성 함수
export const changeInput = createAction(CHANGE_INPUT, input => input);

export const insert = createAction(INSERT, text => ({
    id: id++,
    text,
    done: false,
}));

export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id);

// 리덕스 초기 상태
const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 배우기',
            done: true,
        },
        {
            id: 2,
            text: '리액트와 리덕스 사용',
            done: false,
        },
    ],
};

// 리덕스
const todos = handleActions(
    {
        [CHANGE_INPUT]: (state, action) => ({
            ...state,
            input: action.payload,
        }),
        [INSERT]: (state, action) => ({
            ...state,
            todos: state.todos.concat(action.payload),
        }),
        [TOGGLE]: (state, action) => ({
            ...state,
            todos: state.todos.map(todo =>
                todo.id === action.payload
                    ? { ...todo, done: !todo.done }
                    : todo,
            ),
        }),
        [REMOVE]: (state, action) => ({
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.id),
        }),
    },
    initialState,
);

export default todos;
