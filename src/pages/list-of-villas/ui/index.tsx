import React from "react"
import {Icon} from "@iconify/react"

//villa image
import villaImag from "../../../assets/villa-img.webp"

const ListOfVillas = () => {
  return (
    <div className="flex flex-col  mt-2 px-4 ">
      {/* header section*/}
      <div className="flex mt-10 items-center justify-center header-section h-[120px] border border-red-800">
        <span>header</span>
      </div>

      <div className="grid grid-cols-4 gap-4  px-2  ">
        {/*Card section*/}
        <div className="flex mt-4 h-full w-[290px] flex-col">
          <div className="flex image-sections h-[180px] w-[290px] ">
            <img src={villaImag} alt="villa" className="flex rounded-2xl" />
          </div>
          <div className="flex flex-row-reverse px-4 absolute mt-4 z-40 w-[298px] ">
            <Icon icon="ph:heart-bold" color="gray" width="24" height="24" />{" "}
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex address">
              <span className="flex flex-col text-sm font-medium">
                Karnataka, India
                <span className="flex text-gray-400">199 kilometes away</span>
                <span className="flex text-gray-400">20-25 Aug</span>
                <span className="flex price">
                  5,934 <span className="flex text-gray-400">night</span>
                </span>
              </span>
            </div>
            <div className="flex rating  h-4 items-center">
              <Icon icon="streamline:interface-favorite-star-reward-rating-rate-social-star-media-favorite-like-stars" width="12" height="12" />
              <span className="text-sm">4.93</span>
            </div>
          </div>
        </div>

        {/*Card section*/}
        <div className="flex mt-4 h-full w-[290px] flex-col">
          <div className="flex image-sections h-[180px] w-[290px] ">
            <img src={villaImag} alt="villa" className="flex rounded-2xl" />
          </div>
          <div className="flex flex-row-reverse px-4 absolute mt-4 z-40 w-[298px] ">
            <Icon icon="ph:heart-bold" color="gray" width="24" height="24" />{" "}
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex address">
              <span className="flex flex-col text-sm font-medium">
                Karnataka, India
                <span className="flex text-gray-400">199 kilometes away</span>
                <span className="flex text-gray-400">20-25 Aug</span>
                <span className="flex price">
                  5,934 <span className="flex text-gray-400">night</span>
                </span>
              </span>
            </div>
            <div className="flex rating  h-4 items-center">
              <Icon icon="streamline:interface-favorite-star-reward-rating-rate-social-star-media-favorite-like-stars" width="12" height="12" />
              <span className="text-sm">4.93</span>
            </div>
          </div>
        </div>
        {/*Card section*/}
        <div className="flex mt-4 h-full w-[290px] flex-col">
          <div className="flex image-sections h-[180px] w-[290px] ">
            <img src={villaImag} alt="villa" className="flex rounded-2xl" />
          </div>
          <div className="flex flex-row-reverse px-4 absolute mt-4 z-40 w-[298px] ">
            <Icon icon="ph:heart-bold" color="gray" width="24" height="24" />{" "}
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex address">
              <span className="flex flex-col text-sm font-medium">
                Karnataka, India
                <span className="flex text-gray-400">199 kilometes away</span>
                <span className="flex text-gray-400">20-25 Aug</span>
                <span className="flex price">
                  5,934 <span className="flex text-gray-400">night</span>
                </span>
              </span>
            </div>
            <div className="flex rating  h-4 items-center">
              <Icon icon="streamline:interface-favorite-star-reward-rating-rate-social-star-media-favorite-like-stars" width="12" height="12" />
              <span className="text-sm">4.93</span>
            </div>
          </div>
        </div>
        {/*Card section*/}
        <div className="flex mt-4 h-full w-[290px] flex-col">
          <div className="flex image-sections h-[180px] w-[290px] ">
            <img src={villaImag} alt="villa" className="flex rounded-2xl" />
          </div>
          <div className="flex flex-row-reverse px-4 absolute mt-4 z-40 w-[298px] ">
            <Icon icon="ph:heart-bold" color="gray" width="24" height="24" />{" "}
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex address">
              <span className="flex flex-col text-sm font-medium">
                Karnataka, India
                <span className="flex text-gray-400">199 kilometes away</span>
                <span className="flex text-gray-400">20-25 Aug</span>
                <span className="flex price">
                  5,934 <span className="flex text-gray-400">night</span>
                </span>
              </span>
            </div>
            <div className="flex rating  h-4 items-center">
              <Icon icon="streamline:interface-favorite-star-reward-rating-rate-social-star-media-favorite-like-stars" width="12" height="12" />
              <span className="text-sm">4.93</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListOfVillas
