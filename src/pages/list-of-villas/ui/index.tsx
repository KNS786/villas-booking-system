import React from "react"
import {Icon} from "@iconify/react"

//villa image
import villaImag from "../../../assets/villa-img.webp"

const ListOfVillas = () => {
  const listOfVillas = [
    {
      location: "Srirangaptna,India",
      rating: "4.0",
      price: "3,309",
      type: "night",
      distance: "116 kilometers away",
      available: "19-24 Sep",
      propertyImages: ["img1", "img2", "img3", "img4", "img5"]
    },
    {
      location: "Srirangaptna,India",
      rating: "4.0",
      price: "3,309",
      type: "night",
      distance: "116 kilometers away",
      available: "19-24 Sep",
      propertyImages: ["img1", "img2", "img3", "img4", "img5"]
    },
    {
      location: "Srirangaptna,India",
      rating: "4.0",
      price: "3,309",
      type: "night",
      distance: "116 kilometers away",
      available: "19-24 Sep",
      propertyImages: ["img1", "img2", "img3", "img4", "img5"]
    },
    {
      location: "Srirangaptna,India",
      rating: "4.0",
      price: "3,309",
      type: "night",
      distance: "116 kilometers away",
      available: "19-24 Sep",
      propertyImages: ["img1", "img2", "img3", "img4", "img5"]
    },
    {
      location: "Srirangaptna,India",
      rating: "4.0",
      price: "3,309",
      type: "night",
      distance: "116 kilometers away",
      available: "19-24 Sep",
      propertyImages: ["img1", "img2", "img3", "img4", "img5"]
    },
    {
      location: "Srirangaptna,India",
      rating: "4.0",
      price: "3,309",
      type: "night",
      distance: "116 kilometers away",
      available: "19-24 Sep",
      propertyImages: ["img1", "img2", "img3", "img4", "img5"]
    },
    {
      location: "Srirangaptna,India",
      rating: "4.0",
      price: "3,309",
      type: "night",
      distance: "116 kilometers away",
      available: "19-24 Sep",
      propertyImages: ["img1", "img2", "img3", "img4", "img5"]
    },
    {
      location: "Srirangaptna,India",
      rating: "4.0",
      price: "3,309",
      type: "night",
      distance: "116 kilometers away",
      available: "19-24 Sep",
      propertyImages: ["img1", "img2", "img3", "img4", "img5"]
    },
    {
      location: "Srirangaptna,India",
      rating: "4.0",
      price: "3,309",
      type: "night",
      distance: "116 kilometers away",
      available: "19-24 Sep",
      propertyImages: ["img1", "img2", "img3", "img4", "img5"]
    },
    {
      location: "Srirangaptna,India",
      rating: "4.0",
      price: "3,309",
      type: "night",
      distance: "116 kilometers away",
      available: "19-24 Sep",
      propertyImages: ["img1", "img2", "img3", "img4", "img5"]
    },
    {
      location: "Srirangaptna,India",
      rating: "4.0",
      price: "3,309",
      type: "night",
      distance: "116 kilometers away",
      available: "19-24 Sep",
      propertyImages: ["img1", "img2", "img3", "img4", "img5"]
    },
    {
      location: "Srirangaptna,India",
      rating: "4.0",
      price: "3,309",
      type: "night",
      distance: "116 kilometers away",
      available: "19-24 Sep",
      propertyImages: ["img1", "img2", "img3", "img4", "img5"]
    }
  ]

  const VillaCard: React.FC = ({location, distance, rating, available, price, type, propertyImages}: any) => {
    return (
      <div className="flex mt-4 h-full w-[290px] flex-col">
        {propertyImages.length && propertyImages[0] && (
          <div className="flex image-sections h-[180px] w-[290px] ">
            <img src={villaImag} alt="villa" className="flex rounded-2xl" />
          </div>
        )}

        <div className="flex flex-row-reverse px-4 absolute mt-4 z-40 w-[298px] ">
          <Icon icon="ph:heart-bold" color="gray" width="24" height="24" />{" "}
        </div>
        <div className="flex justify-between mt-2">
          <div className="flex address">
            <span className="flex flex-col text-sm font-medium">
              {location}
              <span className="flex text-gray-400">{distance}</span>
              <span className="flex text-gray-400">{available}</span>
              <span className="flex price">
                {price} <span className="flex text-gray-400">{type}</span>
              </span>
            </span>
          </div>
          <div className="flex rating  h-4 items-center">
            <Icon icon="streamline:interface-favorite-star-reward-rating-rate-social-star-media-favorite-like-stars" width="12" height="12" />
            <span className="text-sm">{rating}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col  mt-2 px-4 ">
      {/* header section*/}
      <div className="flex mt-10 items-center justify-center header-section h-[120px] border border-red-800">
        <span>header</span>
      </div>

      <div className="grid grid-cols-4 gap-4  px-2  ">
        {listOfVillas.map((value: any, index: number) => (
          <VillaCard key={index} {...value} />
        ))}
      </div>
    </div>
  )
}

export default ListOfVillas
