'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Paperclip, Send } from 'lucide-react';
import { Card } from '../ui/card';

interface CreatePostProps {
    animationDelay: string;
}

export default function CreatePost({ animationDelay }: CreatePostProps) {
  return (
    <Card className="p-4 bg-secondary/50 border-primary/20 animate-slide-in-right" style={{ animationDelay }}>
      <div className="flex items-start gap-4">
        <Avatar>
          <AvatarImage src="https://placehold.co/100x100.png" alt="User" data-ai-hint="user avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="w-full space-y-2">
            <Textarea
            placeholder="What's happening on campus?"
            className="bg-background/50 border-primary/20 focus:border-primary/50 text-base"
            rows={2}
            />
            <div className="flex justify-between items-center">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                    <Paperclip className="h-5 w-5" />
                </Button>
                <Button className="font-bold">
                    Post
                    <Send className="ml-2 h-4 w-4"/>
                </Button>
            </div>
        </div>
      </div>
    </Card>
  );
}
