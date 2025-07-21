import { FloatingParticles } from './floating-particles';
import LoginForm from './login-form';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      <div className="relative flex flex-1 flex-col items-center justify-center bg-gradient-to-br from-[#101A14] to-[#2E6153] p-8 text-center text-white lg:w-3/5">
        <FloatingParticles />
        <div className="relative z-10 max-w-md space-y-4">
          <h2 className="text-5xl font-black tracking-tighter">
            Latest Release
          </h2>
          <p className="text-lg text-foreground/80">
            Explore latest additional features
          </p>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background p-8 lg:w-2/5">
        <LoginForm />
      </div>
    </main>
  );
}
