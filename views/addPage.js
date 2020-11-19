const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">

    <div class="form-group">
      <label for="author" class="col-sm-2 control-label">Author Name</label>
      <div class="col-sm-10">
        <input id="author" name="author" type="text" class="form-control"/>
      </div>
    </div>

    <div class="form-group">
      <label for="email" class="col-sm-2 control-label">Author Email</label>
      <div class="col-sm-10">
        <input id="email" name="email" type="text" class="form-control"/>
      </div>
    </div>

    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div class="form-group">
      <label for="content" class="col-sm-2 control-label">Page Content</label>
      <div class="col-sm-10">
        <textarea id="content" name="content" type="text" class="form-control"> </textarea>
      </div>
    </div>

<div class="form-check">
  <input class="form-check-input" type="radio" name="status" id="status-open" value="open" checked>
  <label class="form-check-label" for="status-open">
    Open
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="status" id="status-closed" value="closed">
  <label class="form-check-label" for="exampleRadios2">
    Closed
  </label>
</div>


    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

  </form>
`);
