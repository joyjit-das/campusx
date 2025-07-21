import React, { useState } from 'react';
import { 
  Upload, 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Star,
  Folder,
  File,
  Video,
  FileText,
  Book
} from 'lucide-react';

const StudyMaterials: React.FC = () => {
  const [viewMode, setViewMode] = useState('grid');

  const materials = [
    {
      id: 1,
      title: "Data Structures - Complete Notes",
      type: "pdf",
      subject: "Computer Science",
      professor: "Dr. Smith",
      uploadDate: "2 days ago",
      downloads: 245,
      rating: 4.8,
      size: "2.3 MB",
      icon: FileText
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      type: "video",
      subject: "AI/ML",
      professor: "Prof. Johnson",
      uploadDate: "1 week ago",
      downloads: 156,
      rating: 4.9,
      size: "450 MB",
      icon: Video
    },
    {
      id: 3,
      title: "Calculus Problem Sets",
      type: "pdf",
      subject: "Mathematics",
      professor: "Dr. Williams",
      uploadDate: "3 days ago",
      downloads: 89,
      rating: 4.6,
      size: "1.8 MB",
      icon: Book
    },
    {
      id: 4,
      title: "Chemistry Lab Manual",
      type: "pdf",
      subject: "Chemistry",
      professor: "Prof. Davis",
      uploadDate: "5 days ago",
      downloads: 123,
      rating: 4.7,
      size: "5.2 MB",
      icon: FileText
    }
  ];

  const subjects = ["All Subjects", "Computer Science", "Mathematics", "Physics", "Chemistry", "AI/ML"];
  const fileTypes = ["All Types", "PDF", "Video", "Presentation", "Worksheet"];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Study Materials</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-all">
          <Upload className="w-4 h-4" />
          <span>Upload Material</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search materials..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            {subjects.map(subject => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            {fileTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            <span>More Filters</span>
          </button>
        </div>

        {/* View Toggle */}
        <div className="flex justify-end">
          <div className="flex border border-gray-300 rounded-lg">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1 text-sm ${viewMode === 'grid' ? 'bg-blue-100 text-blue-700' : 'text-gray-600'}`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1 text-sm ${viewMode === 'list' ? 'bg-blue-100 text-blue-700' : 'text-gray-600'}`}
            >
              List
            </button>
          </div>
        </div>
      </div>

      {/* Materials Grid/List */}
      <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
        {materials.map((material) => {
          const Icon = material.icon;
          
          if (viewMode === 'grid') {
            return (
              <div key={material.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      material.type === 'video' ? 'bg-red-100' : 'bg-blue-100'
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        material.type === 'video' ? 'text-red-600' : 'text-blue-600'
                      }`} />
                    </div>
                    <div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        material.subject === 'Computer Science' ? 'bg-blue-100 text-blue-700' :
                        material.subject === 'Mathematics' ? 'bg-green-100 text-green-700' :
                        material.subject === 'AI/ML' ? 'bg-purple-100 text-purple-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {material.subject}
                      </span>
                    </div>
                  </div>
                  <button className="p-1 rounded-lg text-gray-400 hover:text-yellow-500 transition-colors">
                    <Star className="w-4 h-4" />
                  </button>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2">{material.title}</h3>
                <p className="text-sm text-gray-600 mb-3">By {material.professor}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{material.size}</span>
                  <span>{material.downloads} downloads</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{material.rating}</span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                      <Eye className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
                      <Download className="w-4 h-4 text-blue-600" />
                    </button>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div key={material.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    material.type === 'video' ? 'bg-red-100' : 'bg-blue-100'
                  }`}>
                    <Icon className={`w-5 h-5 ${
                      material.type === 'video' ? 'text-red-600' : 'text-blue-600'
                    }`} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{material.title}</h3>
                    <p className="text-sm text-gray-600">{material.professor} • {material.subject}</p>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{material.size}</span>
                    <span>{material.downloads} downloads</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{material.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                      <Eye className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
                      <Download className="w-4 h-4 text-blue-600" />
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default StudyMaterials;