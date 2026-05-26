/**
 * ModernCard - A versatile card component with multiple visual variants
 * 
 * @module components/ui/modern-card
 * @description Core card component supporting light/dark themes, glassmorphism,
 * and interactive hover states. Part of the unified design system.
 * 
 * @example
 * // Default card with padding
 * <ModernCard className="p-6">Content here</ModernCard>
 * 
 * @example
 * // Glass effect card with hover animation
 * <ModernCard hover>Interactive content</ModernCard>
 * 
 * @example
 * // Full card with header, content, footer
 * <ModernCard>
 * <ModernCardHeader>
 * <ModernCardTitle>Title</ModernCardTitle>
 * <ModernCardDescription>Description</ModernCardDescription>
 * </ModernCardHeader>
 * <ModernCardContent>Body</ModernCardContent>
 * <ModernCardFooter>Actions</ModernCardFooter>
 * </ModernCard>
 */

import { cn } from '@/lib/utils';
import React, { forwardRef } from 'react';

/**
 * Props for the ModernCard component
 * @interface ModernCardProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
interface ModernCardProps extends React.HTMLAttributes<HTMLDivElement> {
 /** Visual variant: 'default' | 'elevated' | 'outlined' | 'glass' */
 variant?: 'default' | 'elevated' | 'outlined' | 'glass';
 /** Enable hover animation (lift + shadow) */
 hover?: boolean;
}

const ModernCard = forwardRef<HTMLDivElement, ModernCardProps>(
 ({ className, variant = 'default', hover = false, ...props }, ref) => {
 const variants = {
 default: 'bg-card text-card-foreground border border-border/50 shadow-sm',
 elevated: 'bg-card text-card-foreground border border-border/50 shadow-lg',
 outlined: 'bg-transparent text-card-foreground border border-border/50',
 glass: 'bg-card/80 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 dark:border-slate-200 dark:border-slate-800 shadow-lg text-foreground',
 };

 return (
 <div
 ref={ref}
 className={cn(
 'rounded-3xl transition-all duration-300',
 variants[variant],
 hover && 'hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1',
 className
 )}
 {...props}
 />
 );
 }
);

ModernCard.displayName = 'ModernCard';

export type ModernCardHeaderProps = React.HTMLAttributes<HTMLDivElement>

const ModernCardHeader = forwardRef<HTMLDivElement, ModernCardHeaderProps>(
 ({ className, ...props }, ref) => (
 <div
 ref={ref}
 className={cn('flex flex-col space-y-1.5 p-6', className)}
 {...props}
 />
 )
);

ModernCardHeader.displayName = 'ModernCardHeader';

export type ModernCardTitleProps = React.HTMLAttributes<HTMLHeadingElement>

const ModernCardTitle = forwardRef<HTMLParagraphElement, ModernCardTitleProps>(
 ({ className, ...props }, ref) => (
 <h3
 ref={ref}
 className={cn('text-xl font-semibold leading-none tracking-tight text-foreground', className)}
 {...props}
 />
 )
);

ModernCardTitle.displayName = 'ModernCardTitle';

export type ModernCardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>

const ModernCardDescription = forwardRef<HTMLParagraphElement, ModernCardDescriptionProps>(
 ({ className, ...props }, ref) => (
 <p
 ref={ref}
 className={cn('text-sm text-muted-foreground', className)}
 {...props}
 />
 )
);

ModernCardDescription.displayName = 'ModernCardDescription';

export type ModernCardContentProps = React.HTMLAttributes<HTMLDivElement>

const ModernCardContent = forwardRef<HTMLDivElement, ModernCardContentProps>(
 ({ className, ...props }, ref) => (
 <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
 )
);

ModernCardContent.displayName = 'ModernCardContent';

export type ModernCardFooterProps = React.HTMLAttributes<HTMLDivElement>

const ModernCardFooter = forwardRef<HTMLDivElement, ModernCardFooterProps>(
 ({ className, ...props }, ref) => (
 <div
 ref={ref}
 className={cn('flex items-center p-6 pt-0', className)}
 {...props}
 />
 )
);

ModernCardFooter.displayName = 'ModernCardFooter';

export {
 ModernCard,
 ModernCardHeader,
 ModernCardFooter,
 ModernCardTitle,
 ModernCardDescription,
 ModernCardContent,
};
