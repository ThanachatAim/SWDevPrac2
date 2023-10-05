'use client'
import {useState} from 'react';
import { useRouter } from 'next/navigation';
import styles from './banner.module.css'
import Image from 'next/image';

export default function Banner() {
    const covers = ['/img/cover.jpg','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg']
    const [index, setIndex] = useState(0)
    const router = useRouter()

    return(
        <div className="block p-5 m-0 w-full h-96 relative" onClick={()=>{setIndex(index+1)}}>
            <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
            <Image src={covers[index%4]}
            alt='cover'
            fill={true}
            priority
            objectFit='cover'/>
            <div className='relative top-20 z-20 text-center'>
                <h1 className='text-6xl font-bold font-sans bg-slate-200 inline p-3 rounded-2xl border-dashed'>Vaccine Center</h1><br></br><br></br>
                <h3 className='text-4xl font-medium font-kanit bg-slate-200 inline p-3 rounded-2xl border-dashed'>ศูนย์บริการวัคซีน</h3>
            </div>
            <button className='bg-white text-cyan-600 border border-cyan-600
            font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
            hover:bg-cyan-600 hover:text-white hover:border-transparent'
            onClick={(e)=>{ e.stopPropagation(); router.push('/hospital')}}>
                Select Vaccine Center
            </button>
        </div>
    );
}