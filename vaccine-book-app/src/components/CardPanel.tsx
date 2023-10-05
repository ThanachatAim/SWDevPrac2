'use client'
import {useReducer} from 'react'
import ProductCard from "./ProductCard"
import Link from 'next/link'

export default function CardPanel() {

    const ratingReducer = ( ratingMap:Map<string,number | null>, action:{type:string, vacName:string, rating:number | null})=>{
        switch(action.type){
            case 'add': {
                return new Map(ratingMap.set(action.vacName, action.rating))
            }
            case 'remove' : {
                ratingMap.delete(action.vacName)
                return new Map(ratingMap)
            }
            default: return ratingMap
        }
    }

    const [ratingMap, dispatchRating] = useReducer(ratingReducer, new Map<string,number>())
    
    const mockHospitalRepo = [
        {hid: '001', name: 'Chulalongkorn Hospital', image: "/img/chula.jpg"},
        {hid: '002', name: 'Rajavithi Hospital', image: "/img/rajavithi.jpg"},
        {hid: '003', name: 'Thammasat University Hospital', image: "/img/thammasat.jpg"},
    ]

    return (
        <div>
            <div className="m-10 flex flex-row flex-wrap justify-around items-around">
                                
            {mockHospitalRepo.map((vacItem)=>(
                    <Link href={`/hospital/${vacItem.hid}`} className='w-1/5'>
                    <ProductCard vacName={vacItem.name} imgSrc={vacItem.image}
                    onRatingUpdate={(vac:string, rating: number)=>dispatchRating({type:'add', vacName:vac, rating:rating})} 
                    rating={ratingMap.get(vacItem.name) ?? 0}/>
                    </Link>
                ))}
            </div>
            <div className='w-full text-xl font-medium mx-2'>Rating List:{ratingMap.size}</div>
            {Array.from(ratingMap.entries()).map( ([vac,rating])=><div key={vac} 
                onClick={()=>dispatchRating({type:'remove',vacName:vac, rating:rating})} className='mx-2'>
                {vac}: Rating = {rating}</div>)}
        </div>
    )
}