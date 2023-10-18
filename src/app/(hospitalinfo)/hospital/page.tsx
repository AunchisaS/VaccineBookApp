import HospitalCatalog from "@/components/HospitalCatalog";
import getHospital from "@/libs/getHospital";
import getHospitals from "@/libs/getHospitals";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";
export default function Hospital() {
  const hospitals = getHospitals();
  return (
    <main className="">
      <h1 className="text-2xl font-semibold p-2 mb-4">Hospital Catalog</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <Suspense
          fallback={
            <div className="flex flex-col items-center justify-center h-40">
              <p className="text-gray-600 mb-2">Loading...</p>
              <LinearProgress />
            </div>
          }
        >
          <HospitalCatalog hospitalJson={hospitals} />
        </Suspense>
      </div>
    </main>
  );
}
