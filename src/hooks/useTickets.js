import createMockDataHook from '../libs/createMockDataHook'

const useTickets = createMockDataHook(() => [
  {
    ticket_id: 'adult',
    title: 'Adult'
  },
  {
    ticket_id: 'child',
    title: 'Child'
  },
  {
    ticket_id: 'infant',
    title: 'Infant'
  },
  {
    ticket_id: 'car',
    title: 'Car (6m or less)'
  },
  {
    ticket_id: 'van',
    title: 'Car (over 6m)'
  }
])

export default useTickets
