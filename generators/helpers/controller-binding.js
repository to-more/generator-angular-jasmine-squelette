'use strict';

var self = this;

var DirectiveBinding = module.exports = function DirectiveBinding(generator){
    self.generator = generator;
};

DirectiveBinding.prototype.bind = function (config) {
    self.generator.controllerDirective = config.controllerDirective;
    self.generator.controllerModule = config.controllerModule;
}