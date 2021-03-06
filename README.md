# Who Did I Talk To, aka "That F'n Guy"

You know that feeling at meetups where someone recognizes you, but you have no idea where from? What you must've talked about so extensively that they're referencing it?  All that?

Man, is it just me?

I got tired of disappointing people so often, so I created an application that presents me a timeline of all the new people I've met, where and when, their picture and what we talked about.  I can quickly skim the timeline to refresh myself on people I'm likely to bump into, so they get the same warm feeling of being recognized that I get when they recognize me.

![Current UI for this web app](/assets/WhoDidITalkTo_v0.2.0.png "Here's how she looks")

Note: the URL you see is my personal deployment, and is subject to massive architectural changes, data loss and blocking logins if I start getting charged by Google.  Use at your own risk!

Longer note: I have no idea whether this is something anyone will care about using...but if it was, and if a large number of folks piled on to my Google Firebase hosting account, well...that's no beuno.  "That'd be a nice problem to have", except I've noticed lately that once people get something for free, there is a vocal number of anonymous folks on the interwebs who (a) scream when it's taken away or (b) actively sabotage efforts to cover costs let alone make a standalone business out of it.  I'm new to this game, and while I'm pretty sure there's no profitable future in this, I also don't want to leave myself wide open to the mess that is enraged anonymous freebie users.  I don't need that kind of stress in my life - corporate life has taken plenty of licks already.

## Are you running this app, or writing code to develop this app?

1. If you're merely running a copy of this app for your own usage, look at the [Setup to run](#Setup-to-run-your-own-instance-of-this-app).
2. If you're going to add or change code in the app - either for your own use, or to contribute a PR (pull request) to the project, look at the [Setup for dev](#Setup-for-ongoing-development).

## Setup to run your own instance of this app

### First-time deployment of this app

I started out building this app with the assumption there's only a single user.  Since the infrastructure is free, and my primary objective is to help myself, this was a reasonable starting assumption.

I've since had to implement per-user data storage to ensure I could secure read & write of my data from anyone else who stumbled on this little app, but I haven't thoroughly verified if this works for others.  AND I have no intention of incurring real $$ costs by hosting any reasonable # of users on my personal Google Cloud account.

So, if you're feeling brave/stupid enough to try this on your own, here's how to get an instance going on your own deployment (assumes we're using the latest commit on the master branch, and assumes you *aren't* interested in also using TravisCI for automated build and deploy):

1. Launch a command-line session (e.g. `Terminal` on a Mac)
2. Install NPM, git, yarn and firebase CLI tools (see below for explicit instructions).
3. Get an account on Google's Firebase (https://console.firebase.google.com/) and **Add a new project** to host the app code and its data.
4. (Fork and) clone this repo:
- 1. Browse to the project (mine or your fork) and click the **Clone or download** button.
- 2. Click the clipboard icon.
- 3. Open your command-line session, `cd` to the folder you want to store this code in, type `git clone` and then paste the contents of your clipboard.
5. Run `cd WhoDidITalkTo`.
6. Run `cp src/firebase-config.js.sample src/firebase-config.js`.
7. Edit `firebase-config.js` and replace the ALLCAPS placeholders, using the actual values (e.g. replace APIKEY with the value of **apiKey**) you see when you browse to your new Firebase project & click **Add Firebase to your web app**.
8. Run `firebase init`, choose "Database" and "Hosting", then select defaults for **Database Rules**, **public directory** and **single-page app**.
9. Edit `.firebaserc` and change the Project `default` name from **whodiditalkto** to match the name you gave it when setting up your new Firebase project.
10. Run `yarn install` to get all the tools and dependencies onto your system for this project.
11. Run `yarn build` to generate deployable code.
12. Run `firebase deploy` to push that build to your Firebase project.

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
cd WhoDidITalkTo
npm install -g create-react-app
```

For those of you who fork or clone this repo, if you want to be able to build, test and run the app then perform these steps:

``` shell
brew install yarn
cd WhoDidITalkTo
yarn install
```

And if you'd like to deploy a production build of the code to your own Firebase project (direct from your computer, rather than via TravisCI or similar):

``` shell
npm install -g firebase-tools
```

If you wish to run tests locally, and you're using MacOS, per [Facebook guidance and many bug reports](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#troubleshooting) you may need to install `watchman` - which on MacOS is as easy as:

```
brew install watchman
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
* https://www.firebase.com/docs/security/guide/securing-data.html#section-dollar-variables
* https://codeburst.io/learning-travis-ci-with-firebase-react-part-2-28a131913e28
* https://facebook.github.io/jest/docs/en/tutorial-react.html
* https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#troubleshooting
