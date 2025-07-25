export const calculateAge = (birthday) => {
  const today = Date.now();
  const dob = new Date(birthday);

  const age = new Date(today - dob).getUTCFullYear() - 1970;

  return age;
};
