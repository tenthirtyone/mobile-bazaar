# AngularJS Template

This is a small, modular, AngularJS template. It includes Bootstrap 3 and uses Bower for package management. Automation is setup with Gulp.

## Modular

The app is bisected into login/home submodules. Each is fully contained and includes Controller/Routing/SCSS/HTML/Service/Module files. To create a new submodule copy the 'home' folder and replace variable names. 

For fun, a directive example is contained in the home submodule.

## To dos
  - Add 'general' Bootstrappy designy-whimey things (navbar, side menu, etc)
  - Typescript/Dart for rolling new submodules
  - Setup Unit Test specs/tests

### Version

N/A This is a boilerplate

### Tech

* [AngularJS] - HTML enhanced for web apps!
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [Gulp] - the streaming build system
* [jQuery] - duh

### Installation

You need Gulp installed globally:

```sh
$ npm i -g gulp
```

```sh
$ git clone https://github.com/tenthirtyone/angular_template.git
$ cd angular_template
$ npm install && bower install
$ gulp
```

Gulp is configured to open Google Chrome automatically, if installed. Sometimes this feature is a bit buggy. You will also need ownership/write permissions to your /var/www/html directory. This can be changed by modifying the 'buildDir' variable in gulpfile.js




