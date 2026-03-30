import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Featurs = ({item}) => {
    return (
        <li className='flex items-center gap-2'> <FaCheck className='text-green-500'/> {item}</li>
    );
};

export default Featurs;