import {
  AppOpenAd,
  InterstitialAd,
  RewardedAd,
  BannerAd,
  TestIds,
} from 'react-native-google-mobile-ads';
import {View} from 'react-native';

// # App Open
AppOpenAd.createForAdRequest(TestIds.APP_OPEN);

// # Interstitial
InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL);

// # Rewarded
RewardedAd.createForAdRequest(TestIds.REWARDED);

// # Banners

export default function TestAd() {
  return (
    <View style={{display: 'flex', justifyContent: 'center', alignContent:'center', alignItems:'center'}}>
      <BannerAd size="400x100" unitId='ca-app-pub-4877096179531895/4229887065' />
    </View>
  );
}
