import Image from "next/image";

export default function HospitalDetailPage({
  params,
}: {
  params: { hid: string };
}) {
  //Data
  const mockHospital = new Map();
  mockHospital.set("001", {
    name: "Chulalongkorn Hospital",
    image: "/img/chula.jpg",
  });
  mockHospital.set("002", {
    name: "Rajavithi Hospital",
    image: "/img/rajavithi.jpg",
  });
  mockHospital.set("003", {
    name: "Thammasat University Hospital",
    image: "/img/thammasat.jpg",
  });

  return (
    <div className="text-center p-5">
      <div className="flex flex-row my-5">
        <Image
          src={mockHospital.get(params.hid).image}
          alt="Hospital Picture"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg w-[30%]"
        />
        <div className="text-md mx-5">{mockHospital.get(params.hid).name}</div>
      </div>
    </div>
  );
}
