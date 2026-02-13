'use client'

import React, { memo } from 'react'
import Link from 'next/link'
import { Badge } from "@/components/ui/badge"
import {
  MessageCircle,
  Clock,
  User,
  ArrowRight,
  Star
} from "lucide-react"
import { formatDate } from '@/lib/date'

interface QAPreview {
  id: string
  title: string
  slug: string
  excerpt: string
  helpfulVotes: number
  views: number
  createdAt: string
}

export interface SimpleFAQ {
  question: string
  answer: string
}

interface RelevantQAWidgetProps {
  title: string
  questions: QAPreview[]
  staticFaqs?: SimpleFAQ[]
  serviceName?: string
  showViewAll?: boolean
}

export function RelevantQAWidget({
  title,
  questions,
  staticFaqs = [],
  serviceName,
  showViewAll = true
}: RelevantQAWidgetProps) {
  if (questions.length === 0 && staticFaqs.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-foreground/60">No FAQs available yet. Check back soon!</p>
        {serviceName && (
          <Link
            href="/ask-the-dentist/submit"
            className="inline-flex items-center mt-4 text-sm font-medium text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 transition-colors"
          >
            <MessageCircle className="w-4 h-4 mr-1" />
            Ask Dr. Rockson Samuel about {serviceName}
          </Link>
        )}
      </div>
    )
  }

  return (
    <div className="qa-widget">
      <div className="space-y-4">
        {title && (
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">{title}</h3>
            <Badge variant="outline" className="border-teal-500 text-teal-600 dark:text-teal-400">
              <MessageCircle className="w-4 h-4 mr-1" />
              Q&A
            </Badge>
          </div>
        )}

        <div className="space-y-4 mb-6">
          {/* Static Generic FAQs */}
          {staticFaqs.map((faq, index) => (
            <details key={`static-${index}`} className="group backdrop-blur-sm bg-gradient-to-r from-white/80 to-teal-50/50 dark:from-slate-800/60 dark:to-teal-900/40 rounded-2xl border border-teal-200 dark:border-teal-700/40 p-5 shadow-md transition-all hover:shadow-lg">
              <summary className="cursor-pointer text-sm font-semibold text-foreground dark:text-slate-200 outline-none transition-colors group-open:text-teal-600 dark:group-open:text-teal-300 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 text-white text-xs shadow-sm">?</span>
                {faq.question}
              </summary>
              <div className="mt-4 pl-9">
                <p className="text-sm text-foreground/80 dark:text-slate-300 mb-3 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}

          {/* Dynamic User Questions */}
          {questions.slice(0, 3).map((question) => (
            <details key={question.id} className="group backdrop-blur-sm bg-gradient-to-r from-white/80 to-teal-50/50 dark:from-slate-800/60 dark:to-teal-900/40 rounded-2xl border border-teal-200 dark:border-teal-700/40 p-5 shadow-md transition-all hover:shadow-lg">
              <summary className="cursor-pointer text-sm font-semibold text-foreground dark:text-slate-200 outline-none transition-colors group-open:text-teal-600 dark:group-open:text-teal-300 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 text-white text-xs shadow-sm">?</span>
                {question.title}
              </summary>
              <div className="mt-4 pl-9">
                <p className="text-sm text-foreground/80 dark:text-slate-300 mb-3 leading-relaxed">
                  {question.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-foreground/60 dark:text-slate-400">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-teal-500 dark:text-teal-400 mr-1" />
                      <span>{question.helpfulVotes} helpful</span>
                    </div>
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      <span>{question.views} views</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{formatDate(question.createdAt)}</span>
                  </div>
                </div>
                <Link
                  href={`/ask-the-dentist/${question.slug}`}
                  className="inline-flex items-center mt-3 text-xs font-semibold text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
                >
                  Read Full Answer <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </details>
          ))}
        </div>

        {showViewAll && (
          <div className="text-center">
            <Link
              href="/ask-the-dentist"
              className="inline-flex items-center px-5 py-2.5 rounded-xl border-2 border-teal-500 bg-white/80 dark:bg-slate-800/80 text-sm font-semibold text-teal-600 dark:text-teal-400 transition-all hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:shadow-md"
            >
              View All Questions & Answers
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        )}

        {serviceName && (
          <div className="mt-6 pt-6 border-t border-teal-200/50 dark:border-teal-800/50 text-center">
            <p className="text-sm text-foreground/60 mb-3">
              Have questions about {serviceName}?
            </p>
            <Link
              href="/ask-the-dentist/submit"
              className="inline-flex items-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Ask Dr. Rockson Samuel
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default memo(RelevantQAWidget)
