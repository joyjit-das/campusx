import React, { useState } from 'react';
import { Plus, Calendar, Clock, MapPin, Users, Filter, Search } from 'lucide-react';

const Events: React.FC = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedDate, setSelectedDate] = useState('');

  const events = [
    {
      id: 1,
      title: "Web Development Workshop",
      description: "Learn modern React development techniques and best practices.",
      date: "Dec 20, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Computer Lab A",
      organizer: "Tech Club",
      attendees: 45,
      maxAttendees: 60,
      category: "Workshop",
      status: "confirmed"
    },
    {
      id: 2,
      title: "AI/ML Seminar",
      description: "Industry experts discuss the latest trends in artificial intelligence.",
      date: "Dec 22, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Auditorium B",
      organizer: "AI Society",
      attendees: 120,
      maxAttendees: 150,
      category: "Seminar",
      status: "confirmed"
    },
    {
      id: 3,
      title: "Project Showcase",
      description: "Students present their final year projects to industry mentors.",
      date: "Dec 25, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Main Hall",
      organizer: "Computer Science Dept",
      attendees: 200,
      maxAttendees: 300,
      category: "Exhibition",
      status: "confirmed"
    }
  ];

  const rooms = [
    { id: 1, name: "Computer Lab A", capacity: 60, type: "Lab", available: true },
    { id: 2, name: "Computer Lab B", capacity: 50, type: "Lab", available: false },
    { id: 3, name: "Auditorium A", capacity: 200, type: "Auditorium", available: true },
    { id: 4, name: "Auditorium B", capacity: 150, type: "Auditorium", available: true },
    { id: 5, name: "Main Hall", capacity: 300, type: "Hall", available: false },
    { id: 6, name: "Conference Room 1", capacity: 30, type: "Meeting Room", available: true }
  ];

  const categories = ["All", "Workshop", "Seminar", "Exhibition", "Meeting", "Social"];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Events & Room Management</h1>
        <div className="flex space-x-3">
          <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
            Book Room
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-all">
            <Plus className="w-4 h-4" />
            <span>Create Event</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'upcoming'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('my-events')}
              className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'my-events'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              My Events
            </button>
            <button
              onClick={() => setActiveTab('rooms')}
              className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'rooms'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Room Availability
            </button>
          </nav>
        </div>

        {/* Search and Filters */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search events..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              <span>More Filters</span>
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'rooms' ? (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rooms.map((room) => (
                <div key={room.id} className={`border rounded-lg p-4 ${
                  room.available ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                }`}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">{room.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      room.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {room.available ? 'Available' : 'Booked'}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>Capacity: {room.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>Type: {room.type}</span>
                    </div>
                  </div>
                  <button className={`w-full mt-3 py-2 rounded-lg transition-colors ${
                    room.available 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}>
                    {room.available ? 'Book Room' : 'View Schedule'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {events.map((event) => (
              <div key={event.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        event.category === 'Workshop' ? 'bg-blue-100 text-blue-700' :
                        event.category === 'Seminar' ? 'bg-purple-100 text-purple-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {event.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{event.description}</p>
                    <p className="text-sm text-gray-500 mb-3">Organized by {event.organizer}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees}/{event.maxAttendees} attending</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Register
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      Details
                    </button>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;