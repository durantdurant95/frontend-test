import { StoreApi, UseBoundStore, create } from "zustand";

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S
) => {
  let store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (let k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};

export type User = {
  email: string;
  password: string;
};

export type UserState = {
  user: User | null;
  setUser: (user: User) => void;
};

const useUserStoreBase = create<UserState>((set) => ({
  user: null,
  setUser: (user: User) => set({ user }),
}));

const useUserStore = createSelectors(useUserStoreBase);

export default useUserStore;
