import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import ProductCard from '@/components/ProductCard'
export default function Home() {
  return (
    <main>
      <Banner/>
      <div className="text-center text-3xl font-semibold my-10">
          Hospital List
      </div>
        <div className="container mx-auto my-10 flex flex-wrap justify-center space-x-20" >

        <ProductCard 
          hospName='Chulalongkorn Hospital'
          hospLoc='Pathumwan, Bangkok'
          hospTel='02-649-4000'
          hospLink='https://chulalongkornhospital.go.th/kcmh/' 
          imgSrc='/img/chula.jpg'/>
        
        <ProductCard 
          hospName='Rajavithi Hospital Hospital'
          hospLoc='Ratchathewi, Bangkok'
          hospTel='02-206-2900'
          hospLink='https://www.rajavithi.go.th/' 
          imgSrc='/img/rajavithi.jpg'/>

        <ProductCard 
          hospName='Thammasat University Hospital'
          hospLoc='Khlongluang, Pathumthani'
          hospTel='02-926-9999'
          hospLink='https://www.hospital.tu.ac.th/' 
          imgSrc='/img/thammasat.jpg'/>

      </div>
    </main>
  )
}
