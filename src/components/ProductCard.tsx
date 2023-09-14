import Link from 'next/link';
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
export default function ProductCard({ hospName, hospLoc, hospTel, hospLink, imgSrc }: { hospName: string, hospLoc: string, hospTel: string, hospLink: string, imgSrc: string }) {
    return (
        <InteractiveCard>
            <div className="w-full h-[60%] relative rounded-t-lg">
                <Image
                    src={imgSrc}
                    alt='Product Picture'
                    fill ={true}
                    className="object-cover rounded-t-lg"
                />
            </div>
            <div className="w-full h-[40%] p-4">
                <h4 className="text-xl font-semibold mb-2">{hospName}</h4>
                <p className="text-gray-600">{hospLoc}</p>
                <p className="text-gray-600">Tel: {hospTel}</p>
                <div className="mt-2">
                    <Link href={hospLink} className="text-blue-600 hover:underline">รายละเอียดเพิ่มเติม</Link>
                </div>
            </div>
        </InteractiveCard>
    );
}
