import React, { useState } from 'react';
import { Plus, Search, Filter, Star, MapPin, Clock, DollarSign, User } from 'lucide-react';

const Freelance: React.FC = () => {
  const [activeTab, setActiveTab] = useState('browse');

  const jobs = [
    {
      id: 1,
      title: "React Developer for E-commerce Project",
      description: "Need an experienced React developer to build a modern e-commerce platform. Must have experience with Redux, TypeScript, and responsive design.",
      client: "TechStart Solutions",
      budget: "$500 - $800",
      duration: "2-3 weeks",
      skills: ["React", "TypeScript", "Redux", "CSS"],
      location: "Remote",
      posted: "2 hours ago",
      proposals: 12,
      rating: 4.8,
      verified: true
    },
    {
      id: 2,
      title: "UI/UX Design for Mobile App",
      description: "Looking for a creative UI/UX designer to design a fitness tracking mobile app. Need wireframes, mockups, and interactive prototypes.",
      client: "FitLife App",
      budget: "$300 - $500",
      duration: "1-2 weeks",
      skills: ["Figma", "UI/UX", "Mobile Design", "Prototyping"],
      location: "Remote",
      posted: "5 hours ago",
      proposals: 8,
      rating: 4.9,
      verified: true
    },
    {
      id: 3,
      title: "Python Data Analysis Script",
      description: "Need a Python script to analyze sales data and generate insights. Experience with pandas, matplotlib, and data visualization required.",
      client: "DataCorp Analytics",
      budget: "$200 - $400",
      duration: "1 week",
      skills: ["Python", "Pandas", "Data Analysis", "Matplotlib"],
      location: "Remote",
      posted: "1 day ago",
      proposals: 15,
      rating: 4.6,
      verified: false
    }
  ];

  const freelancers = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Full-Stack Developer",
      rating: 4.9,
      completedJobs: 45,
      hourlyRate: "$25-35",
      skills: ["React", "Node.js", "MongoDB", "TypeScript"],
      avatar: "SC",
      available: true,
      location: "Remote"
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      title: "UI/UX Designer",
      rating: 4.8,
      completedJobs: 32,
      hourlyRate: "$20-30",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      avatar: "MR",
      available: true,
      location: "On-campus"
    },
    {
      id: 3,
      name: "Emma Davis",
      title: "Data Scientist",
      rating: 4.7,
      completedJobs: 28,
      hourlyRate: "$30-40",
      skills: ["Python", "Machine Learning", "TensorFlow", "SQL"],
      avatar: "ED",
      available: false,
      location: "Remote"
    }
  ];

  const categories = ["All", "Web Development", "Mobile Development", "Design", "Data Science", "Writing", "Marketing"];
  const budgetRanges = ["All Budgets", "$0-$200", "$200-$500", "$500-$1000", "$1000+"];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Freelance Hub</h1>
        <div className="flex space-x-3">
          <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
            Post Job
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-all">
            <Plus className="w-4 h-4" />
            <span>Create Profile</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('browse')}
              className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'browse'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Browse Jobs
            </button>
            <button
              onClick={() => setActiveTab('freelancers')}
              className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'freelancers'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Find Freelancers
            </button>
            <button
              onClick={() => setActiveTab('my-projects')}
              className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'my-projects'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              My Projects
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
                placeholder={activeTab === 'freelancers' ? "Search freelancers..." : "Search jobs..."}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            {activeTab === 'browse' && (
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                {budgetRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            )}
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              <span>More Filters</span>
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'freelancers' ? (
          <div className="divide-y divide-gray-200">
            {freelancers.map((freelancer) => (
              <div key={freelancer.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium">{freelancer.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{freelancer.name}</h3>
                        <span className={`w-2 h-2 rounded-full ${freelancer.available ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                      </div>
                      <p className="text-gray-600 mb-2">{freelancer.title}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span>{freelancer.rating}</span>
                          <span>({freelancer.completedJobs} jobs)</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="w-4 h-4" />
                          <span>{freelancer.hourlyRate}/hr</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{freelancer.location}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {freelancer.skills.map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      View Profile
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {jobs.map((job) => (
              <div key={job.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                      {job.verified && (
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          Verified Client
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-3">{job.description}</p>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{job.client}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{job.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.posted}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <DollarSign className="w-4 h-4" />
                          <span>{job.budget}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <span>{job.proposals} proposals</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      Save Job
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Apply Now
                    </button>
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

export default Freelance;