"use strict";

import data from "./data.json";

const descriptionMap = {};
const codeMap = {};

const mapCodeAndDescription = item => {
  descriptionMap[item.description.toLowerCase()] = item.code;
  codeMap[item.code] = item.description;
};

data.forEach(mapCodeAndDescription);

export const getCode = description => descriptionMap[description.toLowerCase()];

export const getCodes = () => data.map(item => item.code);

export const getCodeList = () => codeMap;

export const getDescription = code => codeMap[code];

export const getDescriptions = () => data.map(item => item.description);

export const getDescriptionList = () => descriptionMap;

export const getData = () => data;
