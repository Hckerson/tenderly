# Tenderly

Modern React Native app built with Expo, Expo Router, TypeScript, and NativeWind (Tailwind for React Native). Includes onboarding, authentication screens, custom theming, and safe-area handling.

## Table of contents

- Prerequisites
- Getting started
- Available scripts
- Project structure
- Features
- Styling and theming
- Fonts
- Environment and configuration
- Building for devices
- Troubleshooting

## Prerequisites

- Node.js 18+ and npm 9+ (or pnpm/yarn)
- Expo CLI: `npm i -g expo` (optional; `npx expo` also works)
- iOS: Xcode (on macOS) for simulator or device builds
- Android: Android Studio + SDK / emulator

## Getting started

1. Install dependencies

```
npm install
```

2. Start the development server

```
npm run start
```

3. Open the app

- Press "a" for Android emulator
- Press "i" for iOS simulator (macOS)
- Or scan the QR with Expo Go on your device

## Available scripts

```
npm run start         # Start Expo dev server (Metro)
npm run android       # Run on Android device/emulator (EAS Dev Client supported)
npm run ios           # Run on iOS simulator/device (macOS)
npm run web           # Run web build via Expo for Web
npm run lint          # Lint using eslint-config-expo
```

## Project structure

```
app/                      # Expo Router routes
  _layout.tsx             # Root layout, fonts, splash handling, contexts
  index.tsx               # Example home screen
  (auth)/                 # Auth group
    signup/index.tsx      # Signup/Login toggle screen
    login/index.tsx       # (placeholder)
    forget-password/...   # (placeholder)
    reset-password/...    # (placeholder)
  onboarding/index.tsx    # Onboarding carousel
  splash/                 # Splash screens

assets/                   # Images and SVGs
components/ui/            # Reusable UI components (e.g., Button, Back)
fonts/                    # Font loading helpers
lib/                      # App utilities and placeholder data
types/                    # Shared TypeScript types

global.css                # Tailwind entry (NativeWind)
tailwind.config.js        # Tailwind/NativeWind config and theme tokens
expo-env.d.ts             # Expo env types
nativewind-env.d.ts       # NativeWind types
app.json                  # Expo app config
eas.json                  # EAS build profiles
metro.config.js           # Metro bundler config
```

## Features

- Expo 54 + React Native 0.81 + React 19
- File-based routing via Expo Router
- TypeScript-first codebase
- NativeWind (Tailwind) styling with custom theme tokens
- Onboarding carousel with `react-native-swiper-flatlist`
- Auth UI flows (signup/login toggle, password visibility toggle, social placeholders)
- Safe area and splash handling

## Styling and theming

- Tailwind classes are provided via NativeWind. See `global.css` and `tailwind.config.js`.
- Custom color tokens defined under `background`, `button`, `text`, `bubble`, `image`, and `stroke` namespaces in Tailwind config.
- Dark mode uses class strategy; you can set a parent `className="dark"` to enable dark palette.

## Fonts

- Uses `@expo-google-fonts` and `useFonts` in `app/_layout.tsx`.
- Update fonts via `useFonts` and add corresponding packages from `@expo-google-fonts/*`.

## Environment and configuration

- Update `app.json` for app name, icons, splash, and permissions.
- Update `eas.json` to configure EAS builds.
- TypeScript config is in `tsconfig.json`; ESLint via `eslint.config.js`.

## Building for devices

Install EAS CLI:

```
npm i -g eas-cli
```

Login and configure:

```
eas login
eas build:configure
```

Trigger builds:

```
eas build -p android
eas build -p ios
```

## Troubleshooting

- If Metro fails to resolve Tailwind classes, ensure NativeWind preset is in `tailwind.config.js` and `global.css` is imported in `app/_layout.tsx`.
- If fonts do not load, verify `useFonts` configuration and installed `@expo-google-fonts/*` packages.
- If iOS/Android run fails, confirm emulators are installed and running, or connect a device with USB debugging enabled.

## License

See `LICENCE` in the repository.
