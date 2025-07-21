import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  ThumbsUp, 
  MessageCircle, 
  Share2,
  Bookmark,
  MoreHorizontal,
  TrendingUp
} from 'lucide-react';

const Community: React.FC = () => {
  const [activeTab, setActiveTab] = useState('trending');

  const posts = [
    {
      id: 1,
      title: "Need help with React hooks optimization",
      content: "I'm working on a project and struggling with unnecessary re-renders. Any experienced developers who can help?",
      author: "Sarah Chen",
      avatar: "SC",
      time: "2 hours ago",
      category: "Programming",
      upvotes: 24,
      comments: 8,
      bookmarked: false
    },
    {
      id: 2,
      title: "Study group for Machine Learning course",
      content: "Looking to form a study group for Prof. Johnson's ML course. We can meet every weekend at the library.",
      author: "Mike Rodriguez",
      avatar: "MR",
      time: "4 hours ago",
      category: "Study Groups",
      upvotes: 18,
      comments: 12,
      bookmarked: true
    },
    {
      id: 3,
      title: "Resources for Data Structures and Algorithms",
      content: "Compiled a list of the best resources for DSA preparation. Includes books, videos, and practice platforms.",
      author: "Prof. Smith",
      avatar: "PS",
      time: "6 hours ago",
      category: "Resources",
      upvotes: 45,
      comments: 6,
      bookmarked: false
    }
  ];

  const categories = ["All", "Programming", "Study Groups", "Resources", "Events", "General", "Help"];
  const tabs = [
    { id: 'trending', label: 'Trending', icon: TrendingUp },
    { id: 'recent', label: 'Recent', icon: MessageCircle },
    { id: 'bookmarked', label: 'Bookmarked', icon: Bookmark }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Community</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-all">
          <Plus className="w-4 h-4" />
          <span>New Post</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search discussions..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mt-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                category === 'All' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Posts */}
        <div className="divide-y divide-gray-200">
          {posts.map((post) => (
            <div key={post.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">{post.avatar}</span>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-medium text-gray-900">{post.author}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{post.time}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      post.category === 'Programming' ? 'bg-blue-100 text-blue-700' :
                      post.category === 'Study Groups' ? 'bg-green-100 text-green-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.content}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-sm">{post.upvotes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">{post.comments}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors">
                        <Share2 className="w-4 h-4" />
                        <span className="text-sm">Share</span>
                      </button>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button className={`p-2 rounded-lg transition-colors ${
                        post.bookmarked ? 'text-yellow-600 bg-yellow-50' : 'text-gray-400 hover:text-gray-600'
                      }`}>
                        <Bookmark className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg text-gray-400 hover:text-gray-600 transition-colors">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;