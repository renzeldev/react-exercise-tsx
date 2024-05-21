import { useEffect, useReducer, useCallback } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import { Reducer } from 'redux'
import { useDispatch } from 'react-redux';
import ActionType from '../store/types/actiontype';

export default function Home1() {
    
    const {number} = useSelector((state:any) => state.createActionReducer)
    return (
        
        <h1>
            { number }
        </h1>
    )
}