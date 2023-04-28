const { concatAll, map } = require("rxjs/operators");
const { ajax } = require("rxjs/ajax");
const { XMLHttpRequest } = require("xmlhttprequest");

ajax({
  createXHR: () => new XMLHttpRequest(),
  url: "https://api.github.com/users/cod3rcursos/repos",
})
  .pipe(
    map((response) => JSON.parse(response.xhr.responseText)),
    concatAll(),
    map((repository) => repository.full_name)
  )
  .subscribe(console.log);
