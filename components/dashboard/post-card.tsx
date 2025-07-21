'use client';

import Image from 'next/image';
import { Heart, MessageCircle, Repeat, Send } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Post {
  id: number;
  author: string;
  username: string;
  avatarUrl: string;
  dataAiHint?: string;
  time: string;
  content: string;
  imageUrl?: string;
  imageDataAiHint?: string;
  likes: number;
  comments: number;
  category: string;
}

interface PostCardProps {
  post: Post;
  className?: string;
  animationDelay: string;
}

export default function PostCard({ post, className, animationDelay }: PostCardProps) {
  return (
    <Card
      className={cn(
        'bg-secondary/50 border-primary/20 overflow-hidden animate-slide-in-right',
        className
      )}
      style={{ animationDelay }}
    >
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <Avatar className="h-12 w-12 border-2 border-primary/50">
            <AvatarImage src={post.avatarUrl} alt={post.author} data-ai-hint={post.dataAiHint} />
            <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="w-full">
            <div className="flex items-center gap-2">
              <p className="font-bold text-foreground">{post.author}</p>
              <p className="text-sm text-muted-foreground">@{post.username} · {post.time}</p>
            </div>
            <p className="mt-2 text-foreground/90 whitespace-pre-wrap">{post.content}</p>
            
            {post.imageUrl && (
              <div className="mt-4 rounded-lg border border-primary/20 overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt="Post image"
                  width={600}
                  height={400}
                  data-ai-hint={post.imageDataAiHint}
                  className="object-cover w-full h-auto"
                />
              </div>
            )}

            <div className="mt-4 flex justify-between items-center text-muted-foreground">
                <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:text-primary">
                    <Heart className="h-5 w-5" />
                    <span>{post.likes}</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:text-primary">
                    <MessageCircle className="h-5 w-5" />
                    <span>{post.comments}</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:text-primary">
                    <Repeat className="h-5 w-5" />
                    <span>Share</span>
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                    <Send className="h-5 w-5" />
                </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
