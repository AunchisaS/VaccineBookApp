"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { removeBooking } from "@/redux/features/bookSlice";

export default function MyBooking() {
  const bookingItem = useAppSelector((state) => state.bookSlice.bookingItem);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="p-4">
      {bookingItem ? (
        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
          <div className="mb-4">
            <div className="text-lg font-semibold">Booking Details</div>
            <div>First Name: {bookingItem?.firstName}</div>
            <div>Last Name: {bookingItem?.lastName}</div>
            <div>National ID: {bookingItem?.nationalId}</div>
            <div>Hospital: {bookingItem?.hospitalName}</div>
            <div>Date: {bookingItem?.bookingDate}</div>
          </div>
          <button
            className="bg-rose-600 text-white border border-rose-600 py-2 px-4 rounded hover:bg-rose-700 focus:outline-none"
            onClick={() => dispatch(removeBooking())}
          >
            Cancel Booking
          </button>
        </div>
      ) : (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">No Vaccine Booking</h3>
        </div>
      )}
    </div>
  );
}
