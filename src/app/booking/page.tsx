import FormBookReservation from "@/components/FormBookReservation";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Booking() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) {
    return null;
  }
  const profile = await getUserProfile(session?.user.token);

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      {session ? (
        <>
          <div className="w-fit space-y-1 p-2">
            <div className="text-2xl mt-4 font-medium item-center">
              User Information
            </div>
            <div> Name: {profile.data.name} </div>
            <div> Email: {profile.data.email} </div>
            <div> Tel.: {profile.data.tel} </div>
            <div>
              Member Since:{" "}
              {new Date(profile.data.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </div>
          </div>
        </>
      ) : null}

      <div className="text-2xl mt-4 font-medium ">New Booking</div>
      <div className="w-fit space-y-1 items-center">
        <FormBookReservation />
      </div>
    </main>
  );
}
