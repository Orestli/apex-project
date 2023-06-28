import type { FeatureFlags } from '@/shared/types/featureFlags';

let featuresFlags: FeatureFlags;

export const setFeatureFlags = (newFeatureFlag?: FeatureFlags) => {
  if (newFeatureFlag) {
    featuresFlags = newFeatureFlag;
  }
};

export const getFeatureFlag = (flag: keyof FeatureFlags) => featuresFlags[flag];
