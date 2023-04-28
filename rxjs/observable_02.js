const { Observable } = require("rxjs");

const obs = Observable.create((subscriber) => {
  subscriber.next("RxJs");
  subscriber.next("é");
  subscriber.next("bem");
  subscriber.next("poderoso");

  if (Math.random() > 0.5) {
    subscriber.complete();
  } else {
    subscriber.error("Que problema?");
  }
});

obs.subscribe({
  next: (value) => console.log(`Valor: ${value}`),
  error: (error) => console.log(`Erro: ${error}`),
  complete: () => console.log("Fim"),
});
