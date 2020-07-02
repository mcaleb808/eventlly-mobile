export const fieldRemover = loggedInUser => {
  const filteredUserObject = {};

  try {
    Object.keys(loggedInUser).forEach(key => {
      if (loggedInUser[key] && loggedInUser[key].length > 0) {
        filteredUserObject[key] = loggedInUser[key];
      }
    });
    return filteredUserObject;
  } catch (err) {
    console.log(err);
  }
};
