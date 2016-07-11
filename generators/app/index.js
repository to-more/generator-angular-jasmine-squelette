'use strict';

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    prompting: function(){
        var done = this.async();
        this.prompt([
            {
                type    : 'confirm',
                name    : 'runControllers',
                message : 'Would you like to run controller generator',
                default: true
            },
            {
                type    : 'confirm',
                name    : 'runDirectives',
                message : 'Would you like to run directive generator',
                default: true
            },
            {
                type    : 'confirm',
                name    : 'runFilter',
                message : 'Would you like to run filter generator',
                default: true
            }
        ], function(anwsers){
            this.runControllers = anwsers.runControllers;
            this.runDirectives = anwsers.runDirectives;
            this.runFilter = anwsers.runFilter;
            done();
        }.bind(this))
    },
    composeWithController: function(){
        if(this.runControllers){
            this.composeWith('angular-jasmine-squelette:controller', {options: {'skip-welcome-message': 'skip-welcome-message'}})
        }
    },
    composeWithDirective: function(){
        if(this.runDirectives){
            this.composeWith('angular-jasmine-squelette:directive', {options: {'skip-welcome-message': 'skip-welcome-message'}});
        }
    },
    composeWithFilter: function(){
        if(this.runFilter){
            this.composeWith('angular-jasmine-squelette:filter', {options: {'skip-welcome-message': 'skip-welcome-message'}});
        }
    }
});
