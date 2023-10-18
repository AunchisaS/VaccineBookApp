import Image from "next/image";
import getHospital from "@/libs/getHospital";

export default async function HospitalDetailPage({
  params,
}: {
  params: { hid: string };
}) {
  // //Data
  // const mockHospital = new Map();
  // mockHospital.set("001", {
  //   name: "Chulalongkorn Hospital",
  //   image: "/img/chula.jpg",
  // });
  // mockHospital.set("002", {
  //   name: "Rajavithi Hospital",
  //   image: "/img/rajavithi.jpg",
  // });
  // mockHospital.set("003", {
  //   name: "Thammasat University Hospital",
  //   image: "/img/thammasat.jpg",
  // });
  const hospitalDetails = await getHospital(params.hid);

  return (
    <div className="text-center p-5">
      <div className="flex flex-row my-5">
        <Image
          src={hospitalDetails.data.picture}
          alt="Hospital Picture"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg w-[30%]"
        />
        <div className="mx-5 text-left">
          <h1 className="text-xl font-medium my-5">
            {hospitalDetails.data.name}{" "}
          </h1>
          <div className="text-md mx-5">
            <h2>Address: {hospitalDetails.data.address}</h2>
            <h2>District: {hospitalDetails.data.district}</h2>
            <h2>Province: {hospitalDetails.data.province}</h2>
            <h2>Postal Code: {hospitalDetails.data.postalcode}</h2>
            <h2>Tel: {hospitalDetails.data.tel}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
