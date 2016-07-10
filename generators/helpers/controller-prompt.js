'use strict';

var self = this;

var ControllerPrompt = module.exports = function ControllerPrompt(generator){
    self.generator = generator
};

ControllerPrompt.prototype.promptOptions = function () {
    return [{
        type: 'input',
        name: 'nameController',
        message: 'Your controller name',
        default: 'fill here a name for the controller'
    }, {
        type: 'input',
        name: 'controllerModule',
        message: 'The controller module name',
        default: 'fill here a module name'
    }]
};

ControllerPrompt.prototype.binding = function (answers) {
    self.generator.nameController = answers.nameController;
    self.generator.controllerModule = answers.controllerModule;
};

