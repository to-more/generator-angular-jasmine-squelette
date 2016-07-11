'use strict';

var generators = require('yeoman-generator');
var GeneratorBuilder = require('../helpers/generator-builder');

module.exports = generators.Base.extend({
    // The name `constructor` is important here
	constructor: function () {
	    // Calling the super constructor is important so our generator is correctly set up
	    generators.Base.apply(this, arguments);
        this.generatorBuilder = new GeneratorBuilder(this, 'directive');
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
                this.templatePath('_directive.js'),
                this.destinationPath('test/directives/' + this.nameDirective + '.js'), {
                    directive_name: this.nameDirective,
                    directive_template: this.templateUrl,
                    directive_module: this.directiveModule
                }
            );
        }
    }
});
