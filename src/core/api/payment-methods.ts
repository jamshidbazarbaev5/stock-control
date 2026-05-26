import { createResourceApiHooks } from "../helpers/createResourceApi";

export interface PaymentMethodCurrency {
  id: number;
  name: string;
  symbol: string;
}

export interface PaymentMethod {
  id?: number;
  name: string;
  code?: string;
  is_system?: boolean;
  is_cash?: boolean;
  currency?: PaymentMethodCurrency;
  currency_id?: number;
  is_foreign_currency?: boolean;
  icon?: string;
  is_active?: boolean;
}

const PAYMENT_METHOD_URL = "payment-methods/";

export const {
  useGetResources: useGetPaymentMethods,
  useGetResource: useGetPaymentMethod,
  useCreateResource: useCreatePaymentMethod,
  useUpdateResource: useUpdatePaymentMethod,
  useDeleteResource: useDeletePaymentMethod,
} = createResourceApiHooks<PaymentMethod>(PAYMENT_METHOD_URL, "payment-methods");
