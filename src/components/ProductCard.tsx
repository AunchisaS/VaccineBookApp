import Link from 'next/link';
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import Rating from '@mui/material/Rating';


export default function ProductCard({ hospName, hospLoc, hospTel, hospLink, imgSrc,review,onReview }
    : { hospName: string, hospLoc: string, hospTel: string, hospLink: string, imgSrc: string, review :number,onReview:Function }) {
    
    
    return (
        <InteractiveCard>
            <div className="w-full h-[50%] relative rounded-t-lg">
                <Image
                    src={imgSrc}
                    alt='Product Picture'
                    fill ={true}
                    className="object-cover rounded-t-lg"
                />
            </div>
            <div className="w-full h-[35%] p-4">
                <h4 className="text-xl font-semibold mb-2">{hospName}</h4>
                <p className="text-gray-600">{hospLoc}</p>
                <p className="text-gray-600">Tel: {hospTel}</p>
                <div className="mt-2">
                    <Link href={hospLink} className="text-blue-600 hover:underline">รายละเอียดเพิ่มเติม</Link>
                </div>
            </div>
            <div className='w-full h-[10%] p-4'>
                <Rating name="no-value" value={review} 
                onChange={(e,newValue)=>{
                    e.stopPropagation();
                    onReview(hospName,newValue)
                }} />

            </div>
        </InteractiveCard>
    );
}
