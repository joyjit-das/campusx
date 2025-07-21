import { cn } from "@/lib/utils";

interface LoadingOverlayProps {
    show: boolean;
}

export function LoadingOverlay({ show }: LoadingOverlayProps) {
    return (
        <div className={cn(
            "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300",
            show ? "opacity-100" : "opacity-0 pointer-events-none"
        )}>
            <video
                src="/loading.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-md h-auto rounded-lg shadow-2xl"
            />
        </div>
    )
}
