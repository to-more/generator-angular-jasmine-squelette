'use strict';

var self = this;

var ControllerBinding = module.exports = function ControllerBinding(generator){
    self.generator = generator;
};

ControllerBinding.prototype.bind = function (config) {
    self.generator.nameController = config.nameController;
    self.generator.controllerModule = config.controllerModule;

}