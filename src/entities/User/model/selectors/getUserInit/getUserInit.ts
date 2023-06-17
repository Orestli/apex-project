import type { StateSchema } from '@/app/providers/StoreProvider';

export const getUserInit = (state: StateSchema) => state.user.init;
