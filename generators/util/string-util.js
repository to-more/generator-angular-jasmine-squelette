'use strict';

var self = this;

var StringUtil = module.exports = function StringUtil(){};

StringUtil.prototype.capitalize = function(uncapitalize){
    return uncapitalize.charAt(0).toUpperCase() + uncapitalize.slice(1);
};

StringUtil.prototype.splitByCaseAndLower = function(string){
    return string.split(/(?=[A-Z])/).map(function(s) {
        return s.toLowerCase();
    });
};
