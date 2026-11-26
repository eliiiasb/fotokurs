export const bookingDraftKey = 'fotokurs-booking-draft'

export const bookingTimeSlots = [
  'Lördag 14/11-26 11.00–15.00',
  'Lördag 21/11-26 11.00–15.00',
  'Lördag 28/11-26 11.00–15.00',
]

const months = [
  'januari',
  'februari',
  'mars',
  'april',
  'maj',
  'juni',
  'juli',
  'augusti',
  'september',
  'oktober',
  'november',
  'december',
]

export function readBookingDraft() {
  const savedDraft = sessionStorage.getItem(bookingDraftKey)
  return savedDraft ? JSON.parse(savedDraft) : null
}

export function saveBookingDraft(draft) {
  sessionStorage.setItem(bookingDraftKey, JSON.stringify(draft))
}

export function isCompleteBookingDraft(draft) {
  if (!draft || typeof draft !== 'object' || Array.isArray(draft)) return false

  const requiredFields = ['first-name', 'last-name', 'email', 'phone']
  const hasRequiredDetails = requiredFields.every(
    (field) => typeof draft[field] === 'string' && draft[field].trim().length > 0,
  )

  return (
    hasRequiredDetails &&
    bookingTimeSlots.includes(draft['time-slot']) &&
    draft.terms === 'on'
  )
}

export function formatSelectedDate(value, includeYear = true) {
  const match = value?.match(/(\d{1,2})\/(\d{1,2})-(\d{2,4})/)
  if (!match) return value || ''

  const [, day, month, rawYear] = match
  const monthName = months[Number(month) - 1]
  if (!monthName) return value

  const year = rawYear.length === 2 ? `20${rawYear}` : rawYear
  return `${Number(day)} ${monthName}${includeYear ? ` ${year}` : ''}`
}
