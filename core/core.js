const { remote, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

// document.getElementById("min-btn").addEventListener("click", function (e) {
//      var window = remote.getCurrentWindow();
//      window.minimize();
// });
//
// document.getElementById("max-btn").addEventListener("click", function (e) {
//      var window = remote.getCurrentWindow();
//      if (!window.isMaximized()) {
//          window.maximize();
//      } else {
//          window.unmaximize();
//      }
// });

//Nav Object
const navar = document.getElementById("navbar");
function appendObjectToNav(msg = '', class_ = '') {
  const div = document.createElement('div');
  if (class_ != '') div.className = class_;
  div.innerHTML = msg;
  navar.appendChild(div);
}

//Body Object
const body = document.getElementById("body");
function appendObjectToBody(msg = '') {
  const div = document.createElement('div');
  div.innerHTML = msg;
  body.appendChild(div);
}

//Footer Object
const footer = document.getElementById("footer");
function appendObjectToFooter(msg = '', class_ = '') {
  const div = document.createElement('div');
  if (class_ != '') div.className = class_;
  div.innerHTML = msg;
  footer.appendChild(div);
}

// When a new message is received:
logo = " \
        <a class='navbar-brand' href='#'> \
          <div class='logo-grid'> \
            <div class='item1'> <img src='./img/iu_logo.png' alt='' style='width:75%'> </div> \
            <div class='item2'>Library</div> \
            <div class='item3'>International University</div> \
          </div> \
        </a> \
        <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarColor01' \
          aria-controls='navbarColor01' aria-expanded='false' aria-label='Toggle navigation'> \
          <span class='navbar-toggler-icon'></span> \
        </button>'); \
";

nav = '\
        <div class="collapse navbar-collapse" id="navbarColor01"> \
          <ul class="navbar-nav mr-auto"> \
            <li class="nav-item active"> \
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> \
            </li> \
            <li class="nav-item"> \
              <a class="nav-link disabled" href="#">Services</a> \
            </li> \
            <li class="nav-item"> \
              <a class="nav-link disabled" href="#">Research</a> \
            </li> \
            <li class="nav-item"> \
              <a class="nav-link disabled" href="#">Request</a> \
            </li> \
            <li class="nav-item"> \
              <a class="nav-link disabled" href="#">Accounts</a> \
            </li> \
            <li class="nav-item"> \
              <a class="nav-link disabled" href="#">About</a> \
            </li> \
          </ul> \
        </div>';

searchBox = '\
        <div class="input-bar-item"><input class="mr-sm-0" type="text" placeholder="Search something here..."></div> \
        <div class="input-bar-item"><button class="btn btn-secondary my-2 my-sm-2">Search</button></div> \
  ';

welcomeBody = '  \
<div class="welcome no-transparent">  \
  <h1 class="display-3">Welcome to <br>IU Library!</h1>  \
  <h3 class="lead"> Brief newsletter today</h3>  \
  <hr style="width:80%" class="my-4"/>  \
  <h4 class="lead"> >> UWE Student: Take home exam tips</h4>  \
  <h4 class="lead"> >> 21 April: Vietnam Book Day</h4>  \
  <h4 class="lead"> >> Library Opening Hours</h4>  \
  <hr style="width:80%" class="my-4"/>  \
  <p class="lead">  \
    <a class="btn btn-primary" href="https://library.hcmiu.edu.vn/" role="button">Learn more</a>  \
  </p>  \
</div>  \
<div class="middle">  \
  <div class="or-spacer-vertical right">  \
    <div class="mask"></div>  \
  </div>  \
</div>  \
<div class="loginform no-transparent">  \
  <form name="loginForm"">  \
    <fieldset>  \
      <legend>  \
        <h1>Login</h1>  \
      </legend>  \
      <div class=" form-group">  \
          <label for="inputID">User ID </label>  \
    <input type="text" class="form-control" id="inputID" name="userID" aria-describedby="IDHelp"  \
      placeholder="Enter your ID" required>  \
    <small id="IDHelp" class="form-text text-muted">Student ID for Student and Lecturer emailname for  \
      Lecturer.</small>  \
</div>  \
<div class="form-group">  \
  <label for="inputPassword">Password</label>  \
  <input type="password" class="form-control" id="inputPassword" name="userPassword" placeholder="Password"  \
    required>  \
</div>  \
<div class="form-group">  \
  <label for="selectRole">I am a </label>  \
  <select class="form-control role" id="inputRole" name="userRole" required>  \
    <option value="" selected disabled>Please select your own role</option>  \
    <option value="Student">Student</option>  \
    <option value="Lecturer">Lecturer</option>  \
    <option value="Staff">Staff</option>  \
    <option value="Admins">Admin</option>  \
  </select>  \
</div>  \
</fieldset>  \
</form>  \
<button id="btn-login" class="btn btn-primary">Login</button>  \
</div>  \
<div id="clear"></div>  \
';

mainBody = '\
<h1> Hi </h1> \
';

copyright = 'PDM Project &copy 2020 - App by Mai Oanh - Trương Đạt - Minh Quan';

status = 'Status <span class="badge badge-pill badge-danger">Anonymous</span>';

closeButton = ' \
        <button id="close-btn" type="button" class="close-btn btn btn-primary">QUIT</button> \
        </footer> \
';

//add to browser
appendObjectToNav(logo);
appendObjectToNav(nav);
appendObjectToNav(searchBox, 'input-bar');
appendObjectToBody(welcomeBody);
appendObjectToFooter(closeButton);
appendObjectToFooter(copyright, 'copyright-div');
appendObjectToFooter(status, 'status-div');

//get the close_modal
var close_modal = document.getElementById("close-modal");

// When the user clicks on the button, open the modal
document.getElementById("close-btn").addEventListener("click", function (e) {
  close_modal.style.display = "block";
});

//when the user clicks yes on close modal, off the program
document.getElementById("btn-close-yes").addEventListener("click", function (e) {
  var window = remote.getCurrentWindow();
  window.close();
});

//when the user clicks x, dothing
document.getElementById("btn-close-x").addEventListener("click", function (e) {
  close_modal.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close modal
window.onclick = function (event) {
  if (event.target == close_modal) {
    close_modal.style.display = "none";
  }
}

// when press Alt + F4, show close modal
document.onkeydown = keydown;
function keydown(event) {
  if (!event) event = event;
  if (event.altKey && event.keyCode == 115) {
    close_modal.style.display = "block";
  }
}

