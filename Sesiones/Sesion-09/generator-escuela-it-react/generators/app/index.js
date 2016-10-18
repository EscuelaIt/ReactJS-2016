var yeoman = require('yeoman-generator')
var chalk = require('chalk')
var yosay = require('yosay')
var slugify = require('underscore.string/slugify')
var pascalCase = require('pascal-case')

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the astonishing ' + chalk.red('Escuela IT') + ' generator!'
    ))

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'What is your module name ( ex.: "your-module-name" )',
      default: slugify(this.appname) // Default to current folder name
    }, {
      type: 'input',
      name: 'git_url',
      message: 'What is your module remote git repository url',
      required: true
    }]

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer
      this.props = props
      this.props.pascalName = pascalCase(props.name)
    }.bind(this))
  },
  writing: function () {
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      this.props
    )

    this.fs.copyTpl(
      this.templatePath('_webpack.config.base.babel.js'),
      this.destinationPath('webpack.config.base.babel.js'),
      this.props
    )

    this.fs.copyTpl(
      this.templatePath('_webpack.config.dev.babel.js'),
      this.destinationPath('webpack.config.dev.babel.js'),
      this.props
    )

    this.fs.copyTpl(
      this.templatePath('_webpack.config.gh-pages.babel.js'),
      this.destinationPath('webpack.config.gh-pages.babel.js'),
      this.props
    )

    this.fs.copyTpl(
      this.templatePath('_webpack.config.prod.babel.js'),
      this.destinationPath('webpack.config.prod.babel.js'),
      this.props
    )
    this.fs.copy(
      this.templatePath('examples/_index.js'),
      this.destinationPath('examples/index.js')
    )

    this.fs.copyTpl(
      this.templatePath('examples/_index.html'),
      this.destinationPath('examples/index.html'),
      this.props
    )

    this.fs.copyTpl(
      this.templatePath('examples/components/_index.scss'),
      this.destinationPath('examples/components/index.scss'),
      this.props
    )

    this.fs.copyTpl(
      this.templatePath('examples/components/_App.js'),
      this.destinationPath('examples/components/App.js'),
      this.props
    )

    this.fs.copyTpl(
      this.templatePath('src/_index.js'),
      this.destinationPath('src/index.js'),
      this.props
    )

    this.fs.copyTpl(
      this.templatePath('src/_index.scss'),
      this.destinationPath('src/index.scss'),
      this.props
    )
  },

  install: function () {
    this.installDependencies()
  }
})
