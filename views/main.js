const html = require("html-template-tag");
const layout = require("./layout");
const urlString = 'http://localhost:3000/wiki/'

/* function createLink(page) {
  return ;
} */

module.exports = (pages) => layout(html`
  <h3>Pages</h3>
  <hr>
  <form method="GET" action="/wiki/search">
    <input type="text" name="search" />
    <button type="submit">Search</button>
  </form>
  <hr>
  <ul class="list-unstyled">
    <ul>
      <!-- PLACEHOLDER LIST OF PAGES -->
      ${pages.map(page => html`<li> <a href=${urlString}${page.slug}>${urlString}${page.slug} </a> </li>`)}
    </ul>
  </ul>`);
