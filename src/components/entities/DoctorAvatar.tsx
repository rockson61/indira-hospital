"use client";

import React from 'react';
import { getImageUrl } from "@/lib/utils";
import Image from 'next/image';

interface DoctorAvatarProps {
 src?: string;
 name: string;
 initials: string;
 className?: string;
}

export function DoctorAvatar({ src, name, initials, className="" }: DoctorAvatarProps) {
 const [error, setError] = React.useState(false);
 const finalSrc = src ? getImageUrl(src) : null;

 if (finalSrc && !error) {
 return (
 <div className={`relative overflow-hidden ${className}`}>
 <Image
 src={finalSrc}
 alt={name}
 fill
 className="object-cover"
 onError={() => setError(true)}
 />
 </div>
 );
 }

 return (
 <div className={`flex items-center justify-center text-white font-black shadow-float bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 ${className}`}>
 <span className="relative z-10">
 {initials}
 </span>
 </div>
 );
}
