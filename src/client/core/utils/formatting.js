import React from "react";
export default {
  newLineToBreak: str => str.replace(/(?:\r\n|\r|\n)/g, "<br/>"),
  firstLetterToUppercase: string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
  renderMultiLine: text => {
    return (
      text &&
      text.split(/\n|\\n/g).map((line, index) => (
        <React.Fragment key={index}>
          {line.trim()} <br />
        </React.Fragment>
      ))
    );
  },
  objectToQueryString: params => {
    return Object.keys(params)
      .map(key => key + "=" + params[key])
      .join("&");
  },
  toTitleCase: str => {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  },
  toCamelCase: str => {
    return str.replace(/-([a-z])/g, function(m, s) {
      return s.toUpperCase();
    });
  },
};
