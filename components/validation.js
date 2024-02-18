export function isEmailValid(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
}
export function isNewEmailValid(newEmail) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(newEmail);
}

export function isPasswordValid(password) {
    // Check if the password has at least one lowercase letter
    const lowercaseRegex = /[a-z]/;
    if (!lowercaseRegex.test(password)) {
        return false;
    }

    // Check if the password has at least one uppercase letter
    const uppercaseRegex = /[A-Z]/;
    if (!uppercaseRegex.test(password)) {
        return false;
    }

    // Check if the password has at least one numeric digit
    const numericRegex = /\d/;
    if (!numericRegex.test(password)) {
        return false;
    }

    // Check if the password has at least one special character
    const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
    if (!specialCharacterRegex.test(password)) {
        return false;
    }

    // Check if the password length is between 8 and 15 characters
    if (password.length < 8 || password.length > 15) {
        return false;
    }

    return true;
}