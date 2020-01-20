export const titleCase = str => {
  return str.toLowerCase().split(' ').map(word => {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
};

export const errorMessage = `This account is locked. 
If you want to edit a profile please sign up 
for a new account.`;

export const sampleUserId = 'O6JvqCgF1TUoNWwIyNXPyEGulLz1';