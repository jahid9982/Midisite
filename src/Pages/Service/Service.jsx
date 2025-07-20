import React, { useState } from 'react';
import Servicess from '../Service/Servicess';
import AvilableService from './AvilableService';

const Service = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div className='mt-20'>
            <Servicess selected={selected} setSelected={setSelected}></Servicess>
            <AvilableService selected={selected} ></AvilableService>
        </div>
    );
};

export default Service;