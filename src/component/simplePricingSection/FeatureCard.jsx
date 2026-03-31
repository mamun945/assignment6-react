import React from 'react';
import { FaCheck } from 'react-icons/fa';

const FeatureCard = ({item, status}) => {
    return (
        <li className={`ml-3 flex items-center gap-2 ${status || 'text-[#627382]'}`}><FaCheck className={`text-green-500 ${status && 'text-white'}`}/> {item}</li>
    );
}; 

export default FeatureCard;