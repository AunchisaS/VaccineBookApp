import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ hospName, hospLoc, hospTel, hospLink, imgSrc }: { hospName: string, hospLoc: string, hospTel: string, hospLink: string, imgSrc: string }) {
    return (
        <div className="w-1/4 h-[360px] rounded-lg shadow-lg overflow-hidden">
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
        </div>
    );
}
