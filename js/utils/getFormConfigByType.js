import {
  buyToLetConfig,
  firstTimeBuyerConfig,
  remortgageConfig,
} from "@/js/config/applicationConfigs";

export function getFormConfigByType(configType) {
  console.log(configType);
  switch (configType) {
    case "first-time-buyer":
      return firstTimeBuyerConfig;
    case "buy-to-let":
      return buyToLetConfig;
    case "remortgages":
      return remortgageConfig;
    default:
      return null;
  }
}
