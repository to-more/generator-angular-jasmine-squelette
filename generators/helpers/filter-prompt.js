'use strict';

var self = this;

var ControllerPrompt = module.exports = function ControllerPrompt(generator){
    self.generator = generator
};

ControllerPrompt.prototype.promptOptions = function () {
    return [{
        type: 'input',
        name: 'nameFilter',
        message: 'Your filter name',
        default: 'fill here a name for the filter'
    }]
};

ControllerPrompt.prototype.binding = function (answers) {
    self.generator.nameFilter = answers.nameFilter;
};

