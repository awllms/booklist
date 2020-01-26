export const titleCase = str => {
  return str.toLowerCase().split(' ').map(word => {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
};

export const errorMessage = `This account is locked. 
If you want to edit a profile please sign up 
for a new account.`;

export const sampleUserId = 'O6JvqCgF1TUoNWwIyNXPyEGulLz1';

export const signInEmailErrorMessage = `If you signed up with Google.
Please click the Google sign in button.`;

export const detectMobile = () => { 
  if( navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPad/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)
  ){
    return true;
   }
  else {
    return false;
   }
 }