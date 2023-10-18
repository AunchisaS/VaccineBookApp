import Link from "next/link";
import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import Rating from "@mui/material/Rating";

export default function ProductCard({
  hospName,
  imgSrc,
  review,
  onReview,
  onRemove,
}: {
  hospName: string;
  imgSrc: string;
  review?: number;
  onReview?: Function;
  onRemove?: Function;
}) {
  return (
    <InteractiveCard>
      <div className="w-full h-[50%] relative rounded-t-lg">
        <Image
          src={imgSrc}
          alt="Product Picture"
          fill={true}
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="w-full h-[35%] p-4">
        <h4 className="text-xl font-semibold mb-2">{hospName}</h4>
      </div>
      <div className="w-full h-[10%] p-4">
        {onReview && onRemove ? (
          <Rating
            value={review}
            onClick={(e) => e.stopPropagation()}
            onChange={(e, newValue) => {
              if (newValue === null) {
                onRemove(hospName);
              } else {
                onReview(hospName, newValue);
              }
              e.preventDefault();
            }}
          />
        ) : (
          <></>
        )}
      </div>
    </InteractiveCard>
  );
}
