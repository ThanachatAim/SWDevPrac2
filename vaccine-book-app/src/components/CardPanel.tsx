'use client'
import {useReducer} from 'react'
import ProductCard from "./ProductCard"

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
    
    return (
        <div>
            <div className="m-10 flex flex-row flex-wrap justify-around items-around">
                <ProductCard vacName='Chulalongkorn Hospital' imgSrc='/img/chula.jpg'
                onRatingUpdate={(vac:string, rating: number)=>dispatchRating({type:'add', vacName:vac, rating:rating})} 
                rating={ratingMap.get("Chulalongkorn Hospital") ?? 0}/>
                <ProductCard vacName='Rajavithi Hospital' imgSrc='/img/rajavithi.jpg'
                onRatingUpdate={(vac:string, rating: number)=>dispatchRating({type:'add', vacName:vac, rating:rating})} 
                rating={ratingMap.get("Rajavithi Hospital") ?? 0}/>
                <ProductCard vacName='Thammasat University Hospital' imgSrc='/img/thammasat.jpg'
                onRatingUpdate={(vac:string, rating: number)=>dispatchRating({type:'add', vacName:vac, rating:rating})} 
                rating={ratingMap.get("Thammasat University Hospital") ?? 0}/>
            </div>
            <div className='w-full text-xl font-medium mx-2'>Rating List:{ratingMap.size}</div>
            {Array.from(ratingMap.entries()).map( ([vac,rating])=><div key={vac} 
                onClick={()=>dispatchRating({type:'remove',vacName:vac, rating:rating})} className='mx-2'>
                {vac}: Rating = {rating}</div>)}
        </div>
    )
}