const { Post } = require("../models");

const postdata = [
  {
    title: "Donec posuere metus vitae ipsum.",
    created_at: "06/27/2021",
    post_text: "https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png",
    user_id: 10,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    created_at: "06/27/2021",
    post_text: "https://nasa.gov/donec.json",
    user_id: 8,
  },
  {
    title:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    created_at: "06/27/2021",
    post_text:
      "https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx",
    user_id: 1,
  },
  {
    title: "Nunc purus.",
    created_at: "06/27/2021",
    post_text: "http://desdev.cn/enim/blandit/mi.jpg",
    user_id: 4,
  },
  {
    title: "Pellentesque eget nunc.",
    created_at: "06/27/2021",
    post_text: "http://google.ca/nam/nulla/integer.aspx",
    user_id: 7,
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    created_at: "06/27/2021",
    post_text: "https://stanford.edu/consequat.png",
    user_id: 4,
  },
  {
    title: "In hac habitasse platea dictumst.",
    created_at: "06/27/2021",
    post_text: "http://edublogs.org/non/ligula/pellentesque.js",
    user_id: 1,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    created_at: "06/27/2021",
    post_text: "http://ucla.edu/consequat/nulla.html",
    user_id: 1,
  },
  {
    title: "Duis ac nibh.",
    created_at: "06/27/2021",
    post_text: "http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx",
    user_id: 9,
  },
  {
    title: "Curabitur at ipsum ac tellus semper interdum.",
    created_at: "06/27/2021",
    post_text: "https://reverbnation.com/ligula/sit.jpg",
    user_id: 5,
  },
  {
    title: "In hac habitasse platea dictumst.",
    created_at: "06/27/2021",
    post_text: "http://china.com.cn/lectus/vestibulum.json",
    user_id: 3,
  },
  {
    title: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    created_at: "06/27/2021",
    post_text:
      "http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json",
    user_id: 10,
  },
  {
    title: "Donec dapibus.",
    created_at: "06/27/2021",
    post_text: "https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml",
    user_id: 8,
  },
  {
    title: "Nulla tellus.",
    created_at: "06/27/2021",
    post_text: "https://lycos.com/natoque/penatibus/et.html",
    user_id: 3,
  },
  {
    title:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    created_at: "06/27/2021",
    post_text: "https://gmpg.org/lorem.jpg",
    user_id: 3,
  },
  {
    title:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    created_at: "06/27/2021",
    post_text: "https://paginegialle.it/mattis/egestas.jsp",
    user_id: 7,
  },
  {
    title: "In hac habitasse platea dictumst.",
    created_at: "06/27/2021",
    post_text: "http://wikia.com/turpis/eget.jpg",
    user_id: 6,
  },
  {
    title: "Etiam justo.",
    created_at: "06/27/2021",
    post_text: "https://shareasale.com/quis.json",
    user_id: 4,
  },
  {
    title: "Nulla ut erat id mauris vulputate elementum.",
    created_at: "06/27/2021",
    post_text:
      "http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png",
    user_id: 6,
  },
  {
    title:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    created_at: "06/27/2021",
    post_text: "https://java.com/at/nibh/in.png",
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
