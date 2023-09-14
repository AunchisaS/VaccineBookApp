import FormBookReservation from "@/components/FormBookReservation";

export default function Booking(){
    return(
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-2xl mt-4 font-medium ">New Booking</div>
            <div className="w-fit space-y-1">
                <FormBookReservation/>
            </div>
        </main>
    );
}