'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  actionText?: string;
  className?: string;
  animationDelay: string;
}

export function DashboardCard({ title, description, icon, actionText, className, animationDelay }: DashboardCardProps) {
  return (
    <Card className={cn(
        "bg-secondary/50 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] animate-slide-in-right w-full",
        className
      )}
      style={{ animationDelay }}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-4">
          {icon && <div className="text-primary">{icon}</div>}
          <CardTitle className="text-lg font-bold tracking-tight text-foreground">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        {actionText && (
          <Button variant="outline" size="sm" className="hover:bg-primary/10 border-primary/30">
            {actionText}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
