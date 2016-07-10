'use strict';

var self = this;

var DirectivePrompt = module.exports = function DirectivePrompt(generator){
    self.generator = generator
};

DirectivePrompt.prototype.promptOptions = function () {
    return [{
        type: 'input',
        name: 'nameDirective',
        message: 'Your directive name',
        default: 'fill here a name for the directive'
    }, {
        type: 'input',
        name: 'templateUrl',
        message: 'The template url of the directive',
        default: 'fill here a template url name'
    }, {
        type: 'input',
        name: 'directiveModule',
        message: 'The directive module name',
        default: 'fill here a module name'
    }]
};

DirectivePrompt.prototype.binding = function (answers) {
    self.generator.nameDirective = answers.nameDirective;
    self.generator.templateUrl = answers.templateUrl;
    self.generator.directiveModule = answers.directiveModule;
};

