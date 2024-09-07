"use client";

import Container from './Container';
import CategoryBox from "./CategoryBox";
import {
  GiTreehouse,
  GiCaveEntrance,
  GiForestCamp,
  GiBunkBeds,
  GiWindmill,
  GiWoodenDoor,
  GiFamilyHouse,
} from "react-icons/gi"
import { BsFillHouseDoorFill } from "react-icons/bs"
import { IoDiamond } from "react-icons/io5"
import { MdOutlineVilla, MdOutlineApartment, MdCottage, MdHouseboat, MdOutlineBed } from "react-icons/md"
import { RiHotelLine } from "react-icons/ri"
import { FaHotel } from "react-icons/fa"
import { IoHomeSharp } from "react-icons/io5"

export const categories = [
  { label: "Apartments", icon: MdOutlineApartment, description: "This property is Apartments!" },
  { label: "Glamping", icon: GiWindmill, description: "This property has Glamping!" },
  { label: "Cottages", icon: MdCottage, description: "This property has Cottages!" },
  { label: "Motels/Hostel", icon: RiHotelLine, description: "This property is in the Motels/Hostel!" },
  { label: "Wooden Houses", icon: GiWoodenDoor, description: "This is property has a beautiful Wooden Houses!" },
  { label: "GuestHouses", icon: GiFamilyHouse, description: "This is property has a beautiful GuestHouses!" },
  { label: "Secluded Accommodation", icon: BsFillHouseDoorFill, description: "This property is in the Secluded Accommodation!" },
  { label: "Hotels", icon: FaHotel, description: "This is beautiful Hotels!" },
  { label: "Dormitories", icon: GiBunkBeds, description: "This property is an Dormitories!" },
  { label: "Caves", icon: GiCaveEntrance, description: "This property is in a spooky cave!" },
  { label: "Campsites", icon: GiForestCamp, description: "This property offers camping activities!" },
  { label: "Treehouses", icon: GiTreehouse, description: "This property is in Treehouses!" },
  { label: "Houseboats", icon: MdHouseboat, description: "This property is in the Houseboats!" },
  { label: "Rooms", icon: MdOutlineBed, description: "This property is in a Rooms!" },
  { label: "Entire Homes", icon: IoHomeSharp, description: "This property is in Entire Homes!" },
  { label: "Luxury Accommodation", icon: IoDiamond, description: "This property is brand new and luxurious!" },
];

const Categories = () => {
  return (
    <Container>
      <div className='pt-4 flex flex-row items-center justify-center overflow-x-auto bg-[#F7F7F7]'>
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
