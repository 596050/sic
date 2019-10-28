"use strict";

var data = require("./data.json");

var descriptionMap = {};
var codeMap = {};
data.forEach(mapCodeAndDescription);

function mapCodeAndDescription(item) {
  descriptionMap[item.description.toLowerCase()] = item.code;
  codeMap[item.code.toLowerCase()] = item.description;
}

exports.overwrite = function overwrite(descriptions) {
  if (!descriptions || !descriptions.length) return;
  descriptions.forEach(function(item) {
    var foundIndex = data.findIndex(function(item) {
      return item.code === item.code;
    });
    data[foundIndex] = item;
    mapCodeAndDescription(item);
  });
};

exports.getCode = function getCode(description) {
  return descriptionMap[description.toLowerCase()];
};

exports.getCodes = function getCodes() {
  return data.map(function(item) {
    return item.code;
  });
};

exports.getDescription = function getDescription(code) {
  return codeMap[code.toLowerCase()];
};

exports.getDescriptions = function getDescriptions() {
  return data.map(function(item) {
    return item.description;
  });
};

exports.getCodeList = function getCodeList() {
  return codeMap;
};

exports.getDescriptionList = function getDescriptionList() {
  return descriptionMap;
};

exports.getData = function getData() {
  return data;
};
