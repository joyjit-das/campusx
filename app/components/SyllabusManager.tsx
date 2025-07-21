import React, { useState } from 'react';
import { Book, CheckCircle, Clock, AlertTriangle, BarChart3, Calendar } from 'lucide-react';

const SyllabusManager: React.FC = () => {
  const [selectedSemester, setSelectedSemester] = useState('current');

  const subjects = [
    {
      id: 1,
      name: "Data Structures & Algorithms",
      code: "CS301",
      progress: 78,
      status: "on-track",
      totalTopics: 12,
      completedTopics: 9,
      nextDeadline: "Dec 20, 2025",
      professor: "Dr. Smith"
    },
    {
      id: 2,
      name: "Machine Learning",
      code: "CS402",
      progress: 65,
      status: "behind",
      totalTopics: 15,
      completedTopics: 10,
      nextDeadline: "Dec 18, 2025",
      professor: "Prof. Johnson"
    },
    {
      id: 3,
      name: "Web Development",
      code: "CS350",
      progress: 92,
      status: "ahead",
      totalTopics: 10,
      completedTopics: 9,
      nextDeadline: "Dec 25, 2025",
      professor: "Dr. Davis"
    },
    {
      id: 4,
      name: "Database Systems",
      code: "CS320",
      progress: 55,
      status: "behind",
      totalTopics: 14,
      completedTopics: 8,
      nextDeadline: "Dec 16, 2025",
      professor: "Prof. Wilson"
    }
  ];

  const weeklyReport = {
    batchesNeedingReclass: [
      { batch: "CS-2022-A", subject: "Machine Learning", reason: "70% students below threshold", urgency: "high" },
      { batch: "CS-2023-B", subject: "Database Systems", reason: "Multiple assignment failures", urgency: "medium" },
      { batch: "CS-2022-C", subject: "Algorithms", reason: "Slow progress on advanced topics", urgency: "low" }
    ],
    overallProgress: 72,
    studentsAtRisk: 23,
    performanceImprovement: 8
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ahead': return 'text-green-600 bg-green-100';
      case 'on-track': return 'text-blue-600 bg-blue-100';
      case 'behind': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ahead': return CheckCircle;
      case 'on-track': return Clock;
      case 'behind': return AlertTriangle;
      default: return Clock;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Syllabus Manager</h1>
        <div className="flex space-x-4">
          <select
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="current">Current Semester</option>
            <option value="previous">Previous Semester</option>
            <option value="all">All Semesters</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">
            Generate Report
          </button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Overall Progress</p>
              <p className="text-2xl font-bold text-gray-900">{weeklyReport.overallProgress}%</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Students at Risk</p>
              <p className="text-2xl font-bold text-red-600">{weeklyReport.studentsAtRisk}</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Performance Up</p>
              <p className="text-2xl font-bold text-green-600">+{weeklyReport.performanceImprovement}%</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Subjects</p>
              <p className="text-2xl font-bold text-gray-900">{subjects.length}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Book className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Subject Progress */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Subject Progress</h2>
          <div className="space-y-4">
            {subjects.map((subject) => {
              const StatusIcon = getStatusIcon(subject.status);
              return (
                <div key={subject.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-gray-900">{subject.name}</h3>
                        <span className="text-sm text-gray-500">({subject.code})</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(subject.status)}`}>
                          <StatusIcon className="w-3 h-3 inline mr-1" />
                          {subject.status.replace('-', ' ')}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">Prof. {subject.professor}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">{subject.progress}%</p>
                      <p className="text-sm text-gray-500">{subject.completedTopics}/{subject.totalTopics} topics</p>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          subject.status === 'ahead' ? 'bg-green-500' :
                          subject.status === 'on-track' ? 'bg-blue-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${subject.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Next deadline: {subject.nextDeadline}</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">View Details</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Weekly Report - Batches Needing Reclass */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Weekly Report</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Batches Needing Reclass</h3>
              <div className="space-y-3">
                {weeklyReport.batchesNeedingReclass.map((batch, index) => (
                  <div key={index} className={`border rounded-lg p-3 ${
                    batch.urgency === 'high' ? 'border-red-200 bg-red-50' :
                    batch.urgency === 'medium' ? 'border-yellow-200 bg-yellow-50' :
                    'border-gray-200 bg-gray-50'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{batch.batch}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        batch.urgency === 'high' ? 'bg-red-100 text-red-700' :
                        batch.urgency === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {batch.urgency} priority
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-700 mb-1">{batch.subject}</p>
                    <p className="text-xs text-gray-600">{batch.reason}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Schedule Reclass Sessions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyllabusManager;