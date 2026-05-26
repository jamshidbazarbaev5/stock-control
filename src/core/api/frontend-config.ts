import { useQuery } from "@tanstack/react-query";
import api from "./api";

export interface ShopFlags {
  has_variants: boolean;
  has_expiry: boolean;
  has_serial: boolean;
  has_weight: boolean;
  flexible_units: boolean;
  has_articles: boolean;
  has_delivery: boolean;
  has_imei: boolean;
  has_recycling: boolean;
}

export interface FrontendConfig {
  shop_flags: ShopFlags;
}

export function useFrontendConfig() {
  return useQuery<FrontendConfig>({
    queryKey: ["frontend-config"],
    queryFn: async () => {
      const response = await api.get<FrontendConfig>("config/frontend-config/");
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
  });
}
