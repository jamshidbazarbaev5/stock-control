import { createResourceApiHooks } from "../helpers/createResourceApi";

export interface CurrencyRate {
  id?: number;
  from_currency: number;
  from_code?: string;
  to_currency: number;
  to_code?: string;
  rate: string;
  created_at?: string;
}

export interface CreateCurrencyRateDTO {
  currency: number;
  rate: string;
}

export interface UpdateCurrencyRateDTO {
  currency: number;
  rate: string;
}

const CURRENCY_RATE_URL = "exchange-rates/";

export const {
  useGetResources: useGetCurrencyRates,
  useGetResource: useGetCurrencyRate,
  useCreateResource: useCreateCurrencyRate,
  useUpdateResource: useUpdateCurrencyRate,
  useDeleteResource: useDeleteCurrencyRate,
} = createResourceApiHooks<CurrencyRate>(CURRENCY_RATE_URL, "currency-rates");
