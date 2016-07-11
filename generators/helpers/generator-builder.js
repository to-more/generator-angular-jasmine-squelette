'use strict';

var assert = require('yeoman-assert');
var yosay = require('yosay');
var DirectivePrompt = require('./directive-prompt');
var ControllerPrompt = require('./controller-prompt');
var FilterPrompt = require('./filter-prompt');
var DirectiveBinding = require('./directive-binding');
var ControllerBinding = require('./controller-binding');
var FilterBinding = require('./filter-binding');

var self = this;

var bindings = {
    "directive": DirectiveBinding,
    "controller": ControllerBinding,
    "filter": FilterBinding
};

var prompt = {
    "directive": DirectivePrompt,
    "controller": ControllerPrompt,
    "filter": FilterPrompt
};

var GeneratorBuilder = module.exports = function GeneratorBuilder(generator, type){
    self.generator = generator;
    self.prompt = new prompt[type](self.generator);
    self.binding = new bindings[type](self.generator);
};

GeneratorBuilder.prototype.registerArguments = function() {
    self.generator.argument('config', {type: String, required: false});
};

GeneratorBuilder.prototype.registerOptions = function() {
    self.generator.option('skip-welcome-message', {
        desc: 'Skips the welcome message',
        type: Boolean
    });
    self.generator.option('skip-prompt', {
        desc: 'Skips the prompt',
        type: Boolean
    });
};

GeneratorBuilder.prototype.welcome = function(){
    if (!self.generator.options['skip-welcome-message']) {
        self.generator.log(yosay('I generate some code for you to test angular app with jasmine')
        )
    }
};

GeneratorBuilder.prototype.buildPrompting = function(){
    var prompt = undefined;
    if (!self.generator.options['skip-prompt']) {
        var prompting = function () {
            var done = self.generator.async();
            self.generator.prompt(
                self.prompt.promptOptions(),
                function (answers) {
                    self.prompt.binding(answers);
                    done();
            }.bind(self.generator));
        };
        prompt = { prompting: prompting }
    }
    return prompt;
};

GeneratorBuilder.prototype.build = function(){
    if(self.generator.config != undefined){
        assert.file(self.generator.config);
        var config = self.generator.fs.readJSON(self.generator.config);
        self.binding.bind(config);
    }
};