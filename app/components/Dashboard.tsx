import React from 'react';
import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  Calendar,
  MessageSquare,
  Star,
  Clock,
  ArrowRight
} from 'lucide-react';

interface DashboardProps {
  setActiveSection: (section: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ setActiveSection }) => {
  const stats = [
    { label: 'Active Members', value: '2,847', icon: Users, color: 'blue' },
    { label: 'Study Materials', value: '1,234', icon: BookOpen, color: 'green' },
    { label: 'Upcoming Events', value: '28', icon: Calendar, color: 'purple' },
    { label: 'Active Discussions', value: '156', icon: MessageSquare, color: 'orange' },
  ];

  const recentActivity = [
    { type: 'post', title: 'New study material for Data Structures', time: '2 hours ago', user: 'Prof. Smith' },
    { type: 'event', title: 'Web Development Workshop', time: '4 hours ago', user: 'Event Team' },
    { type: 'project', title: 'Looking for React developers', time: '6 hours ago', user: 'Sarah Chen' },
    { type: 'doubt', title: 'Question about Machine Learning', time: '8 hours ago', user: 'Mike Johnson' },
  ];

  const quickActions = [
    { label: 'Join Discussion', action: () => setActiveSection('community'), color: 'blue' },
    { label: 'Find Study Buddy', action: () => setActiveSection('project-finder'), color: 'green' },
    { label: 'Book Consultation', action: () => setActiveSection('teacher-consult'), color: 'purple' },
    { label: 'Browse Events', action: () => setActiveSection('events'), color: 'orange' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, John!</h1>
          <p className="text-gray-600">Here's what's happening in your college community today.</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Current Semester</p>
          <p className="text-lg font-semibold text-gray-900">Fall 2025</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">{activity.user.charAt(0)}</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.title}</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>{activity.user}</span>
                    <span>•</span>
                    <span>{activity.time}</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={action.action}
                className={`w-full p-3 rounded-lg text-left bg-${action.color}-50 border border-${action.color}-200 hover:bg-${action.color}-100 transition-all`}
              >
                <span className={`font-medium text-${action.color}-700`}>{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Weekly Progress */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">This Week's Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Course Progress</h3>
            <p className="text-2xl font-bold text-blue-600">78%</p>
            <p className="text-sm text-gray-500">4 subjects on track</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Assignments</h3>
            <p className="text-2xl font-bold text-green-600">12</p>
            <p className="text-sm text-gray-500">Completed this week</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Study Time</h3>
            <p className="text-2xl font-bold text-purple-600">24h</p>
            <p className="text-sm text-gray-500">This week</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;