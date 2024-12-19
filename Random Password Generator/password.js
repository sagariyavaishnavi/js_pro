function generatePassword() {
    // Get user preferences
    const length = parseInt(document.getElementById("length").value);
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSpecial = document.getElementById("special").checked;

    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecial) {
      document.getElementById("output").innerText = "Please select at least one character type.";
      return;
    }

    // Character pools
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?/";

    // Combine selected character pools
    let charPool = "";
    if (includeUppercase) charPool += uppercaseChars;
    if (includeLowercase) charPool += lowercaseChars;
    if (includeNumbers) charPool += numberChars;
    if (includeSpecial) charPool += specialChars;

    // Generate password
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charPool.length);
      password += charPool[randomIndex];
    }

    // Output password in the box
    document.getElementById("output").innerText = password;
  }
