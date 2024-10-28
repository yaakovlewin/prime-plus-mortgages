import {
  buyToLetConfig,
  ownerOccupierConfig,
  remortgageConfig,
} from "@/js/config/applicationConfigs";

export function getFormConfigByType(configType) {
  switch (configType) {
    case "owner-occupier":
      return ownerOccupierConfig;
    case "buy-to-let":
      return buyToLetConfig;
    case "remortgages":
      return remortgageConfig;
    default:
      return null;
  }
}
