function formatDate(date) {
  let nowDate = new Date();
//   console.log(nowDate);
//   console.log(date);
  if (nowDate - date < 1000) {
    return "right now";
  }
  if (nowDate - date < 60000) {
    let n = (nowDate - date) / 1000;
    return n + " sec ago";
  }
  if (nowDate - date < 3600000) {
    let x = ((nowDate - date) / 60000);
    return x + " min ago";
  } else {
    return new Intl.DateTimeFormat("en-GB", {
      dateStyle: "full",
      timeStyle: "long",
      // timeZone: "ir- IR",
    }).format(date);

    // console.log(new Intl.DateTimeFormat().format(date))
  }
}
alert(formatDate(new Date(new Date() - 1)));
alert(formatDate(new Date(new Date() - 30 * 1000))); // "30 sec ago"
alert(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 min ago"
// yesterday's date like 31.12.16 20:00
alert(formatDate(new Date(new Date() - 86400 * 1000)));
