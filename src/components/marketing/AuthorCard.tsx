import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Award, ExternalLink } from "lucide-react";

interface AuthorCardProps {
    author: {
        name: string;
        role: string;
        image: string;
        bio: string;
        credentials: string[];
        profileUrl: string;
    };
    category?: string;
    dateUpdated?: string;
}

export function AuthorCard({ author, category = "Medical Review", dateUpdated }: AuthorCardProps) {
    return (
        <div className="bg-white/70 dark:bg-slate-900/50 backdrop-blur-2xl rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden group">
            {/* Header Banner */}
            <div className="h-20 bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-800/50 relative">
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full border border-slate-200 dark:border-slate-700 flex items-center gap-1.5 shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-700 dark:text-slate-300">
                        {category}
                    </span>
                </div>
                {dateUpdated && (
                    <div className="absolute top-4 right-4 z-10 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Upd: {dateUpdated}
                    </div>
                )}
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-900 to-transparent dark:from-white dark:via-white dark:to-transparent" />
            </div>

            <div className="px-6 pb-6 relative pt-0">
                {/* Avatar Overlapping Header */}
                <div className="flex justify-start -mt-10 mb-4 relative z-20">
                    <div className="relative">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-900 shadow-lg bg-slate-100 dark:bg-slate-800">
                            <Image
                                src={author.image}
                                alt={author.name}
                                width={80}
                                height={80}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center border-2 border-white dark:border-slate-900 shadow-sm" title="Verified Authority">
                            <Award className="w-4 h-4" />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-1 mb-4">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight leading-tight group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors">
                        <Link href={author.profileUrl} className="focus:outline-none">
                            <span className="absolute inset-0 opacity-0 bg-transparent rounded-3xl" aria-hidden="true" />
                            {author.name}
                        </Link>
                    </h3>
                    <p className="text-sm font-bold text-fuchsia-600 dark:text-fuchsia-400">
                        {author.role}
                    </p>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-5 line-clamp-3">
                    {author.bio}
                </p>

                {/* Credentials */}
                {author.credentials && author.credentials.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                        {author.credentials.map((cred, idx) => (
                            <span key={idx} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-xs font-bold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                                {cred}
                            </span>
                        ))}
                    </div>
                )}

                {/* Footer Link */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/50">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 flex items-center justify-between transition-colors">
                        View Full Credentials
                        <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                </div>
            </div>
        </div>
    );
}
