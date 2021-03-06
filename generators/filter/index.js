'use strict';

var generators = require('yeoman-generator');
var GeneratorBuilder = require('../helpers/generator-builder');

module.exports = generators.Base.extend({
    // The name `constructor` is important here
	constructor: function () {
	    // Calling the super constructor is important so our generator is correctly set up
	    generators.Base.apply(this, arguments);
        this.generatorBuilder = new GeneratorBuilder(this, 'filter');
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
                this.templatePath('_filter.js'),
                this.destinationPath('test/filters/' + this.nameFilter + '.js'), {
                    filter_name: this.nameFilter
                }
            );
        }
    }
});
