'use client'

import React, { useState } from 'react'
import Image, { ImageProps } from 'next/image'

interface EliteImageProps extends ImageProps {
 fallbackSrc?: string
}

/**
 * Enhanced Image component that handles 404 errors by falling back to a default asset.
 * This directly addresses the "277 Broken Images" identified in the SEO Audit.
 */
export const EliteImage = ({ 
 src, 
 alt, 
 fallbackSrc = '/hero-hospital.png', 
 ...props 
}: EliteImageProps) => {
 const [imgSrc, setImgSrc] = useState(src)
 const [hasError, setHasError] = useState(false)

 return (
 <Image
 {...props}
 src={hasError ? fallbackSrc : imgSrc}
 alt={alt}
 onError={() => {
 if (!hasError) {
 setHasError(true)
 }
 }}
 />
 )
}
