'use strict';

var self = this;

var FilterBinding = module.exports = function FilterBinding(generator){
    self.generator = generator;
};

FilterBinding.prototype.bind = function (config) {
    self.generator.nameFilter = config.nameFilter;
}