import { createSelectors } from "@/services/createSelectors";
import { create } from "zustand";

type UserStore = {
  email: string;
  password: string;
};

const useUserStoreBase = create<UserStore>((set) => ({
  email: "user@company.com",
  password: "password",
}));

export const useUserStore = createSelectors(useUserStoreBase);
