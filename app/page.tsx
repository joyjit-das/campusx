'use client';

import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Community from './components/Community';
import StudyMaterials from './components/StudyMaterials';
import ProjectFinder from './components/ProjectFinder';
import TeacherConsult from './components/TeacherConsult';
import SyllabusManager from './components/SyllabusManager';
import Events from './components/Events';
import IssueTracker from './components/IssueTracker';
import SkillClasses from './components/SkillClasses';
import Freelance from './components/Freelance';
import Chatbot from './components/Chatbot';

export default function Home() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard setActiveSection={setActiveSection} />;
      case 'community':
        return <Community />;
      case 'study-materials':
        return <StudyMaterials />;
      case 'project-finder':
        return <ProjectFinder />;
      case 'teacher-consult':
        return <TeacherConsult />;
      case 'syllabus':
        return <SyllabusManager />;
      case 'events':
        return <Events />;
      case 'issues':
        return <IssueTracker />;
      case 'skill-classes':
        return <SkillClasses />;
      case 'freelance':
        return <Freelance />;
      default:
        return <Dashboard setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Header 
        isSidebarOpen={isSidebarOpen} 
        setIsSidebarOpen={setIsSidebarOpen}
      />
      
      <div className="flex">
        <Sidebar 
          isOpen={isSidebarOpen}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        
        <main className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        } pt-16`}>
          <div className="p-6">
            {renderActiveSection()}
          </div>
        </main>
      </div>
      
      <Chatbot />
    </div>
  );
}