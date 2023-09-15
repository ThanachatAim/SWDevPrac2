import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';
import { useState } from "react";


export default function ProductCard({vacName,imgSrc,onRatingUpdate, rating}
    :{vacName:string, imgSrc:string, onRatingUpdate:Function, rating:number}) {

    function onVacSelected(){
        alert("You Select " + vacName)
    }

    const [value, setValue] = useState<number | null>(0);

    return (
        <InteractiveCard contentName={vacName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}
                alt='Product Picture'
                fill={true}
                className='object-cover rounded-t-lg'
                />
            </div>
            <div className='w-full h-30 p-[10px] font-kanit'>{vacName}</div>
            <Rating name="simple-controlled" value={rating} onChange={(event, newValue) => {
                 event.stopPropagation();
                 setValue(newValue);
                onRatingUpdate(vacName, newValue ?? 0)}} className='my-1'/>
        </InteractiveCard>
    );
}