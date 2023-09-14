import Image from 'next/image';
import InteractiveCard from './InteractiveCard';

export default function ProductCard({vacName,imgSrc}:{vacName:string, imgSrc:string}) {

    function onVacSelected(){
        alert("You Select " + vacName)
    }

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
        </InteractiveCard>
    );
}