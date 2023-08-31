import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import Link from 'next/link';
export default function TopMenu(){
    return(
    <div className='bg-gray-900 text-white hover:text-gray-300 py-4 px-6 flex justify-end items-center'>
            <div className='flex flex-col items-end px-4'>
                <TopMenuItem title='Booking' pageRef='/booking' />
            </div>
            <div className=''>
                <Link href='/'>
                    <Image src={'/img/logo.png'} alt = 'logo'
                    width={30} height={0} sizes='100vh'/>
                </Link>
            </div>
    </div>
    );
}