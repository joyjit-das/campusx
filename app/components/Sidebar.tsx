import React from 'react';
import { 
  Home, 
  MessageSquare, 
  BookOpen, 
  Users, 
  GraduationCap,
  Calendar,
  AlertTriangle,
  Zap,
  Briefcase,
  FileText,
  Video
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'community', label: 'Community', icon: MessageSquare },
    { id: 'study-materials', label: 'Study Materials', icon: BookOpen },
    { id: 'project-finder', label: 'Project Teams', icon: Users },
    { id: 'teacher-consult', label: 'Teacher Consult', icon: Video },
    { id: 'syllabus', label: 'Syllabus Manager', icon: FileText },
    { id: 'events', label: 'Events & Rooms', icon: Calendar },
    { id: 'issues', label: 'Issue Tracker', icon: AlertTriangle },
    { id: 'skill-classes', label: 'Skill Classes', icon: Zap },
    { id: 'freelance', label: 'Freelance Hub', icon: Briefcase },
  ];

  return (
    <aside className={`fixed left-0 top-16 h-full bg-white border-r border-gray-200 transition-all duration-300 z-40 ${
      isOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full'
    }`}>
      <div className="p-4">
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;