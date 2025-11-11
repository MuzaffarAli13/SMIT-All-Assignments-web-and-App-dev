
import { type } from '@testing-library/user-event/dist/type';
import * as React from 'react';

export const Button = (props) => {
    return (
        <div>
             <button className='btn'>{props.title}</button>
        </div>
    );
};