import React, { useState } from 'react';
import { Calendar, Clock, Video, MessageCircle, Star, Filter, Search } from 'lucide-react';

const TeacherConsult: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const teachers = [
    {
      id: 1,
      name: "Dr. Sarah Smith",
      subject: "Data Structures & Algorithms",
      rating: 4.9,
      reviews: 156,
      avatar: "SS",
      available: true,
      nextSlot: "Today 2:00 PM",
      expertise: ["Programming", "Algorithms", "Problem Solving"]
    },
    {
      id: 2,
      name: "Prof. Mike Johnson",
      subject: "Machine Learning",
      rating: 4.8,
      reviews: 203,
      avatar: "MJ",
      available: false,
      nextSlot: "Tomorrow 10:00 AM",
      expertise: ["AI", "ML", "Data Science"]
    },
    {
      id: 3,
      name: "Dr. Emily Davis",
      subject: "Web Development",
      rating: 4.7,
      reviews: 89,
      avatar: "ED",
      available: true,
      nextSlot: "Today 4:30 PM",
      expertise: ["React", "Node.js", "Full Stack"]
    }
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const upcomingConsultations = [
    {
      teacher: "Dr. Sarah Smith",
      subject: "Data Structures Review",
      date: "Dec 15, 2025",
      time: "2:00 PM",
      type: "Video Call"
    },
    {
      teacher: "Prof. Mike Johnson",
      subject: "ML Project Discussion",
      date: "Dec 16, 2025",
      time: "10:00 AM",
      type: "In-Person"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Teacher Consultations</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">
          Quick Book
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Available Teachers */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Available Teachers</h2>
              <div className="flex space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search teachers..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {teachers.map((teacher) => (
                <div key={teacher.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium">{teacher.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold text-gray-900">{teacher.name}</h3>
                          <span className={`w-2 h-2 rounded-full ${teacher.available ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{teacher.subject}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span>{teacher.rating}</span>
                            <span>({teacher.reviews} reviews)</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>Next: {teacher.nextSlot}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {teacher.expertise.map((skill) => (
                            <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
                        <MessageCircle className="w-4 h-4 text-blue-600" />
                      </button>
                      <button className="p-2 rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
                        <Video className="w-4 h-4 text-green-600" />
                      </button>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Panel & Upcoming */}
        <div className="space-y-6">
          {/* Quick Booking */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Booking</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time Slot</label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Choose time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject/Topic</label>
                <input
                  type="text"
                  placeholder="What do you need help with?"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all">
                Find Available Teachers
              </button>
            </div>
          </div>

          {/* Upcoming Consultations */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Consultations</h2>
            <div className="space-y-3">
              {upcomingConsultations.map((consultation, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{consultation.subject}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      consultation.type === 'Video Call' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {consultation.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{consultation.teacher}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{consultation.date}</span>
                    <span>{consultation.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All Consultations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherConsult;