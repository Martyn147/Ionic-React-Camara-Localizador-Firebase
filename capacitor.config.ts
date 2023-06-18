import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Marty Localiceitor',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: '#ffffff',
      splashFullScreen: true,
      splashImmersive: false,
      splashScreenImage: 'assets/splash/splash.png',
      splashScreenSpinner: 'dots',
    },
  },
};

export default config; 