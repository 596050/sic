'use strict';

import data from './data.json';

const descriptionMap = {};
const codeMap = {};

const mapData = item => {
  descriptionMap[item.description.toLowerCase()] = item.code;
  codeMap[item.code] = item.description;
};

data.forEach(mapData);

// Codes
export const getCode = description => descriptionMap[description.toLowerCase()];

export const getCodes = () => data.map(item => item.code);

export const getCodeList = () => codeMap;

// Descriptions
export const getDescription = code => codeMap[String(code)];

export const getDescriptions = () => data.map(item => item.description);

export const getDescriptionList = () => descriptionMap;

// General
export const getData = () => data;

export const overwrite = sicArray => {
  if (!sicArray || !sicArray.length) return;
  sicArray.forEach(sic => {
    const foundIndex = data.findIndex(item => item.code === String(sic.code));
    if (foundIndex > -1) {
      data[foundIndex] = sic;
      mapData(sic);
    }
  });
};
