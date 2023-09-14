"use client";
import { useReducer, useState } from "react";
import ProductCard from "./ProductCard";
export default function CardPanel() {
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
      <div className="container mx-auto my-10 flex flex-wrap justify-center space-x-20">
        <ProductCard
          hospName="Chulalongkorn Hospital"
          hospLoc="Pathumwan, Bangkok"
          hospTel="02-649-4000"
          hospLink="https://chulalongkornhospital.go.th/kcmh/"
          imgSrc="/img/chula.jpg"
          review={rating.get("Chulalongkorn Hospital") || 0}
          onReview={onSetRating}
        />

        <ProductCard
          hospName="Rajavithi Hospital Hospital"
          hospLoc="Ratchathewi, Bangkok"
          hospTel="02-206-2900"
          hospLink="https://www.rajavithi.go.th/"
          imgSrc="/img/rajavithi.jpg"
          review={rating.get("Rajavithi Hospital Hospital") || 0}
          onReview={onSetRating}
        />

        <ProductCard
          hospName="Thammasat University Hospital"
          hospLoc="Khlongluang, Pathumthani"
          hospTel="02-926-9999"
          hospLink="https://www.hospital.tu.ac.th/"
          imgSrc="/img/thammasat.jpg"
          review={rating.get("Thammasat University Hospital") || 0}
          onReview={onSetRating}
        />
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
