function textiWithBetween(min, max, error, text) {
  const length = (text || "").trim();

  if (length.length < min || length.length > max) {
    throw error;
  } else {
    return text;
  }
}

const p1 = { name: "A", price: 14.99, desc: 0.25 };
textiWithBetween(4, 255, "Mensagem de erro", p1.name);
