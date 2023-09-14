import Image from 'next/image'
import Banner from '@/components/Banner'
import styles from './page.module.css'
import ProductCard from '@/components/ProductCard'
import CardPanel from '@/components/CardPanel'

export default function Home() {
  return (
    <main>
      <link rel="stylesheet" 
      href="https://fonts.googleapis.com/css2?family=Kanit:wght@200;300;400;500;600;700;800&display=swap"/>
      <Banner/>
      <CardPanel/>
    </main>
  )
}
