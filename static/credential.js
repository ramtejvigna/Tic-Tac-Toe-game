

function reg() {
    var accParagraph = document.getElementById("acc");
    var registerLink = document.getElementById("register");
    var log = document.getElementById("login");
    var user = document.getElementById("user");
    var title = document.getElementById("title");
    var password = document.getElementById("password");
    var lock = document.getElementById("lock");
    var forgot = document.getElementById("forgot");
    var wrapper = document.getElementsByClassName("wrapper");
    var new_pass = document.getElementById("new_pass");
    
    if (accParagraph.innerText.includes("Register")) {
        title.innerText = "Register";
        accParagraph.innerHTML = "Already have an account? <a href='#' id='register' onclick='reg()'>Login</a>";
        log.innerText = "Register";
        password.placeholder = "New Password";
        registerLink.style.display = "block";
        forgot.style.display = 'none';
        new_pass.innerText = 'New Password';
        addbox();

    } else {
        title.innerText = "Login";
        accParagraph.innerHTML = "Don't have an account? <a href='#' id='register' onclick='reg()'>Register</a>";
        log.innerText = "Login";

        // Remove the Confirm Password input-box if it exists

        var confirmPasswordInput = document.querySelector("input[placeholder='Confirm Password']");
        var box = document.querySelector("div[id='cfm']")
        if (confirmPasswordInput) {
            box.remove();
        }
        password.placeholder = "Password";
        forgot.style.display = 'initial';
    }
}

// function regcontent() {
//     let content = `
//         <div class="wrapper">
//             <form action="" id="login-form">
//                 <h1 id="title">Register</h1>
//                 <div class="input-box">
//                     <input class="input" type="text" id="user" placeholder="Username" required="">
//                     <i class="bx bxs-user"></i>
//                     <label for="username" class="label">Username</label>
//                 </div>
//                 <div class="input-box" id="lock">
//                     <input type="password" id="password" placeholder="New Password" required="">
//                     <i class="bx bxs-lock-alt"></i>
//                     <label for="password" id="new_pass" class="label">New Password</label>
//                 </div><div class="input-box" id="cfm"><input type="password" placeholder="Confirm Password" required=""><i class="bx bxs-lock-alt"></i><label class="label">Confirm Password</label></div>

//                 <div class="remember-forgot">
//                     <label><input type="checkbox"> Remember me</label>
//                     <a href="#" id="forgot" style="display: none;">Forgot Password</a>
//                 </div>

//                 <button type="submit" class="btn" id="login">Register</button>

//                 <div class="register-link">
//                     <p id="acc">Already have an account? <a href="#" id="register" onclick="reg()">Login</a></p>
//                 </div>
//             </form>
//         </div>`;
    
//     let toggle = document.getElementById('whole');
//     if(toggle)
//         toggle.innerHTML = content;
// }

function addbox() {
    var box = document.createElement('div');
    box.className = "input-box";
    box.id = "cfm";
    // Create and append the new Confirm Password input-box
    var confirmPasswordInput = document.createElement("input");
    confirmPasswordInput.type = "password";
    confirmPasswordInput.placeholder = "Confirm Password";
    confirmPasswordInput.required = true;

    var confirmPasswordlabel = document.createElement("label");
    confirmPasswordlabel.for = "password";
    confirmPasswordlabel.className = "label";
    confirmPasswordlabel.innerText = "Confirm Password";

    var confirmPasswordicon = document.createElement("i");
    confirmPasswordicon.className = "bx bxs-lock-alt";
    box.appendChild(confirmPasswordInput);
    box.appendChild(confirmPasswordicon);
    box.appendChild(confirmPasswordlabel);
    // Get the reference element (New Password input-box)
    var referenceElement = document.getElementById("lock");

    // Insert the new Confirm Password input-box after the reference element
    referenceElement.parentNode.insertBefore(box, referenceElement.nextSibling);
}

function login() {
    window.location.href = '/login';
}

function openModal() {
    var modal = document.getElementById("welcomeModal");
    modal.style.display = "block";
}

// Function to close the welcome modal
function closeModal() {
    var modal = document.getElementById("welcomeModal");
    modal.style.display = "none";
}

// Display the welcome modal when the page loads
window.onload = function () {
    openModal();
};