# remember-who-I-talked-to

Who did I meet at that meetup last year?  Where did I see that person, and what did we talk about?

This will eventually help Mike answer the question, "Where did I meet you?" without looking like an ass by asking the person I'm talking to who they are.

## Are you running this app, or writing code to develop this app?

1. If you're merely running a copy of this app for your own usage, look at the [Setup to run](#Setup-to-run-your-own-instance-of-this-app).
2. If you're going to add or change code in the app - either for your own use, or to contribute a PR (pull request) to the project, look at the [Setup for dev](#Setup-for-ongoing-development).

## Setup to run your own instance of this app

### First-time deployment of this app

I've built this app assuming there's only a single user.  Since the infrastructure is free, and my primary objective is to help myself, this was a reasonable starting assumption.

However, if you're feeling brave/stupid enough to try this on your own, here's how to get an instance going on the latest commit that's on the master branch:

1. Launch a command-line session (e.g. `Terminal` on a Mac)
2. Install NPM, git, firebase CLI and react-scripts tools.
3. Get an account on Google's Firebase (https://console.firebase.google.com/) and Add a new project to host this app and its data.
4. (Fork and) clone this repo:
- 1. Browse to the project (mine or your fork) and click the "Clone or download" button.
- 2. Click the clipboard icon.
- 3. Open your command-line session, `cd` to the folder you want to put this code in and type `git clone ` and then paste the contents of your clipboard.
5. Run `cd WhoDidITalkTo`.
6. Run `cp src/firebase-config.js.sample src/firebase-config.js`.
7. Edit `firebase-config.js` and replace the ALLCAPS placeholders - use the actual values you see when you browse to your new Firebase project and click on "Add Firebase to your web app".
8. Run `firebase init`, choose "Database" and "Hosting", then select defaults for **Database Rules**, **public directory** and **single-page app**.
9. Edit `.firebaserc` and change the Project default name from `whodiditalkto` to match the name you gave it when setting up your new Firebase project.

(Figure out the best way for others to get `react-scripts` on their machine.)

Run `yarn build`
Run `firebase deploy`
Browse to your newly-deployed app and enjoy!

### Synchronize app with updated code

If you've previously deployed the app, and you'd like to deploy a fresher version of the code with new features or bug fixes, here's what you should do:
1. Fire up a Terminal environment (`Terminal` on a Mac, `Git Shell` or equivalent on a Windows box; you Linux geeks already know what to do) and `cd` to the directory where the code is installed (e.g. `cd ~/code/WhoDidITalkTo`)
2. (configure this repo as upstream)
3. (git pull upstream...)
4. (yarn build, firebase deploy)

## Setup for ongoing development

Here's how I got my fresh-installed machine setup for initializing a new React app:

``` shell
(installed homebrew for my Mac) /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install npm
brew install git
cd timeline
npm install -g create-react-app
```

For those of you who fork or clone this repo, if you want to be able to build, test and run the app then perform these steps:

``` shell
brew install yarn
cd WhoDidITalkTo
yarn install
```

Note: I am gravitating to using Yarn as this project's official Node package manager, so only the `yarn.lock` is guaranteed to capture the dependency versions I'm using.  The `package-lock.json` from previous `npm` usage is still lingering, but I'm not slavishly maintaining it, and I'll likely remove it once I'm fully comfortable about the relationship between `yarn` and `npm` (starting with [this article](https://www.sitepoint.com/yarn-vs-npm/)).

## Setup for ongoing deployment

I have implemented build, test and deploy using TravisCI such that every commit to `master` will deploy any "tests-passing build" to my own Firebase project's Hosting environment.  It more or less follows [this article](https://codeburst.io/learning-travis-ci-with-firebase-react-part-2-28a131913e28), but with the following changes:
* don't have to explicitly install `yarn` in the Travis environment (no `install` step in `.travis.yml` - this is now automatic in a Travis project)
* must generate the Travis login token and configure it as a Travis environment variable - see [this article](https://docs.travis-ci.com/user/deployment/firebase/) for a related implementation:
```
firebase login:ci
```
* This will return output similar to the following:
```
$ firebase login:ci

Visit this URL on any device to log in:
https://accounts.google.com/o/oauth2/auth?client_id=long-unique-string.apps.googleusercontent.com&scope=email%20openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloudplatformprojects.readonly%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffirebase%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloud-platform&response_type=code&state=lotsofnumbers&redirect_uri=http%3A%2F%2Flocalhost%3A8001

Waiting for authentication...

✔  Success! Use this token to login on a CI server:

1/1GwC5440OhH2OBMWisanexpensivecar

Example: firebase deploy --token "$FIREBASE_TOKEN"
```
* copied that token value (e.g. "1/1GwC5440OhH2OBMWisanexpensivecar" in my example) and login to my TravisCI project, select Settings, and create a new Environment Variable named FIREBASE_TOKEN with this token value as the "Value" data (and don't change the "Display value in build log" setting so that it remains OFF)

If you wish to make your own source code changes in a fork and automatically deploy each change to your Firebase project (e.g. deploy each merge to `master`) then you can perform the same setup for your own [Travis project](https://travis-ci.org).

## Resources I used in building this code

* https://facebook.github.io/react/tutorial/tutorial.html
* https://facebook.github.io/react/
* https://www.codetutorial.io/reactjs-tutorial-instagram/
* https://appdividend.com/2017/07/22/react-firebase-tutorial/
* https://firebase.googleblog.com/2014/05/using-firebase-with-reactjs.html
* https://dev.codetrick.net/how-to-create-a-reddit-clone-using-react-and-firebase/
* https://css-tricks.com/intro-firebase-react/
* https://css-tricks.com/firebase-react-part-2-user-authentication/
* https://codeburst.io/learning-travis-ci-with-firebase-react-part-2-28a131913e28