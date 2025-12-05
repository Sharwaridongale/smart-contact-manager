export const loadState = () => {
  try {
    const serialized = localStorage.getItem("contactState");
    if (!serialized) return undefined;
    return JSON.parse(serialized);
  } catch (e) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem("contactState", serialized);
  } catch (e) {
    console.log("Error saving state", e);
  }
};
