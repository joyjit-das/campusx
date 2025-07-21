'use client';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

interface DashboardSidebarProps {
  categories: { name: string; icon: React.ReactNode }[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export function DashboardSidebar({ categories, activeCategory, setActiveCategory, searchTerm, setSearchTerm }: DashboardSidebarProps) {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-secondary/30 border-r border-primary/20 p-4 flex-col justify-between hidden md:flex">
      <div>
        <div className="flex items-center gap-2 mb-8">
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="https://i.pinimg.com/736x/1d/1d/fa/1d1dfa34a8e8b47d9d095df13dc33e3a.jpg"
                className="text-primary"
            >
                <defs>
                    <filter id="glitch">
                        <feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="3" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <path
                    d="M4 16L12 4L20 16L12 28L4 16Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    style={{ filter: 'url(#glow)' }}
                />
                <path
                    d="M12 16L20 4L28 16L20 28L12 16Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    className="opacity-70"
                    style={{ filter: 'url(#glitch)' }}
                />
            </svg>
            <h1
                className="text-2xl font-black tracking-tighter text-foreground"
                style={{ textShadow: "0 0 8px hsl(var(--primary) / 0.6)" }}
            >
                CampusX
            </h1>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search" 
            className="pl-9 bg-background/50 border-primary/20 focus:border-primary/50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <nav>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.name}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-3 px-3",
                    activeCategory === category.name ? "bg-primary/10 text-primary" : "hover:bg-primary/5"
                  )}
                  onClick={() => setActiveCategory(category.name)}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

       <div className="mt-auto">
            <Button variant="outline" className="w-full" onClick={handleLogout}>
                Logout
            </Button>
       </div>

    </aside>
  );
}
