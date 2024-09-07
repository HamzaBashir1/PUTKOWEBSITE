import React from 'react'

function WeatherForecast() {
    const days = [
        { date: '17 Aug', day: 'Today', temp: '30°C', icon: '🌤️', isToday: true },
        { date: '18 Aug', day: 'Sunday', temp: '29°C', icon: '🌤️', isToday: false },
        { date: '19 Aug', day: 'Monday', temp: '26°C', icon: '☁️', isToday: false },
        { date: '20 Aug', day: 'Tuesday', temp: '28°C', icon: '🌤️', isToday: false },
        { date: '21 Aug', day: 'Wednesday', temp: '26°C', icon: '🌤️', isToday: false },
      ];
  return (
    <div>
    <div className=" p-6  my-10 bg-white rounded-lg shadow-lg lg:mr-[440px] lg:ml-[18px] ">
    <div className="mb-6">
      <h2 className="mb-2 text-xl font-bold">Current weather</h2>
      <p className="text-gray-600">Weather forecast for the next few days</p>
    </div>

    {/* Container for horizontal scroll on small screens */}
    <div className="overflow-x-auto">
      <div className="flex gap-4 md:grid md:grid-cols-3 lg:grid-cols-5">
        {days.map((day, index) => (
          <div
            key={index}
            className={`min-w-[120px] p-4 rounded-lg flex-shrink-0 flex flex-col items-center justify-center ${
              day.isToday ? 'border-2 border-gray-400 bg-gray-50' : 'bg-gray-100'
            }`}
          >
            <div className="text-sm font-semibold text-gray-700">{day.date}</div>
            <div className="text-xs text-gray-500">{day.day}</div>
            <div className="my-2 text-4xl">{day.icon}</div>
            <div className="text-lg font-bold text-gray-800">{day.temp}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
    </div>
  )
}

export default WeatherForecast
