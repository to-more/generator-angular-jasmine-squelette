'use strict';


var chalk = require('chalk');
var yosay = require('yosay');
var generators = require('yeoman-generator');
var assert = require('yeoman-assert');
var GeneratorBuilder = require('../helpers/generator-builder');

module.exports = generators.Base.extend({
    // The name `constructor` is important here
	constructor: function () {
	    // Calling the super constructor is important so our generator is correctly set up
	    generators.Base.apply(this, arguments);
        this.generatorBuilder = new GeneratorBuilder(this, 'controller');
        this.nameDirective = 'controller-test';
        this.generatorBuilder.registerOptions();
        this.generatorBuilder.registerArguments();
        this.generatorBuilder.welcome();
        this.generatorBuilder.build();
    },

    prompting: function () {
        var prompt = this.generatorBuilder.buildPrompting();
        if(prompt != undefined){
            prompt.prompting();
        }
    },

	writing: {
        config: function () {
            this.fs.copyTpl(
                this.templatePath('_controller.js'),
                this.destinationPath('test/controllers/' + this.nameDirective + '.js'), {
                    controller_name: this.nameController ,
                    controller_module: this.controllerModule
                }
            );
        }
	}
});
