export const textify = (txt, length) => {
  let textArray = txt.split("");
  if (textArray.length > length) {
    textArray = textArray.slice(0, length);
    textArray.push("....");
    return textArray.join("");
  } else return textArray.join("");
};

export const datify = (data) => {
  let date = new Date(data);
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  const monthNames = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${day} ${monthNames[month]} ${year}`;
};

export const reverseArr = (input) => {
  let ret = [];
  for (var i = input.length - 1; i >= 0; i--) {
    ret.push(input[i]);
  }
  return ret;
};

export const paramId = (blog) => {
  let v = [];
  v = blog.blogTitle.split(" ");
  v.push(blog._id);
  v = v.join("-");

  return v;
};
