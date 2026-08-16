import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dubancamilo.assetdesk.field',
  appName: 'AssetDesk Field',
  webDir: 'out',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1200,
      backgroundColor: '#0a0f1e',
      showSpinner: false,
    },
  },
};

export default config;
