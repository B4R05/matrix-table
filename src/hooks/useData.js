import createMockDataHook from '../libs/createMockDataHook'

const useData = createMockDataHook(() => [
  {
    ticket_id: 'adult',
    market_id: 'int',
    value: 10
  },
  {
    ticket_id: 'child',
    market_id: 'se',
    value: 20
  },
  {
    ticket_id: 'van',
    market_id: 'fr',
    value: 50
  }
])

export default useData
