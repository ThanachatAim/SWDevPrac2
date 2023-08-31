import styles from './banner.module.css'
import Image from 'next/image';

export default function Banner() {
    return(
        <div className="block p-5 m-0 w-full h-96 relative">
            <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
            <Image src={'/img/cover.jpg'}
            alt='cover'
            fill={true}
            priority
            objectFit='cover'/>
            <div className='relative top-20 z-20 text-center'>
                <h1 className='text-6xl font-bold font-sans bg-slate-200 inline p-3 rounded-2xl border-dashed'>Vaccine Center</h1><br></br><br></br>
                <h3 className='text-4xl font-medium font-kanit bg-slate-200 inline p-3 rounded-2xl border-dashed'>ศูนย์บริการวัคซีน</h3>
            </div>
        </div>
    );
}