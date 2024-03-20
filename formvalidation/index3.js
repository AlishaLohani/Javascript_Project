function validate(){
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var cpassword = document.getElementById('cpassword').value
    
    checkusername(username)
    chechemail(email)
    checkpassword(password)
    checkpasswordsmatch(password , cpassword)

}

function checkusername(username)
{
    if (username.length > 7)
    {
        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('error','success')
        document.getElementById('username').innerHTML = ''
    }
    else{
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerText='Username must be 8 letter long'
    }
}

function checkemail(email)
{
    if (email.length>8 && email.includes('@gmail'))
    {
        document.getElementById('email').classList.add('success')
        document.getElementById('email').classList.replace('error','success')
        document.getElementById('email').innerHTML = ''
    }
    else{
        document.getElementById('email').classList.add('error')
        document.getElementById('email_error').innerText='Email must be valid and must include @gmail'
    }
}