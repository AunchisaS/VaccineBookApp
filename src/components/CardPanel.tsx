"use client";
import { useReducer, useState } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function CardPanel() {
  //Data
  const mockHospital = [
    { hid: "001", name: "Chulalongkorn Hospital", image: "/img/chula.jpg" },
    { hid: "002", name: "Rajavithi Hospital", image: "/img/rajavithi.jpg" },
    {
      hid: "003",
      name: "Thammasat University Hospital",
      image: "/img/thammasat.jpg",
    },
  ];

  const ratingReducer = (
    ratingMap: Map<string, number>,
    action: { type: string; payload: { hospName: string; rating: number } }
  ) => {
    switch (action.type) {
      case "set": {
        return new Map(
          ratingMap.set(action.payload.hospName, action.payload.rating)
        );
      }
      case "remove": {
        ratingMap.delete(action.payload.hospName);
        return new Map(ratingMap);
      }
      default:
        return ratingMap;
    }
  };

  const [rating, dispatchRating] = useReducer(ratingReducer, new Map());

  const onSetRating = (hospital: string, rating: number) =>
    dispatchRating({
      type: "set",
      payload: {
        hospName: hospital,
        rating: rating,
      },
    });
  const onRemove = (hospital: string) =>
    dispatchRating({
      type: "remove",
      payload: {
        hospName: hospital,
        rating: 0,
      },
    });
  return (
    <div>
      <div className="text-center text-3xl font-semibold my-10">
        Hospital List
      </div>
      <div className="container mx-auto my-10 flex flex-wrap justify-center gap-8">
        {mockHospital.map((hospital) => (
          <Link
            href={`/hospital/${hospital.hid}`}
            className="w-full md:w-1/2 lg:w-1/4 px-4"
          >
            <ProductCard
              hospName={hospital.name}
              imgSrc={hospital.image}
              review={
                rating.has(hospital.name) ? rating.get(hospital.name)! : 0
              }
              onReview={onSetRating}
              onRemove={onRemove}
            />
          </Link>
        ))}
      </div>

      <div className="my-8">
        {Array.from(rating).map(([name, rating]) => {
          return (
            <div
              className="bg-white p-4 shadow-md rounded-md mb-2 cursor-pointer"
              key={name}
              onClick={() => onRemove(name)}
            >
              <h1 className="text-lg font-semibold">{name}</h1>
              <p className="text-gray-600">Rating: {rating}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
