import { useEffect, useReducer, useCallback, useState, useContext, useRef, EventHandler, ChangeEvent } from 'react';
import { useSelector, connect } from 'react-redux';
import { RootState } from '../store/reducer';
import { Reducer } from 'redux'
import { useDispatch } from 'react-redux';
import ActionType from '../store/types/actiontype';
import { Link } from 'react-router-dom';
import * as Actions from '../store/actions/actions'
// import Board, { moveCard } from "@asseinfo/react-kanban";
// import "@asseinfo/react-kanban/dist/styles.css";
import { MyContext, ContextType } from './MyProvider';
import useCounter, { Counter } from './useCounter';



const board = {
    columns: [
        {
            id: 1,
            title: "Backlog",
            cards: [
                {
                    id: 1,
                    title: "Card title 1",
                    description: "Card content"
                },
                {
                    id: 2,
                    title: "Card title 2",
                    description: "Card content"
                },
                {
                    id: 3,
                    title: "Card title 3",
                    description: "Card content"
                }
            ]
        },
        {
            id: 2,
            title: "Doing",
            cards: [
                {
                    id: 9,
                    title: "Card title 9",
                    description: "Card content"
                }
            ]
        },
        {
            id: 3,
            title: "Q&A",
            cards: [
                {
                    id: 10,
                    title: "Card title 10",
                    description: "Card content"
                },
                {
                    id: 11,
                    title: "Card title 11",
                    description: "Card content"
                }
            ]
        },
        {
            id: 4,
            title: "Production",
            cards: [
                {
                    id: 12,
                    title: "Card title 12",
                    description: "Card content"
                },
                {
                    id: 13,
                    title: "Card title 13",
                    description: "Card content"
                }
            ]
        }
    ]
};


const Home: React.FC<any> = (props) => {

    const [ num, setNum ] = useState(0);

    const context: ContextType|undefined = useContext(MyContext);

    const ref = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        console.log("sdfsdfsdfsdfd");
        sessionStorage.setItem('token', '123456'); // exist permanently
        localStorage.setItem('token', '123456'); // removed when tab is closed
    }, [])

    useEffect(() => {
        const updateNum = num;
        setTimeout(() => {
            console.log("Count number update " + updateNum)
        }, 1000) 
    },[])

    const initialState = {
        text: ''
    }

    interface state {
        text: string
    }

    type GetText = {
        type: 'GET_TEXT',
        payload: string,
    };

    type Action = {
        type: string,
        payload: string,
    }

    const reducer = (state: state = initialState, action: Action): state => {
        switch (action.type) {
            case 'GET_TEXT':
                return {
                    ...state,
                    text: action.payload
                }
            default:
                return state
        }
    }

    const counter_dispatch = useDispatch();

    const [state, dispatch] = useReducer(reducer, initialState);
    const [localState, setLocalState] = useState<string>("eeeee");

    const { count, incrementCount, decrementCount } = useCounter(0, 0)

    // const number = useSelector((state: any) => state.createActionReducer.number)
    const number = props.counter.number;
    // console.log(number)

    const onChangeText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setLocalState(e.target.value);
        dispatch({
            type: 'GET_TEXT',
            payload: e.target.value
        })
    },[])

    const increment = useCallback(() => {

        // counter_dispatch({ type: ActionType.INCREMENT });
        counter_dispatch(Actions.Increment());
        console.log("increment");
    },[])

    const decrement = useCallback(() => {
        counter_dispatch({ type: ActionType.DECREMENT });
        console.log("decrement");
    },[])

    const updateContext = () => {
        context?.updateData("Updated CONTEXT");
        ref.current?.click();
        console.log(props.history)
    }

    return (
        <div className="relative">
            <h1>Redux</h1>
            <input
                type="text"
                value={localState}
                style={{ borderWidth: 2, borderColor: 'black' }}
                onChange={onChangeText}
            />
            <h1>
                {state.text} <br />
                {localState}
            </h1>

            <div style={{display:'flex', flexDirection:'row'}}>
                <h1 style = {{fontSize:15, margin: 15}}>
                    {number}
                </h1>
                <button onClick={increment} style = {{fontSize: 15, margin: 15}}>+</button>
                <button ref={ref} onClick={decrement} style = {{fontSize: 15, margin: 15}}>-</button>
                <Link to="/dashboard1">To Dashboard1</Link>
            </div>
            <div className='flex justify-center'>
                <span style={{fontSize: 16}}>
                    {context?.data}
                </span>
            </div>
            <div>
                <button onClick={updateContext}>Update Context API</button>
            </div>
            <div className='flex justify-center'>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={decrementCount}>-</button>
                <span>{count}</span>
                <button onClick={incrementCount} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">+</button>
            </div>
            <div>
                {board.columns.map((column, index) => {
                    return (
                        <h1 key={index}>{column.title}</h1>
                    )
                })}
            </div>
            <div>
                <button onClick={() => {
                    setNum(prevState => prevState + 1);
                }}>Click me to update count</button>
            </div>
            {/* <Board
                allowRemoveLane
                allowRenameColumn
                allowRemoveCard
                onLaneRemove={console.log}
                onCardRemove={console.log}
                onLaneRename={console.log}
                initialBoard={board}
                allowAddCard={{ on: "top" }}
                onNewCardConfirm={draftCard => ({
                    id: new Date().getTime(),
                    ...draftCard
                })}
                onCardNew={console.log}
            /> */}

        </div>
    )
}

const mapStateToProps = (state:any) => ({
    counter: state.createActionReducer
})

export default connect(mapStateToProps)(Home);