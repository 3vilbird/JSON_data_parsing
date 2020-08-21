const detail = require("./foodyo_output.json");
const rec = (data, count) => {
  const pat = "-";
  data.map((child) => {
    if (child.selected == 1) {
      console.log(pat.repeat([count]) + ">" + child.name);
      // base case
      return rec(child.children, 10);
    } else {
      // terminating case
      return;
    }
  });
};

detail.body.Recommendations.map((data) => {
  console.log(`${data.RestaurantName}`);

  data.menu.map((menus) => {
    if (menus.type == "sectionheader") {
      // map through all the menus
      menus.children.map((child) => {
        if (child.selected == 1 && child.type == "item") {
          //get in
          console.log(`-->${menus.name}`);
          rec(child.children, 5);
        }
      });
    }
  });
});
