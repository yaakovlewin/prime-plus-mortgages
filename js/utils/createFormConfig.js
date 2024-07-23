import {
  buyToLetConfig,
  firstTimeBuyerConfig,
} from "@/js/config/applicationConfigs";

export function createConfig(configType) {
  switch (configType) {
    case "firstTimeBuyer":
      return firstTimeBuyerConfig;
    case "buyToLet":
      return buyToLetConfig;
    default:
      return null;
  }
}
