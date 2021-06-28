const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "Nunc rhoncus dui vel sem.",
    created_at: "06/27/2021",
    user_id: 6,
    post_id: 1,
  },
  {
    comment_text:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    created_at: "06/27/2021",
    user_id: 6,
    post_id: 8,
  },
  {
    comment_text: "Aliquam erat volutpat. In congue.",
    created_at: "06/27/2021",
    user_id: 3,
    post_id: 10,
  },
  {
    comment_text:
      "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    created_at: "06/27/2021",
    user_id: 3,
    post_id: 18,
  },
  {
    comment_text: "In hac habitasse platea dictumst.",
    created_at: "06/27/2021",
    user_id: 7,
    post_id: 5,
  },
  {
    comment_text: "Vivamus vestibulum sagittis sapien.",
    created_at: "06/27/2021",
    user_id: 1,
    post_id: 20,
  },
  {
    comment_text:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    created_at: "06/27/2021",
    user_id: 6,
    post_id: 7,
  },
  {
    comment_text: "Sed vel enim sit amet nunc viverra dapibus.",
    created_at: "06/27/2021",
    user_id: 7,
    post_id: 4,
  },
  {
    comment_text:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
    created_at: "06/27/2021",
    user_id: 6,
    post_id: 12,
  },
  {
    comment_text: "Morbi a ipsum.",
    created_at: "06/27/2021",
    user_id: 6,
    post_id: 20,
  },
  {
    comment_text:
      "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    created_at: "06/27/2021",
    user_id: 3,
    post_id: 14,
  },
  {
    comment_text: "Donec ut mauris eget massa tempor convallis.",
    created_at: "06/27/2021",
    user_id: 5,
    post_id: 4,
  },
  {
    comment_text:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    created_at: "06/27/2021",
    user_id: 4,
    post_id: 9,
  },
  {
    comment_text:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    created_at: "06/27/2021",
    user_id: 5,
    post_id: 14,
  },
  {
    comment_text: "Quisque porta volutpat erat.",
    created_at: "06/27/2021",
    user_id: 6,
    post_id: 2,
  },
  {
    comment_text: "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    created_at: "06/27/2021",
    user_id: 8,
    post_id: 2,
  },
  {
    comment_text:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    created_at: "06/27/2021",
    user_id: 2,
    post_id: 20,
  },
  {
    comment_text:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    created_at: "06/27/2021",
    user_id: 4,
    post_id: 11,
  },
  {
    comment_text:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    created_at: "06/27/2021",
    user_id: 5,
    post_id: 13,
  },
  {
    comment_text:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    created_at: "06/27/2021",
    user_id: 9,
    post_id: 16,
  },
  {
    comment_text: "Curabitur convallis.",
    created_at: "06/27/2021",
    user_id: 6,
    post_id: 4,
  },
  {
    comment_text:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    created_at: "06/27/2021",
    user_id: 4,
    post_id: 10,
  },
  {
    comment_text: "Morbi non quam nec dui luctus rutrum.",
    created_at: "06/27/2021",
    user_id: 3,
    post_id: 8,
  },
  {
    comment_text:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    created_at: "06/27/2021",
    user_id: 8,
    post_id: 10,
  },
  {
    comment_text:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    created_at: "06/27/2021",
    user_id: 1,
    post_id: 15,
  },
  {
    comment_text:
      "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.",
    created_at: "06/27/2021",
    user_id: 5,
    post_id: 3,
  },
  {
    comment_text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    created_at: "06/27/2021",
    user_id: 1,
    post_id: 15,
  },
  {
    comment_text: "Nam tristique tortor eu pede.",
    created_at: "06/27/2021",
    user_id: 4,
    post_id: 16,
  },
  {
    comment_text:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    created_at: "06/27/2021",
    user_id: 4,
    post_id: 18,
  },
  {
    comment_text: "Proin eu mi. Nulla ac enim.",
    created_at: "06/27/2021",
    user_id: 4,
    post_id: 10,
  },
  {
    comment_text: "Sed ante. Vivamus tortor.",
    created_at: "06/27/2021",
    user_id: 7,
    post_id: 5,
  },
  {
    comment_text: "Aliquam quis turpis eget elit sodales scelerisque.",
    created_at: "06/27/2021",
    user_id: 10,
    post_id: 1,
  },
  {
    comment_text: "Donec quis orci eget orci vehicula condimentum.",
    created_at: "06/27/2021",
    user_id: 3,
    post_id: 19,
  },
  {
    comment_text: "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    created_at: "06/27/2021",
    user_id: 5,
    post_id: 3,
  },
  {
    comment_text:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.",
    created_at: "06/27/2021",
    user_id: 10,
    post_id: 14,
  },
  {
    comment_text: "Maecenas ut massa quis augue luctus tincidunt.",
    created_at: "06/27/2021",
    user_id: 10,
    post_id: 8,
  },
  {
    comment_text: "Cras in purus eu magna vulputate luctus.",
    created_at: "06/27/2021",
    user_id: 10,
    post_id: 11,
  },
  {
    comment_text: "Etiam vel augue. Vestibulum rutrum rutrum neque.",
    created_at: "06/27/2021",
    user_id: 8,
    post_id: 5,
  },
  {
    comment_text: "Proin at turpis a pede posuere nonummy.",
    created_at: "06/27/2021",
    user_id: 8,
    post_id: 19,
  },
  {
    comment_text:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    created_at: "06/27/2021",
    user_id: 9,
    post_id: 19,
  },
  {
    comment_text:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    created_at: "06/27/2021",
    user_id: 5,
    post_id: 4,
  },
  {
    comment_text:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    created_at: "06/27/2021",
    user_id: 2,
    post_id: 11,
  },
  {
    comment_text: "Vestibulum ac est lacinia nisi venenatis tristique.",
    created_at: "06/27/2021",
    user_id: 4,
    post_id: 6,
  },
  {
    comment_text: "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    created_at: "06/27/2021",
    user_id: 9,
    post_id: 6,
  },
  {
    comment_text:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    created_at: "06/27/2021",
    user_id: 7,
    post_id: 9,
  },
  {
    comment_text: "Integer ac leo. Pellentesque ultrices mattis odio.",
    created_at: "06/27/2021",
    user_id: 4,
    post_id: 19,
  },
  {
    comment_text:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    created_at: "06/27/2021",
    user_id: 10,
    post_id: 1,
  },
  {
    comment_text:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    created_at: "06/27/2021",
    user_id: 2,
    post_id: 19,
  },
  {
    comment_text: "Proin risus. Praesent lectus.",
    created_at: "06/27/2021",
    user_id: 10,
    post_id: 1,
  },
  {
    comment_text:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.",
    created_at: "06/27/2021",
    user_id: 10,
    post_id: 12,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
