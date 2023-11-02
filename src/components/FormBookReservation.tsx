"use client";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";
import { BookingItem } from "../../interfaces";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import Link from "next/link";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  TextField,
} from "@mui/material";

export default function FormBookReservation() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [nationalId, setNationalId] = useState<string>("");
  const [hospitalName, setHospitalName] = useState<string>("");
  const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  const makeBooking = () => {
    if (firstName && lastName && nationalId && hospitalName && bookingDate) {
      const item: BookingItem = {
        firstName: firstName,
        lastName: lastName,
        nationalId: nationalId,
        hospitalName: hospitalName,
        bookingDate: dayjs(bookingDate).format("DD/MM/YYYY"),
      };
      dispatch(addBooking(item));
    }
  };

  return (
    // name-surname
    <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-3">
        <label
          htmlFor="first-name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          First name
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="first-name"
            id="first-name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            autoComplete="given-name"
            className="block min-h-[3rem] w-full px-3 py-2 rounded-md border border-gray-300 placeholder-gray-400 
            focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-3">
        <label
          htmlFor="last-name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Last name
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="last-name"
            id="last-name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            autoComplete="family-name"
            className="block min-h-[3rem] w-full px-3 py-2 rounded-md border border-gray-300 placeholder-gray-400 
            focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      {/* ID Number */}
      <div className="sm:col-span-4">
        <label
          htmlFor="National ID"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          National ID
        </label>
        <div className="mt-2">
          <input
            id="IDNumber"
            name="IDnumber"
            type="string"
            value={nationalId}
            onChange={(e) => {
              setNationalId(e.target.value);
            }}
            className="block min-h-[3rem] w-full px-3 py-2 rounded-md border border-gray-300 placeholder-gray-400 
            focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-4">
        <label
          htmlFor="hospital"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Hospital
        </label>
        <div className="mt-1 ">
          <FormControl fullWidth>
            <InputLabel id="location-label" className="sr-only">
              Hospital
            </InputLabel>
            <Select
              name="location"
              labelId="location-label"
              id="location"
              value={hospitalName}
              onChange={(e) => {
                setHospitalName(e.target.value);
              }}
              inputProps={{ "aria-label": "Hospital" }}
              variant="outlined"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
              focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
            >
              <MenuItem value="CU">Chulalongkorn Hospital</MenuItem>
              <MenuItem value="RJ">Rajavithi Hospital</MenuItem>
              <MenuItem value="TU">Thammasat University Hospital</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      {/* Date Picker */}
      <div className="sm:col-span-6">
        <label
          htmlFor="Date"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Date
        </label>
        <div className="mt-1">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={bookingDate}
              onChange={(value) => setBookingDate(value)}
              className="bg-white rounded-md border border-gray-300 
                focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm sm:leading-8"
            />
          </LocalizationProvider>
        </div>
      </div>

      <button
        type="submit"
        onClick={makeBooking}
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Submit
      </button>
    </div>
  );
}
