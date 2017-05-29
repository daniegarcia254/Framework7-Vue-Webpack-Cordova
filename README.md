# Framework7 Vue + Webpack + Cordova App Template

A full-featured Framework7 + Vue + Webpack setup with hot-reload & css extraction.

Based on [Framework7-Vue-Webpack-Template](https://github.com/nolimits4web/Framework7-Vue-Webpack-Template.git).


## Pre-requisites
### Node.js
``` bash
# install Node.js and NPM
curl -sL https://deb.nodesource.com/setup_7.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt-get install nodejs
sudo apt-get install build-essential
```

### Cordova
``` bash
# install Cordova
npm install -g cordova
```

### Java SDK
To install Java please refer to the [following guide](https://www.digitalocean.com/community/tutorials/como-instalar-java-con-apt-get-en-ubuntu-16-04-es).


### Android SDK Tools
Go to [Android Studio download page](https://developer.android.com/studio/index.html), scroll down to the bottom of the page and copy the link to download the sdk-tools for Linux:
``` bash
wget https://dl.google.com/android/repository/sdk-tools-linux-3859397.zip
```

Unzip the package and move it to "/usr/local/android-sdk"
``` bash
unzip tools_r25.2.3-linux.zip -d /usr/local/
mv /usr/local/tools /usr/local/android-sdk-linux
```

Install the necessary Android SDK and packages
``` bash
# List all  the available packages
/usr/local/android-sdk-linux/tools/bin/sdkmanager --list
# Install the tools and platform-tools packages
/usr/local/android-sdk-linux/tools/bin/sdkmanager "tools" "platform-tools"
# Install the SDK (the version that you want)
/usr/local/android-sdk-linux/tools/bin/sdkmanager "build-tools;25.0.3" "platforms;android-25" "sources;android-25"
# Update the packages installed
/usr/local/android-sdk-linux/tools/bin/sdkmanager --update
``` 

Set enviroment vars
``` bash
# Edit the file
vim /home/<user>/.bashrc
# And add the following lines at the end
export ANDROID_HOME="/usr/local/android-sdk-linux"
export ANDROID_TOOLS="/usr/local/android-sdk-linux/tools"
export ANDROID_PLATFORM_TOOLS="/usr/local/android-sdk-linux/platform-tools"
export PATH="$PATH:$ANDROID_HOME:$ANDROID_TOOLS:$ANDROID_PLATFORM_TOOLS"
# Refresh
source /home/<user>/.bashrc
```

## Build Setup
Once you have all the pre-requisites installed, clone this repo and have some fun:

``` bash
# install dependencies
npm install

# serve project with hot reload at localhost:10000
# port can be configured in config/index.js file
npm run dev

# build for production with minification
npm run build

# Add to the project with Cordova the platforms for Android, iOS or browser
npm run cordova-add-android
npm run cordova-add-ios
npm run cordova-add-browser

# build the app for the given platform
npm run cordova-build-android
npm run cordova-build-ios
npm run cordova-build-browser

# Run the project on the given platform
npm run cordova-run-android
npm run cordova-run-ios
npm run cordova-run-browser
```

## Project Structure

* `src/assets` - folder with static assets (images)
* `src/components` - folder with custom `.vue` components
* `src/css` - put custom app CSS styles here. Don't forget to import them in `main.js`
* `src/pages` - app `.vue` pages
* `src/main.js` - main app file where you include/import all required libs and init app
* `src/routes.js` - app routes
* `src/app.vue` - main app structure/component
