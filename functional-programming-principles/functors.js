function SecurityType(value) {
  return {
    value,
    invalid() {
      return this.value === null || this.value === undefined;
    },
    map(fn) {
      if (this.invalid()) {
        return SecurityType(null);
      }

      const newValue = this.value;
      return SecurityType(fn(newValue));
    },
    flatMap(fn) {
      return this.map(fn).value;
    },
  };
}

const original = "Esse é um texto";
const altered = SecurityType(original)
  .map((t) => t.toUpperCase())
  .map((t) => `${t}!!!!`)
  .flatMap((t) => t.split("").join(" "));

console.log(original, altered);
