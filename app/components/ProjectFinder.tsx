import React, { useState } from 'react';
import { Plus, Search, Users, Code, Clock, MapPin, Filter } from 'lucide-react';

const ProjectFinder: React.FC = () => {
  const [activeTab, setActiveTab] = useState('find');

  const projects = [
    {
      id: 1,
      title: "E-commerce Web App",
      description: "Building a full-stack e-commerce platform using React, Node.js, and MongoDB. Looking for 2 frontend developers.",
      owner: "Sarah Chen",
      skills: ["React", "JavaScript", "CSS"],
      members: 3,
      maxMembers: 5,
      deadline: "Dec 15, 2025",
      location: "Remote",
      difficulty: "Intermediate"
    },
    {
      id: 2,
      title: "AI Chatbot for Customer Service",
      description: "Developing an intelligent chatbot using Python and machine learning. Need ML engineers and backend developers.",
      owner: "Mike Rodriguez",
      skills: ["Python", "TensorFlow", "NLP"],
      members: 2,
      maxMembers: 4,
      deadline: "Jan 20, 2026",
      location: "Hybrid",
      difficulty: "Advanced"
    },
    {
      id: 3,
      title: "Mobile Finance Tracker",
      description: "Creating a personal finance tracking app using React Native. Looking for mobile developers and UI/UX designers.",
      owner: "Emma Davis",
      skills: ["React Native", "Firebase", "UI/UX"],
      members: 1,
      maxMembers: 3,
      deadline: "Nov 30, 2025",
      location: "On-campus",
      difficulty: "Beginner"
    }
  ];

  const skillCategories = ["All", "Frontend", "Backend", "Mobile", "AI/ML", "UI/UX", "Data Science"];
  const difficultyLevels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Project Teams</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-all">
          <Plus className="w-4 h-4" />
          <span>Create Project</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('find')}
              className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'find'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Find Teams
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
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              {skillCategories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              {difficultyLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              <span>More Filters</span>
            </button>
          </div>
        </div>

        {/* Projects List */}
        <div className="divide-y divide-gray-200">
          {projects.map((project) => (
            <div key={project.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                      project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {project.difficulty}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  <p className="text-sm text-gray-500 mb-3">Led by {project.owner}</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Join Team
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{project.members}/{project.maxMembers} members</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>Due {project.deadline}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                </div>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${(project.members / project.maxMembers) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectFinder;