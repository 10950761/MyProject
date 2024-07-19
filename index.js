function validateForm() {
    var teachersID = document.getElementById('teachersID').value;
    var password = document.getElementById('password').value;
  
    if (teachersID === 'user1' && password === '1234') {
      window.location.href = "file:///home/godfred/Documents/PROJECT/main.html";
      return false; 
    } else {
      alert('Invalid credentials. Please try again.');
      return false; 
    }
  }