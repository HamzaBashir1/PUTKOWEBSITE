"use client";
import React, { useState, useEffect, useContext } from "react";
import { FaHourglassHalf, FaStar } from "react-icons/fa";
import { BiFilter, BiPlus } from "react-icons/bi";
import { BsArrowDown, BsPersonCircle } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { AuthContext } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import ChatUI from "./ChatUI";
import { Base_URL } from "@/app/config";

const News = ({ data }) => {
  const { user } = useContext(AuthContext);
  const [showPopup, setShowPopup] = useState(false);
  const [receivers, setReceivers] = useState([]); // Store receivers if user is sender
  const [senders, setSenders] = useState([]); // Store senders if user is receiver
  const [selectedUser, setSelectedUser] = useState(null); // Track the selected user for popup
  const router = useRouter();

  // Fetch all receivers if the user is a sender
  useEffect(() => {
    const fetchReceivers = async () => {
      try {
        const response = await fetch(`${Base_URL}/receivers/${user?._id}`);
        const data = await response.json();
        console.log("recevier", data)
        if (response.ok) {
          setReceivers(data.receivers); // Store the receivers data if user is sender
        } else {
          console.error("Failed to fetch receivers:", data.message);
        }
      } catch (error) {
        console.error("Error fetching receivers:", error);
      }
    };

    if (user) {
      fetchReceivers();
    }
  }, [user]);

  // Fetch all senders if the user is a receiver
  useEffect(() => {
    const fetchSenders = async () => {
      try {
        const response = await fetch(`${Base_URL}/senders/${user?._id}`);
        const data = await response.json();
        console.log("sender",data)
        if (response.ok) {
          setSenders(data.senders); // Store the senders data if user is receiver
        } else {
          console.error("Failed to fetch senders:", data.message);
        }
      } catch (error) {
        console.error("Error fetching senders:", error);
      }
    };

    if (user) {
      fetchSenders();
    }
  }, [user]);

  // Toggle the popup for chat
  const togglePopup = (selectedUser) => {
    setSelectedUser(selectedUser);
    setShowPopup(!showPopup);
  };

  // Handle navigation to chat for a specific user
  const viewMessages = (userId) => {
    router.push(`/chat/${userId}`); // Navigate to chat page with userId
  };

  return (
    <>
      <div className="p-4 mb-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col gap-4 mb-4 md:flex-row md:justify-between">
          {/* Left Section: Title and Status */}
          <div className="flex flex-col">
            <h1 className="text-[#292A34] font-bold text-xl md:text-2xl">News</h1>
            <p className="text-[#292A34B2] text-sm md:text-xs font-medium">
              {receivers.length > 0 || senders.length > 0
                ? `${receivers.length + senders.length} messages`
                : "No messages"}
            </p>
          </div>

          {/* Right Section: Add Accommodation Button */}
          <div className="hidden gap-4 cursor-pointer md:flex md:flex-row md:items-center">
            <CiSearch className="text-xl text-gray-500" />
            <button className="flex items-center px-4 py-2 space-x-2 text-black bg-white border border-gray-300 rounded-lg hover:bg-gray-100">
              <BiPlus className="text-lg" />
              <span>Add Accommodation</span>
            </button>
            <div className="flex items-center gap-2">
              {user?.photo ? (
                <img
                  src={user?.photo}
                  alt="User Profile"
                  className="object-cover w-8 h-8 rounded-full"
                />
              ) : (
                <BsPersonCircle className="text-[#292A34] text-xl" />
              )}
              <h1 className="text-[#292A34] text-sm">{user?.name || "User"}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col items-center justify-between mb-5 sm:flex-row">
        <div className="flex flex-row items-center gap-5">
          <button className="flex items-center px-6 py-2 text-gray-600 bg-white rounded-md shadow hover:bg-gray-300">
            <BiFilter className="text-lg" />
            <span className="ml-2">Filter</span>
          </button>
          <div>
            <button className="flex items-center px-6 py-2 text-gray-600 bg-white rounded-md shadow hover:bg-gray-300">
              The latest
              <BsArrowDown className="ml-2" />
            </button>
          </div>
        </div>

        <div className="w-full mt-4 sm:mt-0 sm:w-auto">
          <input
            type="text"
            placeholder="Search for..."
            className="w-full px-4 py-2 border border-gray-200 rounded-md shadow sm:w-auto focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
      </div>

      {/* Section for Receivers (if user is a sender) */}
    

      {/* Section for Senders (if user is a receiver) */}
      {senders.length > 0 && (
        <div className="mb-6">
          <h2 className="mb-4 text-lg font-semibold">Your messages</h2>
          <div className="flex flex-col px-4 mt-2 ">
            {senders.map((sender, index) => (
              <div
                key={index}
                className="flex flex-row items-start justify-between w-full p-4 mt-4 bg-white rounded-lg shadow-md"
              >
                <div className="flex items-center">
                  <BsPersonCircle className="text-[#292A34] text-2xl mr-2" />
                  <h2 className="text-lg font-semibold">{sender.name}</h2> {/* Display sender's name */}
                </div>
                <button
                  onClick={() => togglePopup(sender)} // Open popup for this sender
                  className="px-4 py-2 mt-auto text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                  View Messages
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No Messages Section */}
      {receivers.length === 0 && senders.length === 0 && (
        <div className="flex flex-col justify-center py-5 px-5 sm:mx-5 mb-5 text-center items-center pb-[550px]">
          <div>
            <h2 className="mb-2 text-xl font-semibold">You have no messages yet</h2>
            <p className="max-w-xl text-center text-gray-500">
              No one has contacted your accommodation yet. All messages sent by customers via the contact form will be sent
              to your email, and you will also be able to read and deal with them here.
            </p>
          </div>
        </div>
      )}

      {/* Popup for Chat */}
      {showPopup && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div
            className="w-full max-w-md p-6 bg-white rounded-lg"
            style={{ maxHeight: "600px", overflowY: "auto" }}
          >
            <h2 className="mb-4 text-xl font-bold">{selectedUser.name}</h2>
            <form className="space-y-4">
              <ChatUI userR={selectedUser._id} />
              <div className="flex justify-end">
                <button
                  type="button"
                  className="px-4 py-2 text-gray-500 bg-gray-200 rounded-md hover:bg-gray-300"
                  onClick={() => togglePopup(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default News;
