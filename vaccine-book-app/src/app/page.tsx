import Image from 'next/image'
import Banner from '@/components/Banner'
import styles from './page.module.css'
import ProductCard from '@/components/ProductCard'
import ProductCard2 from '@/components/ProductCard2'
import ProductCard3 from '@/components/ProductCard3'
import ProductCard4 from '@/components/ProductCard4'

export default function Home() {
  return (
    <main>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Kanit:wght@200;300;400;500;600;700;800&display=swap"/>
      <Banner/>
      <div style={{margin:"20px", display:"flex", flexDirection:"row",
      flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
        <ProductCard/>
        <ProductCard2/>
        <ProductCard3/>
        <ProductCard4/>
      </div>
    </main>
  )
}
