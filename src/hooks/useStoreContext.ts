import { useContext } from 'react'
import { IStore } from '../stores'
import StoreContext from '../contexts/StoreContext'

const useStoreContext = (): IStore => {
  const store = useContext(StoreContext)

  if (!store) throw new Error('store is null');

  return store;
}

export default useStoreContext;