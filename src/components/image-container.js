import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { change } from '../states/actions'; 

export default function ImageContainer() {
    const index = useSelector(state => state);
    const dispatch = useDispatch();
    const url = '/images/building' + index + '.jpg';

    return (
        <div className="image-container">
            <img alt="building1" src={url}></img>
            <div className="container-buttons fixed">
                <button className="left" onClick={() => dispatch(change(false))}>
                    <img alt="chevron-left" src="/images/ch-left.png"></img>
                </button>
                <button className="right" onClick={() => dispatch(change())}>
                <img alt="chevron-right" src="/images/ch-right.png"></img>
                </button>
            </div>
        </div>
    )
}