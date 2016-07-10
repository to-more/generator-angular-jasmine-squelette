'use strict';

var self = this;

var DirectiveBinding = module.exports = function DirectiveBinding(generator){
    self.generator = generator;
};

DirectiveBinding.prototype.bind = function (config) {
    self.generator.nameDirective = config.nameDirective;
    self.generator.templateUrl = config.templateUrl;
    self.generator.directiveModule = config.directiveModule;
}