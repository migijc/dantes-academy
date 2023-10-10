package com.dantesacademy;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;
import android.os.Bundle;
// import com.google.android.gms.ads.MobileAds;
// import com.google.android.gms.ads.initialization.InitializationStatus;
// import com.google.android.gms.ads.initialization.OnInitializationCompleteListener;



public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "DantesAcademy";
  }

  //  initialize the Google Mobile Ads SDK by calling MobileAds.initialize() which initializes the SDK and
  // calls back a completion listener once initialization is complete, or after a 30-second timeout. This needs to be done only once, ideally at app launch.
  //  protected void onCreate(Bundle savedInstanceState) {
  //       super.onCreate(savedInstanceState);
  //       setContentView(R.layout.activity_main);

  //       MobileAds.initialize(this, new OnInitializationCompleteListener() {
  //           @Override
  //           public void onInitializationComplete(InitializationStatus initializationStatus) {
  //           }
  //       });
  //   }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled(), // fabricEnabled
        // If you opted-in for the New Architecture, we enable Concurrent React (i.e. React 18).
        DefaultNewArchitectureEntryPoint.getConcurrentReactEnabled() // concurrentRootEnabled
        );
  }

   @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }

}

