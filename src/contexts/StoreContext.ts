import { createContext } from 'react';
import { IStore } from '../stores'

const StoreContext = createContext<IStore>({} as IStore);

export default StoreContext;