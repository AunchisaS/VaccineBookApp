import { useReducer } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default async function HospitalCatalog({
  hospitalJson,
}: {
  hospitalJson: Object;
}) {
  const hospitalJsonReady = await hospitalJson;
  //   console.log("test", hospitalJsonReady);
  return (
    <div className="w-full">
      <div className="mx-auto flex flex-row content-around justify-center flex-wrap">
        {hospitalJsonReady.data.map((hospitalItem: Object) => (
          <Link href={`/hospital/${hospitalItem.id}`} className="w-1/3 m-10">
            <ProductCard
              hospName={hospitalItem.name}
              imgSrc={hospitalItem.picture}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
