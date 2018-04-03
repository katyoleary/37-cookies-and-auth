![cf](https://i.imgur.com/7v5ASc8.png) Lab 37: Cookies & Auth
======

## Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* Open a pull request to this repository
* Submit on canvas a question and observation, how long you spent, and a link to your pull request

## Configuration
Configure the root of your repository with the following files and directories. Thoughtfully name and organize any additional configuration or module files.
* **README.md** - contains documentation
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file
* **.eslintrc.json** - contains the course linter configuration
* **.eslintignore** - contains the course linter ignore configuration
* **.babelrc** - contains babel config
* **package.json** - contains npm package config
* **webpack.config.js** - contains webpack config
* **src/** - contains the frontend code
* **src/components/** - contains your components
* **src/main.js** - contains the entire app
* **src/style** - containing your `.scss` partials and styles
* **src/style/main.scss** - contains the entry point for `.scss` partials

## Feature Tasks
##### Minimum Requirements

### Components
Granted you are following the file system organization and component naming conventions presented during lecture, your components should be organized as follows:

```html
<App />
  <Provider /> 
    <BrowserRouter />
      <LandingContainer />
        <AuthForm />
```

### Clone Sluggram
Clone, configure and run the [sluggram](http://github.com/slugbyte/sluggram) application.

### Create a Frontend
This week, you'll be creating a frontend application for a social media style gallery and image uploading application.  Your job will be to create a frontend that utilizes a locally cloned version of the *sluggram-backend* API and follows react and redux best practices.  The naming, creation, and organization of your application components are up to you.  That said, the following requirements should be accounted for in order to consider today's assignment complete:
* there should be a `<LandingPage>` component (or similar) that contains an `<AuthForm>` component (or similar).  This component should enable the ability for a user to *sign up* or *sign in*.
* on *sign up* or *sign in*, the users authentication token should be stored in a cookie or `localStorage`
