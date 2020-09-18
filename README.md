# AppGenerator
![](./demo.gif)

## Installation
## Install Node
First, make sure you have Node.js installed (12 or later). You can do this by opening a terminal and running ```node -v```. If not you can install it 
[here](https://nodejs.org/en/download/package-manager/). There's usually two versions to choose from, pick the one that says LTS (Long Term Support) after the version number.
## Installing dependencies
The instructions are a bit different depending on your operating system Follow these [instructions](https://reactnative.dev/docs/environment-setup)

## Install modules
in the root directory run the following command 
```sh
npm install
```

## Run the application
to test the application you need to generate `Data.json` from [here](https://backoffice-35933.firebaseapp.com/signin)
and place it in the ![assets folder](./assets)
#### Running On Device
follow these [instructions](https://reactnative.dev/docs/running-on-device)

#### Start Metro
```sh
npx react-native start
```

#### Start the application
Let Metro Bundler run in its own terminal. Open a new terminal inside your React Native project folder. Run the following:
##### android

```sh
npx react-native run-android
```
##### android

##### for more visibility you can follow these [Instructions](https://reactnative.dev/docs/environment-setup)
