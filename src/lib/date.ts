const DEFAULT_OPTIONS: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  timeZone: 'UTC',
}

export function formatDate(
  value: string | number | Date | null | undefined,
  locale: string = 'en-IN',
  options?: Intl.DateTimeFormatOptions,
): string {
  if (!value) {
    return 'N/A'
  }
  
  const date = value instanceof Date ? value : new Date(value)
  
  // Check if date is valid
  if (isNaN(date.getTime())) {
    // Try to parse as ISO string if it's a string
    if (typeof value === 'string') {
      const fallbackDate = new Date(value.trim())
      if (!isNaN(fallbackDate.getTime())) {
        const fmt = new Intl.DateTimeFormat(locale, { ...DEFAULT_OPTIONS, ...options })
        return fmt.format(fallbackDate)
      }
    }
    return 'Invalid date'
  }
  
  const fmt = new Intl.DateTimeFormat(locale, { ...DEFAULT_OPTIONS, ...options })
  return fmt.format(date)
}

