import React from 'react'
import { FaInfoCircle, FaCreditCard, FaDollarSign, FaTimesCircle, FaQuestionCircle ,FaChevronRight } from 'react-icons/fa';

const Overlook = () => {
  const items = [
    { icon: <FaInfoCircle />, text: 'Rules of stay' },
    { icon: <FaCreditCard />, text: 'Payments' },
    { icon: <FaDollarSign />, text: 'Surcharges' },
    { icon: <FaTimesCircle />, text: 'Cancellation terms' },
    { icon: <FaQuestionCircle />, text: 'Frequently asked questions' },
  ];
  return (
    <div>
    <div className=" p-6 my-10 bg-white rounded-lg shadow-lg lg:mr-[440px] lg:ml-[18px] ">
    {/* Title Section */}
    <div className="mb-6">
      <h2 className="mb-2 text-xl font-bold">Don’t overlook</h2>
      <p className="text-gray-600">Read on for good-to-know information</p>
    </div>

    {/* Information List */}
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-center justify-between p-4 transition rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
        >
          <div className="flex items-center space-x-4">
            <div className="p-2 text-xl text-gray-600 bg-gray-200 rounded-full">
              {item.icon}
            </div>
            <span className="text-lg font-semibold">{item.text}</span>
          </div>
          <div className="text-gray-600">
            <FaChevronRight />
          </div>
        </li>
      ))}
    </ul>
  </div>
    </div>
  )
}

export default Overlook
