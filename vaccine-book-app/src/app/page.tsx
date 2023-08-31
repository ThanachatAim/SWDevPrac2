import Image from 'next/image'
import Banner from '@/components/Banner'
import styles from './page.module.css'
import ProductCard from '@/components/ProductCard'

export default function Home() {
  return (
    <main>
      <link rel="stylesheet" 
      href="https://fonts.googleapis.com/css2?family=Kanit:wght@200;300;400;500;600;700;800&display=swap"/>
      <Banner/>
      <div className="m-10 flex flex-row flex-wrap justify-around items-around">
        <ProductCard vacName='Chulalongkorn Hospital' imgSrc='/img/chula.jpg'/>
        <ProductCard vacName='Rajavithi Hospital' imgSrc='/img/rajavithi.jpg'/>
        <ProductCard vacName='Thammasat University Hospital' imgSrc='/img/thammasat.jpg'/>
      </div>
    </main>
  )
}
