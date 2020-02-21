import { createAction, handleActions } from 'redux-actions';

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
        // 비구조화 할당문법으로 사용. payload:input
        [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
        [INSERT]: (state, { payload: todo }) => ({
            ...state,
            todos: state.todos.concat(todo),
        }),
        [TOGGLE]: (state, { payload: id }) => ({
            ...state,
            todos: state.todos.map(todo =>
                todo.id === id ? { ...todo, done: !todo.done } : todo,
            ),
        }),
        [REMOVE]: (state, { payload: id }) => ({
            ...state,
            todos: state.todos.filter(todo => todo.id !== id),
        }),
    },
    initialState,
);

export default todos;
