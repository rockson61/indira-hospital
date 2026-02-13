import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-6">
            <div className="text-center max-w-lg">
                <div className="mb-8">
                    <span className="text-8xl font-bold bg-gradient-to-r from-purple-700 to-purple-400 bg-clip-text text-transparent">
                        404
                    </span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Page Not Found
                </h1>
                <p className="text-gray-600 mb-8 leading-relaxed">
                    Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
                    Let us help you find what you need.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                        <Link href="/">
                            <Home className="w-4 h-4 mr-2" />
                            Go Home
                        </Link>
                    </Button>
                    <Button variant="outline" asChild size="lg">
                        <Link href="/contact">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Contact Us
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
