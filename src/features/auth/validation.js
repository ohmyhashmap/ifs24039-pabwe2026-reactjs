export const isValidEmail = (email) => {
  const atIndex = email.indexOf("@");
  const dotIndex = email.lastIndexOf(".");
  return (
    atIndex > 0 &&
    atIndex === email.lastIndexOf("@") &&
    dotIndex > atIndex + 1 &&
    dotIndex < email.length - 1 &&
    !/\s/.test(email)
  );
};
