import { createResourceApiHooks } from '../helpers/createResourceApi';

export interface Currency {
  id?: number;
  name: string;
  code: string;
  symbol: string;
  is_base: boolean;
  decimal_places?: number;
  is_active?: boolean;
}

const CURRENCY_URL = 'currencies/';

export const {
  useGetResources: useGetCurrencies,
  useGetResource: useGetCurrency,
  useCreateResource: useCreateCurrency,
  useUpdateResource: useUpdateCurrency,
  useDeleteResource: useDeleteCurrency,
} = createResourceApiHooks<Currency>(CURRENCY_URL, 'currencies');
