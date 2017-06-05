# Login App Template with Framework7 Vue + Webpack2 + Cordova

A full-featured Framework7 + Vue + Webpack2 setup with hot-reload.

Based on [Framework7 - Vue - Webpack Cordova Template](https://github.com/centrual/cordova-template-framework7-vue-webpack).


## Pre-requisites
### Node.js
``` bash
# install Node.js and NPM
sudo apt-get update
curl -sL https://deb.nodesource.com/setup_7.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt-get install nodejs
sudo apt-get install build-essential
```

### Cordova
``` bash
# install Cordova
sudo npm install -g cordova

# install packages to generate Icons and Splashscreen for the app
sudo apt-get install imagemagick
sudo npm install splashicon-generator -g
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
# Install dependencies
npm install

# Add cordova platforms
cordova platform add browser android

# Serve project with browser hot reload
# Default host: localhost IP
# Defult port: 8081
HOST="myhost.com" PORT="10001" npm run hot-dev

# The project will be served in HOST:8000, from there, you will be redirected to HOST:PORT
# To change also the cordova browser port (80000), you can change it in "platforms/browser/cordova/run" file

# You also can serve the project with simultaneous hot reload at your android/ios device and the browser
HOST="myhost.com" PORT="10001" npm run hot-dev-ios
HOST="myhost.com" PORT="10001" npm run hot-dev-android
# These commands of course will run the emulator for the selected platform
```

### Note
When you run the app using the browser platform, if you don't want the browser to auto-open,
change the next line in the file "platforms/browser/cordova/run":
	//return cordovaServe.launchBrowser({target: args.target, url: projectUrl});
        return cordovaServe;


## Project Structure

* `src/static` - folder with static assets (images)
* `src/assets/css` - put custom app CSS styles here. Don't forget to import them in `main.js`
* `src/assets/sass` - put custom app SASS styles here. Don't forget to import them in `main.js`
* `src/assets/vue/pages` - app `.vue` pages
* `src/main.js` - main app file where you include/import all required libs and init app
* `src/routes.js` - app routes
* `src/main.vue` - main app structure/component
* `src/index.html` - index file

## Generate Icons and Splashscreens
``` bash
# In the folder 'src/static' should exist two files: icon.png && splash.png
npm run generate-icon-splash
```
