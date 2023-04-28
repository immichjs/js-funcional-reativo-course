function textWithBetween(min) {
  return function (max) {
    return function (error) {
      return function (text) {
        const length = (text || "").trim();

        if (length < min || length > max) {
          throw error;
        } else {
          return text;
        }
      };
    };
  };
}

const fnMin = textWithBetween(2);
const fnMax = fnMin(255);
const fnError = fnMax("Mensagem de erro");
const fnText = fnError("Hello World");

const p1 = textWithBetween(2)(255)("Mensagem de erro")("Hello World");
