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
 * <ModernCard variant="glass" hover>Interactive content</ModernCard>
 * 
 * @example
 * // Full card with header, content, footer
 * <ModernCard>
 *   <ModernCardHeader>
 *     <ModernCardTitle>Title</ModernCardTitle>
 *     <ModernCardDescription>Description</ModernCardDescription>
 *   </ModernCardHeader>
 *   <ModernCardContent>Body</ModernCardContent>
 *   <ModernCardFooter>Actions</ModernCardFooter>
 * </ModernCard>
 */

import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

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
      glass: 'bg-card/80 dark:bg-slate-950/80 backdrop-blur-lg border border-white/20 dark:border-white/10 shadow-lg text-foreground',
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

interface ModernCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> { }

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

interface ModernCardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> { }

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

interface ModernCardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> { }

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

interface ModernCardContentProps extends React.HTMLAttributes<HTMLDivElement> { }

const ModernCardContent = forwardRef<HTMLDivElement, ModernCardContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  )
);

ModernCardContent.displayName = 'ModernCardContent';

interface ModernCardFooterProps extends React.HTMLAttributes<HTMLDivElement> { }

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
