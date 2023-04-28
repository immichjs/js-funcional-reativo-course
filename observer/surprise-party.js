const readline = require("readline");

function getResponse(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (response) => {
      resolve(response);
      rl.close();
    });
  });
}

function girlfriend() {
  console.log("N: Apagar as luzes");
  console.log("N: Pedir silêncio");
  console.log("N: Surpresa!");
}

function trustee(event) {
  console.log("S: Monitorando o barulho");
  console.log(`S: ${event.response}`);
  console.log(`S: ${event.date}`);
}

async function concierge(interested) {
  while (true) {
    const response = await getResponse("Namorado chegou? > (s/n/q)");

    if (response.toLowerCase() === "s") {
      (interested || []).forEach((observer) => {
        observer({ response, date: Date.now() });
      });
    } else if (response.toLowerCase() === "q") {
      break;
    }
  }
}

concierge([girlfriend, trustee]);
