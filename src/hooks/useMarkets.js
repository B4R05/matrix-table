import createMockDataHook from '../libs/createMockDataHook'

const useMarkets = createMockDataHook(() => [
  {
    market_id: 'int',
    title: 'International'
  },
  {
    market_id: 'se',
    title: 'Sweden'
  },
  {
    market_id: 'de',
    title: 'Denmark'
  },
  {
    market_id: 'fr',
    title: 'France'
  }
])

export default useMarkets
