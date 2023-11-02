import Hospital from "@/db/models/Hospital";
import { dbConnect } from "@/db/dbConnect";
import { revalidatePath, revalidateTag } from "next/cache";

export default async function AddHospitalForm() {
  const addHospital = async (addHospitalForm: FormData) => {
    "use server";
    const name = addHospitalForm.get("name");
    const address = addHospitalForm.get("address");
    const district = addHospitalForm.get("district");
    const province = addHospitalForm.get("province");
    const postalCode = addHospitalForm.get("postalCode");
    const tel = addHospitalForm.get("tel");
    const picture = addHospitalForm.get("picture");

    try {
      await dbConnect();
      const hospital = await Hospital.create({
        name: name,
        address: address,
        district: district,
        province: province,
        postalCode: postalCode,
        tel: tel,
        picture: picture,
      });
    } catch (error) {
      console.log(error);
    }
    revalidateTag("hospitals");
    revalidatePath("/hospital");
  };

  return (
    <form
      action={addHospital}
      className="max-w-lg mx-auto mt- p-4 bg-white rounded-lg shadow-md"
    >
      <div className="text-2xl font-semibold mb-4">Add Hospital</div>

      <div className="mb-4">
        <label className="block mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          required
          id="name"
          name="name"
          placeholder="Hospital Name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="address">
          Address
        </label>
        <input
          type="text"
          required
          id="address"
          name="address"
          placeholder="Address"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <div className="flex">
          <div className="w-1/2 mr-4">
            <label className="block mb-2" htmlFor="district">
              District
            </label>
            <input
              type="text"
              required
              id="district"
              name="district"
              placeholder="District"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="w-1/2">
            <label className="block mb-2" htmlFor="province">
              Province
            </label>
            <input
              type="text"
              required
              id="province"
              name="province"
              placeholder="Province"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex">
          <div className="w-1/2 mr-4">
            <label className="block mb-2" htmlFor="postalCode">
              Postal Code
            </label>
            <input
              type="text"
              required
              id="postalCode"
              name="postalCode"
              placeholder="Postal Code"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="w-1/2">
            <label className="block mb-2" htmlFor="tel">
              Tel
            </label>
            <input
              type="text"
              required
              id="tel"
              name="tel"
              placeholder="Telephone Number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="picture">
          Picture
        </label>
        <input
          type="text"
          required
          id="picture"
          name="picture"
          placeholder="URL"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
      >
        Add New Hospital
      </button>
    </form>
  );
}
