import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import ProductCard from '@/components/ProductCard'
export default function Home() {
  return (
    <main>
      <Banner/>
      <div style = {{margin:"40px",display:'flex',flexDirection:'row',flexWrap:'wrap',
                    justifyContent:"space-around",alignContent:"space-around"}}>
        <ProductCard/>
      </div>
    </main>
  )
}
