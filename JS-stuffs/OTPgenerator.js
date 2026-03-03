export function generateOTP(length = 6) {
  let otp = "";

  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10);
  }

  return otp;
}

export function isOTPExpired(createdTime, expiryInMs) {
  return Date.now() - createdTime > expiryInMs;
}
