import React, { useState } from 'react';
import { Plus, Search, Filter, AlertTriangle, CheckCircle, Clock, User } from 'lucide-react';

const IssueTracker: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const issues = [
    {
      id: 1,
      title: "Wi-Fi connectivity issues in Library",
      description: "Students are experiencing frequent disconnections and slow internet speeds in the main library.",
      category: "Infrastructure",
      priority: "high",
      status: "open",
      reportedBy: "Sarah Chen",
      reportedDate: "Dec 10, 2025",
      assignedTo: "IT Support",
      votes: 24
    },
    {
      id: 2,
      title: "Broken projector in Room 301",
      description: "The projector in classroom 301 is not working properly. Display is flickering and has color issues.",
      category: "Equipment",
      priority: "medium",
      status: "in-progress",
      reportedBy: "Prof. Johnson",
      reportedDate: "Dec 12, 2025",
      assignedTo: "Maintenance",
      votes: 8
    },
    {
      id: 3,
      title: "Cafeteria food quality concerns",
      description: "Multiple students have reported issues with food quality and hygiene in the main cafeteria.",
      category: "Food Services",
      priority: "high",
      status: "open",
      reportedBy: "Student Council",
      reportedDate: "Dec 11, 2025",
      assignedTo: "Administration",
      votes: 45
    },
    {
      id: 4,
      title: "Air conditioning not working in Lab B",
      description: "The AC unit in Computer Lab B has been malfunctioning for the past week.",
      category: "Infrastructure",
      priority: "medium",
      status: "resolved",
      reportedBy: "Mike Rodriguez",
      reportedDate: "Dec 5, 2025",
      assignedTo: "Facilities",
      votes: 12
    }
  ];

  const categories = ["All", "Infrastructure", "Equipment", "Food Services", "Academic", "Safety", "Other"];
  const priorities = ["All", "Low", "Medium", "High", "Critical"];
  const statuses = ["All", "Open", "In Progress", "Resolved", "Closed"];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open': return AlertTriangle;
      case 'in-progress': return Clock;
      case 'resolved': return CheckCircle;
      default: return Clock;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'text-red-600 bg-red-100';
      case 'in-progress': return 'text-yellow-600 bg-yellow-100';
      case 'resolved': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-red-800 bg-red-200';
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const filteredIssues = issues.filter(issue => {
    if (activeTab === 'all') return true;
    return issue.status === activeTab;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Issue Tracker</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-all">
          <Plus className="w-4 h-4" />
          <span>Report Issue</span>
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Issues</p>
              <p className="text-2xl font-bold text-gray-900">{issues.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Open Issues</p>
              <p className="text-2xl font-bold text-red-600">{issues.filter(i => i.status === 'open').length}</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">In Progress</p>
              <p className="text-2xl font-bold text-yellow-600">{issues.filter(i => i.status === 'in-progress').length}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Resolved</p>
              <p className="text-2xl font-bold text-green-600">{issues.filter(i => i.status === 'resolved').length}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search issues..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            {priorities.map(priority => (
              <option key={priority} value={priority}>{priority}</option>
            ))}
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            <span>More Filters</span>
          </button>
        </div>

        {/* Status Tabs */}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          {['all', 'open', 'in-progress', 'resolved'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Issues List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="divide-y divide-gray-200">
          {filteredIssues.map((issue) => {
            const StatusIcon = getStatusIcon(issue.status);
            return (
              <div key={issue.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{issue.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(issue.status)}`}>
                        <StatusIcon className="w-3 h-3 inline mr-1" />
                        {issue.status.replace('-', ' ')}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(issue.priority)}`}>
                        {issue.priority} priority
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{issue.description}</p>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>Reported by {issue.reportedBy}</span>
                      </div>
                      <span>•</span>
                      <span>{issue.reportedDate}</span>
                      <span>•</span>
                      <span>Assigned to {issue.assignedTo}</span>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        issue.category === 'Infrastructure' ? 'bg-blue-100 text-blue-700' :
                        issue.category === 'Equipment' ? 'bg-green-100 text-green-700' :
                        issue.category === 'Food Services' ? 'bg-purple-100 text-purple-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {issue.category}
                      </span>
                      <span className="text-sm text-gray-500">{issue.votes} votes</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm">
                      Vote
                    </button>
                    <button className="px-3 py-1 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IssueTracker;