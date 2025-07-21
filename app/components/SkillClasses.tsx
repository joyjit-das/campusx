import React, { useState } from 'react';
import { Plus, Search, Star, Clock, Users, TrendingUp, Play, BookOpen } from 'lucide-react';
import Image from 'next/image';

const SkillClasses: React.FC = () => {
  const [activeTab, setActiveTab] = useState('trending');

  const classes = [
    {
      id: 1,
      title: "Advanced React Development",
      instructor: "Dr. Sarah Smith",
      description: "Master modern React patterns, hooks, and performance optimization techniques.",
      duration: "6 weeks",
      level: "Advanced",
      students: 245,
      rating: 4.9,
      price: "Free",
      category: "Programming",
      thumbnail: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=400",
      trending: true,
      requested: 89
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      instructor: "Prof. Mike Johnson",
      description: "Learn the basics of ML algorithms, data preprocessing, and model evaluation.",
      duration: "8 weeks",
      level: "Intermediate",
      students: 189,
      rating: 4.8,
      price: "Free",
      category: "AI/ML",
      thumbnail: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400",
      trending: true,
      requested: 156
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      instructor: "Emma Davis",
      description: "Design beautiful and user-friendly interfaces with modern design principles.",
      duration: "4 weeks",
      level: "Beginner",
      students: 167,
      rating: 4.7,
      price: "Free",
      category: "Design",
      thumbnail: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
      trending: false,
      requested: 67
    },
    {
      id: 4,
      title: "Cloud Computing with AWS",
      instructor: "Dr. Alex Wilson",
      description: "Master cloud infrastructure, deployment, and scaling with Amazon Web Services.",
      duration: "10 weeks",
      level: "Advanced",
      students: 98,
      rating: 4.6,
      price: "Free",
      category: "Cloud",
      thumbnail: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400",
      trending: false,
      requested: 134
    }
  ];

  const categories = ["All", "Programming", "AI/ML", "Design", "Cloud", "Data Science", "Mobile"];
  const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

  const mostRequestedSkills = [
    { skill: "Python Programming", requests: 234 },
    { skill: "Data Analysis", requests: 189 },
    { skill: "Mobile App Development", requests: 156 },
    { skill: "Cybersecurity", requests: 143 },
    { skill: "Blockchain Development", requests: 98 }
  ];

  const filteredClasses = classes.filter(cls => {
    if (activeTab === 'trending') return cls.trending;
    if (activeTab === 'requested') return cls.requested > 100;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Skill Development Classes</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-all">
          <Plus className="w-4 h-4" />
          <span>Request Class</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Search and Filters */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search classes..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>

            {/* Tabs */}
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
              {[
                { id: 'trending', label: 'Trending', icon: TrendingUp },
                { id: 'all', label: 'All Classes', icon: BookOpen },
                { id: 'requested', label: 'Most Requested', icon: Star }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Classes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredClasses.map((cls) => (
              <div key={cls.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative">
                  <Image 
                    src={cls.thumbnail} 
                    alt={cls.title}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover"
                  />
                  {cls.trending && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>Trending</span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded-lg text-xs font-medium">
                    {cls.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      cls.category === 'Programming' ? 'bg-blue-100 text-blue-700' :
                      cls.category === 'AI/ML' ? 'bg-purple-100 text-purple-700' :
                      cls.category === 'Design' ? 'bg-pink-100 text-pink-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {cls.category}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      cls.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                      cls.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {cls.level}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{cls.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{cls.description}</p>
                  <p className="text-sm text-gray-500 mb-4">By {cls.instructor}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{cls.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{cls.students} students</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{cls.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-1">
                      <Play className="w-4 h-4" />
                      <span>Enroll Now</span>
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Most Requested Skills */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Most Requested Skills</h2>
            <div className="space-y-3">
              {mostRequestedSkills.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">{item.skill}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">{item.requests}</span>
                    <button className="text-blue-600 hover:text-blue-700 text-xs font-medium">
                      Request
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all">
              Submit New Request
            </button>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Progress</h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Courses Completed</span>
                  <span className="text-sm font-bold text-blue-600">12</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Skills Acquired</span>
                  <span className="text-sm font-bold text-green-600">8</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Certificates Earned</span>
                  <span className="text-sm font-bold text-purple-600">5</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillClasses;