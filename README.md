Ember.js Grunt Starter Kit
==========================

This is a [Grunt.js](http://gruntjs.com/) `0.4x` starter project that
gives you everything you need to start developing
[Ember.js](http://emberjs.com) applications.

This is a fork of the [grunt-ember-boilerplate](https://github.com/lsdafjklsd/grunt-ember-boilerplate) project.

The differences:
-----------------------
1. Does not use coffeescript.
2. Includes Bootstrap CSS libraries.
3. Includes JSHINT for linting the JavaScript code.
4. Changed the Application directory from libs to app.
5. Changed the template extension from .handlebars to .hbs.
6. Includes the Moment.js library and EmberHelper for Date formatting.
7. Also includes the localstorage-adapter.js library for testing localstorage.


Instructions
============
You must have npm installed for this to run.

1. Install the Grunt CLI globally
`npm install -g grunt-cli`

2. Clone the repo with your own directory name and remove prior `.git`folder
`git clone https://github.com/dastagg/emberjs-grunt-starter-kit.git your-application-name`
`cd your-application-name && rm -rf .git`

3. Initialize a git repository:
`git init` `git add .` `git commit -m "Initial Commit"`

4. Install project dependencies
`npm install`

Now to develop your application:

First run the `grunt` command. This will do the initial creation of the project.

I use tmux to open three panes but you could also open three terminal windows or tabs.

The first is just open, if I need it for whatever.

The second: I use to run the `grunt watch` command. This will run the default action (which does everything) anytime a file in `apps/` changes.

I have a bash alias `alias webserver='open http://localhost:8000 && python -m SimpleHTTPServer'` to create a local webserver.

The third: cd to the public directory and run `webserver`. This will startup the server and open your browser to the site.

When you want to deploy, run the `grunt precompile` command to generate
a production ready version of the `js/application.js` file.

If you're using the `public/index.html` in production, be sure to delete the live-reload script tag at the bottom of the page.

Develop in the `apps` directory, your generated files end up in the the
`js` and `css` folders in the public directory.

If you are new to Ember, and are not sure how to set up a project, check
out Ryan Florence's
[Ember-tools](https://github.com/rpflorence/ember-tools) That project
provides rails-like-scaffolding, and this project's file structure is based
on that.

Testing
=======
To Be Implemented!

Todos
=====
Add the testing functionallity.

Clean up the structure to combine the app.js and index.js files and move the route.js and store.js files to the routes and models directories (respectively).

Make this an actual grunt project template, versus cloning this repo and deleting the existing `.git` directory.