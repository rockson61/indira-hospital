'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { CheckCircle, ChevronRight, ListChecks, Sparkles } from 'lucide-react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface MarketingSectionHighlight {
  title: string
  description: string
}

export interface MarketingSectionStep {
  title: string
  description: string
}

export interface MarketingSectionStat {
  label: string
  value: string
  description?: string
}

export interface MarketingSection {
  id: string
  heading: string
  eyebrow?: string
  description?: string
  content?: string[]
  bullets?: string[]
  highlights?: MarketingSectionHighlight[]
  steps?: MarketingSectionStep[]
  stats?: MarketingSectionStat[]
  cta?: {
    text: string
    href: string
  }
}

export interface MarketingFAQ {
  question: string
  answer: string
}

export interface MarketingCTA {
  heading: string
  description?: string
  primary: {
    text: string
    href: string
  }
  secondary?: {
    text: string
    href: string
  }
  tertiary?: {
    text: string
    href: string
  }
}

export interface MarketingContentProps {
  sections: MarketingSection[]
  tocTitle?: string
  intro?: {
    eyebrow?: string
    heading: string
    description?: string
  }
  stats?: MarketingSectionStat[]
  faqs?: MarketingFAQ[]
  cta?: MarketingCTA
  schema?: Record<string, unknown> | Record<string, unknown>[]
  className?: string
}

export function MarketingContent({
  sections,
  tocTitle = 'On this page',
  intro,
  stats,
  faqs,
  cta,
  schema,
  className,
}: MarketingContentProps) {
  if (!sections.length) {
    return null
  }

  return (
    <div className={cn('mt-16 space-y-16', className)}>
      {intro && (
        <div className="text-center max-w-3xl mx-auto space-y-3">
          {intro.eyebrow && <span className="text-sm font-semibold uppercase tracking-wide text-primary">{intro.eyebrow}</span>}
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">{intro.heading}</h2>
          {intro.description && <p className="text-base text-slate-600 dark:text-slate-300 md:text-lg">{intro.description}</p>}
        </div>
      )}


      <section aria-labelledby="marketing-content-toc" className="card-modern p-6">
        <h2 id="marketing-content-toc" className="text-xl font-semibold text-foreground mb-4">
          {tocTitle}
        </h2>
        <ol className="grid gap-3 sm:grid-cols-2">
          {sections.map((section, index) => (
            <li key={section.id} className="rounded-xl bg-primary/10 px-4 py-3 text-sm font-medium text-primary transition hover:bg-primary/20 hover:shadow-md">
              <Link href={`#${section.id}`} className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-2">
                  <ListChecks className="h-4 w-4" />
                  <span>{section.heading}</span>
                </span>
                <span className="text-xs font-semibold">0{index + 1}</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>


      {stats && stats.length > 0 && (
        <section className="card-modern p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-card px-4 py-5 text-center shadow-sm">
                <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-sm font-semibold text-foreground">{stat.label}</p>
                {stat.description && <p className="mt-1 text-xs text-muted-foreground">{stat.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {sections.map((section) => (
        <section key={section.id} id={section.id} className="card-modern scroll-mt-24 space-y-6 p-8">
          <header className="space-y-2">
            {section.eyebrow && <span className="text-xs font-semibold uppercase tracking-wider text-primary">{section.eyebrow}</span>}
            <h2 className="text-2xl font-bold md:text-3xl gradient-text">{section.heading}</h2>
            {section.description && <p className="text-base text-muted-foreground">{section.description}</p>}
          </header>

          {section.content && section.content.length > 0 && (
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {section.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}

          {section.bullets && section.bullets.length > 0 && (
            <ul className="space-y-3">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-slate-700 dark:text-slate-200">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {section.highlights && section.highlights.length > 0 && (
            <div className="grid gap-4 md:grid-cols-2">
              {section.highlights.map((highlight) => (
                <div key={highlight.title} className="rounded-xl bg-primary/10 p-5">
                  <h3 className="text-lg font-semibold text-primary">{highlight.title}</h3>
                  <p className="mt-2 text-sm text-foreground/80">{highlight.description}</p>
                </div>
              ))}
            </div>
          )}

          {section.steps && section.steps.length > 0 && (
            <ol className="grid gap-4 md:grid-cols-2">
              {section.steps.map((step, index) => (
                <li key={step.title} className="marketing-step-card rounded-xl border p-5">
                  <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{step.description}</p>
                </li>
              ))}
            </ol>
          )}

          {section.stats && section.stats.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-2">
              {section.stats.map((stat) => (
                <div key={stat.label} className="marketing-stat-card rounded-xl border p-4">
                  <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-sm font-semibold text-foreground">{stat.label}</p>
                  {stat.description && <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{stat.description}</p>}
                </div>
              ))}
            </div>
          )}

          {section.cta && (
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-primary hover:bg-teal-700">
                <Link href={section.cta.href}>{section.cta.text}</Link>
              </Button>
            </div>
          )}
        </section>
      ))}

      {faqs && faqs.length > 0 && (
        <section className="card-modern p-8" id="faqs">
          <header className="mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">FAQs</span>
            <h2 className="mt-1 text-2xl font-bold md:text-3xl gradient-text">Frequently Asked Questions</h2>
            <p className="mt-2 text-sm text-muted-foreground">Answers to the questions we hear most from patients.</p>
          </header>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`} className="rounded-xl border border-border/50 bg-muted/80 px-4">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-foreground/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      )}

      {cta && (
        <section className="card-modern gradient-bg p-8 text-white">
          <div className="space-y-4 text-center">
            <span className="inline-flex items-center justify-center gap-2 rounded-full bg-card/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="h-4 w-4" />
              Let's get started
            </span>
            <h2 className="text-3xl font-bold md:text-4xl">{cta.heading}</h2>
            {cta.description && <p className="text-base text-white/80 md:text-lg">{cta.description}</p>}
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-card text-primary hover:bg-muted">
                <Link href={cta.primary.href}>{cta.primary.text}</Link>
              </Button>
              {cta.secondary && (
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-card/10">
                  <Link href={cta.secondary.href}>{cta.secondary.text}</Link>
                </Button>
              )}
              {cta.tertiary && (
                <Button asChild size="lg" variant="ghost" className="text-white hover:bg-card/10">
                  <Link href={cta.tertiary.href}>{cta.tertiary.text}</Link>
                </Button>
              )}
            </div>
          </div>
        </section>
      )}

      {schema && (
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </div>
  )
}


