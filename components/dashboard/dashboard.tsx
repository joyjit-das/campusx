'use client';

import {
  AreaChart,
  BrainCircuit,
  CalendarClock,
  CalendarDays,
  HardHat,
  Home,
  MessagesSquare,
  Wrench,
  GraduationCap
} from 'lucide-react';
import { DashboardSidebar } from './sidebar';
import { useState } from 'react';
import CreatePost from './create-post';
import PostCard from './post-card';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";


const categories = [
  { name: 'Home', icon: <Home className="h-5 w-5" /> },
  { name: 'Academic Support', icon: <GraduationCap className="h-5 w-5" /> },
  { name: 'AI & Personal Assistant', icon: <BrainCircuit className="h-5 w-5" /> },
  { name: 'Scheduling & Management', icon: <CalendarClock className="h-5 w-5" /> },
  { name: 'Social & Community', icon: <MessagesSquare className="h-5 w-5" /> },
  { name: 'Admin & Faculty Tools', icon: <Wrench className="h-5 w-5" /> },
  { name: 'Calendar & Automation', icon: <CalendarDays className="h-5 w-5" /> },
  { name: 'Analytics & Dashboards', icon: <AreaChart className="h-5 w-5" /> },
  { name: 'Career & Extra Tools', icon: <HardHat className="h-5 w-5" /> },
];

const posts = [
  {
    id: 1,
    author: 'Aritra Bose',
    username: 'the_aritrabose',
    avatarUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'man portrait',
    time: '2h ago',
    content: 'Just wrapped up my session on Generative AI at the annual tech fest! The energy was incredible. Huge thanks to everyone who attended and shared their brilliant questions. ✨ #GenAI #TechFest #CampusX',
    imageUrl: 'https://placehold.co/600x400.png',
    imageDataAiHint: 'tech conference',
    likes: 128,
    comments: 12,
    category: 'Academic Support',
  },
  {
    id: 2,
    author: 'Jane Doe',
    username: 'janedoe_designs',
    avatarUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'woman portrait',
    time: '5h ago',
    content: 'Found the perfect spot to cram for mid-terms. The library\'s new quiet zone is a game-changer! Wish me luck! 📚☕ #StudyGrind #MidTerms #CampusLife',
    imageUrl: 'https://placehold.co/600x400.png',
    imageDataAiHint: 'library study',
    likes: 74,
    comments: 8,
    category: 'Social & Community',
  },
    {
    id: 3,
    author: 'CampusX Official',
    username: 'campusx_updates',
    avatarUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'brand logo',
    time: '1d ago',
    content: '📢 Announcement: The deadline for project submissions for the "Innovate for Future" hackathon has been extended to this Friday, 11:59 PM. Don\'t miss out!',
    likes: 210,
    comments: 25,
    category: 'Social & Community',
  },
  {
    id: 4,
    author: 'Career Services',
    username: 'campusx_careers',
    avatarUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'office building',
    time: '2d ago',
    content: 'Reminder: The annual career fair is next week! Top companies are hiring for internships and full-time roles. Get your resumes ready! #CareerFair #Hiring #Internships',
    likes: 150,
    comments: 18,
    category: 'Career & Extra Tools',
  }
];

const FeaturePlaceholder = ({ title, features }: { title: string, features?: string[] }) => (
    <div className="flex flex-col gap-4 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
      <h2 className="text-3xl font-bold text-foreground">{title}</h2>
      {features && features.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
             <Card key={index} className="bg-secondary/50 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg font-bold tracking-tight text-foreground">{feature}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">This feature is under development.</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-96 bg-secondary/50 border-2 border-dashed border-primary/20 rounded-lg">
            <p className="text-muted-foreground">This feature is coming soon!</p>
        </div>
      )}
    </div>
);


export default function Dashboard() {
  const [activeCategory, setActiveCategory] = useState('Home');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter(post => {
    const categoryMatch = activeCategory === 'Home' || post.category === activeCategory;
    const searchMatch = post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        post.author.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const renderContent = () => {
    if (searchTerm && activeCategory === 'Home') {
       return (
        <div className="flex flex-col gap-8">
            {filteredPosts.map((post, index) => (
              <PostCard
                key={post.id}
                post={post}
                animationDelay={`${index * 0.1 + 0.3}s`}
              />
            ))}
             {filteredPosts.length === 0 && (
             <div className="text-center py-16 col-span-full animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                <p className="text-muted-foreground">No posts found for your search.</p>
            </div>
          )}
        </div>
       );
    }
    
    switch (activeCategory) {
      case 'Home':
        return (
          <div className="flex flex-col gap-8">
            <CreatePost animationDelay="0.2s" />
            {filteredPosts.map((post, index) => (
              <PostCard
                key={post.id}
                post={post}
                animationDelay={`${index * 0.1 + 0.3}s`}
              />
            ))}
          </div>
        );
      case 'Academic Support':
        return <FeaturePlaceholder title="Academic Support" features={['Study Buddy (Peer Tutoring Hub)', 'Study group finder', '1-1 doubt clear with teacher', 'Trending skill dev classes (user can request)', 'Notes or info sharing section']} />;
      case 'AI & Personal Assistant':
        return <FeaturePlaceholder title="AI & Personal Assistant" features={['AI-driven chatbot for help', 'Neural assistant with smart prompts', 'Personalized dashboard (self-work, internships, etc.)', 'AI-based class suggestions & notifications']} />;
      case 'Scheduling & Management':
        return <FeaturePlaceholder title="Scheduling & Management" features={['Smart class/exam/lab scheduler (TimeTablely)', 'Admin dashboard with room utilization', 'Event manager + room allotment', 'Weekly reports for batch needing reclass', 'Drag-drop planner for class adjustments']} />;
      case 'Social & Community':
        return <FeaturePlaceholder title="Social & Community" features={['Online community for colleges (Reddit style)', 'Interest-based posts', 'Discuss room/chat manager', 'Alumni network page']} />;
      case 'Admin & Faculty Tools':
        return <FeaturePlaceholder title="Admin & Faculty Tools" features={['Faculty leave requests', 'Smart swap approvals', 'Add/remove rooms/courses', 'Admin calendar simulation']} />;
      case 'Calendar & Automation':
        return <FeaturePlaceholder title="Calendar & Automation" features={['Google Calendar / Outlook sync', 'Personalized calendar for students', 'Real-time updates & reminders', 'Semester, trimester support']} />;
      case 'Analytics & Dashboards':
        return <FeaturePlaceholder title="Analytics & Dashboards" features={['Student progress dashboards', 'Teaching load tracking', 'Metrics on performance', 'Auto-generated optimized schedules']} />;
      case 'Career & Extra Tools':
        return <FeaturePlaceholder title="Career & Extra Tools" features={['Freelance finder/provider', 'CV builder <21', 'Page for live class < >']} />;
      default:
        return (
             <div className="text-center py-16 col-span-full animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                <p className="text-muted-foreground">Select a category to get started.</p>
            </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <DashboardSidebar
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <main className="flex-1 p-4 sm:p-6 lg:p-8 ml-0 md:ml-64 transition-all duration-300">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8 animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl font-black tracking-tighter text-foreground" style={{ textShadow: '0 0 10px hsl(var(--primary) / 0.5)' }}>
              {activeCategory === 'Home' ? 'Welcome Back, Aritra!' : activeCategory}
            </h1>
            <p className="mt-2 text-muted-foreground">
              {activeCategory === 'Home' ? "Here's what's happening on campus today." : `Explore the ${activeCategory} module`}
            </p>
          </header>

          {renderContent()}
        </div>
      </main>
    </div>
  );
}
