export default {
  isEmpty: field => {
    if (
      field.value === field.defaultValue ||
      !field.value.trim() //Checks for all whitespace (newline, space, tab, etc)
    ) {
      return true;
    } else {
      return false;
    }
  }
};

