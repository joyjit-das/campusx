'use client';

import { Github } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LoadingOverlay } from './loading-overlay';

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate a network request
    setTimeout(() => {
      router.push('/dashboard');
    }, 2000); // 2-second delay for demonstration
  };

  return (
    <>
      <LoadingOverlay show={isLoading} />
      <div className="flex h-full w-full flex-col justify-center px-8 sm:px-12 lg:px-16">
        <div className="w-full max-w-md space-y-8">
          <div
            className="animate-slide-in-right"
            style={{ animationDelay: '0.1s' }}
          >
            <h1
              className="text-4xl font-bold tracking-tighter text-foreground"
              style={{ textShadow: '0 0 10px hsl(var(--primary) / 0.5)' }}
            >
              Welcome Back
            </h1>
            <p className="mt-2 uppercase text-sm text-muted-foreground">
              Sign in to your account
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div
              className="group relative animate-slide-in-right"
              style={{ animationDelay: '0.2s' }}
            >
              <Label
                htmlFor="username"
                className="mb-2 block text-sm font-medium"
              >
                Username
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="your_username"
                defaultValue="the_aritrabose"
                className="peer h-12 border-2 border-accent bg-input/50 shadow-[inset_0_2px_8px_0_hsl(var(--primary)/0.1)] transition-colors focus:border-primary/50"
              />
              <div className="absolute bottom-0 left-0 h-0.5 w-full origin-center scale-x-0 transform bg-primary transition-transform duration-300 group-focus-within:scale-x-100" />
            </div>

            <div
              className="group relative animate-slide-in-right"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <Link
                  href="#"
                  className="text-sm text-primary/80 hover:text-primary hover:underline"
                >
                  Forget Password?
                </Link>
              </div>
              <div className="relative mt-2">
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  defaultValue="••••••••"
                  className="peer h-12 border-2 border-accent bg-input/50 shadow-[inset_0_2px_8px_0_hsl(var(--primary)/0.1)] transition-colors focus:border-primary/50"
                />
                <div className="absolute bottom-0 left-0 h-0.5 w-full origin-center scale-x-0 transform bg-primary transition-transform duration-300 group-focus-within:scale-x-100" />
              </div>
            </div>

            <div
              className="space-y-4 pt-4 animate-slide-in-right"
              style={{ animationDelay: '0.4s' }}
            >
              <Button
                type="submit"
                className="w-full h-12 text-base font-bold transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary))] hover:scale-105"
                disabled={isLoading}
              >
                {isLoading ? 'SIGNING IN...' : 'SIGN IN'}
              </Button>
              <Button
                variant="outline"
                className="w-full h-12 text-base font-bold transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:scale-105"
                disabled={isLoading}
              >
                CONTINUE WITH GITHUB
                <Github className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </form>

          <p
            className="text-center text-sm text-muted-foreground animate-slide-in-right"
            style={{ animationDelay: '0.5s' }}
          >
            Don&apos;t have an account?{' '}
            <Link
              href="#"
              className="font-semibold text-primary/80 hover:text-primary hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
