const { Post } = require("../models");

const postdata = [
  {
    title: "Donec posuere metus vitae ipsum.",
    created_at: "06/27/2021",
    post_text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque voluptates cupiditate obcaecati minus.",
    user_id: 10,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    created_at: "06/27/2021",
    post_text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga recusandae pariatur repellat.",
    user_id: 8,
  },
  {
    title:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    created_at: "06/27/2021",
    post_text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nemo minus?",
    user_id: 1,
  },
  {
    title: "Nunc purus.",
    created_at: "06/27/2021",
    post_text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere expedita quibusdam aspernatur nam? Rem porro cupiditate beatae?",
    user_id: 4,
  },
  {
    title: "Pellentesque eget nunc.",
    created_at: "06/27/2021",
    post_text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias sunt ducimus itaque autem expedita.",
    user_id: 7,
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    created_at: "06/27/2021",
    post_text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore, rerum harum nam eveniet corrupti quisquam? Qui, cumque facilis.",
    user_id: 4,
  },
  {
    title: "In hac habitasse platea dictumst.",
    created_at: "06/27/2021",
    post_text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, facere!",
    user_id: 1,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    created_at: "06/27/2021",
    post_text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quos voluptatem.",
    user_id: 1,
  },
  {
    title: "Duis ac nibh.",
    created_at: "06/27/2021",
    post_text: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    user_id: 9,
  },
  {
    title: "Curabitur at ipsum ac tellus semper interdum.",
    created_at: "06/27/2021",
    post_text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    user_id: 5,
  },
  {
    title: "In hac habitasse platea dictumst.",
    created_at: "06/27/2021",
    post_text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi labore iusto molestiae error? Incidunt?",
    user_id: 3,
  },
  {
    title: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    created_at: "06/27/2021",
    post_text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus assumenda quo saepe voluptatum itaque inventore. Delectus, quos?",
    user_id: 10,
  },
  {
    title: "Donec dapibus.",
    created_at: "06/27/2021",
    post_text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, repellendus.",
    user_id: 8,
  },
  {
    title: "Nulla tellus.",
    created_at: "06/27/2021",
    post_text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, suscipit sed.",
    user_id: 3,
  },
  {
    title:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    created_at: "06/27/2021",
    post_text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi harum voluptas illum.",
    user_id: 3,
  },
  {
    title:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    created_at: "06/27/2021",
    post_text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aperiam eum quo exercitationem voluptate assumenda totam.",
    user_id: 7,
  },
  {
    title: "In hac habitasse platea dictumst.",
    created_at: "06/27/2021",
    post_text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti voluptates, magni repellat eos blanditiis enim voluptatum excepturi officiis.",
    user_id: 6,
  },
  {
    title: "Etiam justo.",
    created_at: "06/27/2021",
    post_text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, officia ad.",
    user_id: 4,
  },
  {
    title: "Nulla ut erat id mauris vulputate elementum.",
    created_at: "06/27/2021",
    post_text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto ipsam numquam ad vitae commodi accusantium. Similique!",
    user_id: 6,
  },
  {
    title:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    created_at: "06/27/2021",
    post_text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel eaque ratione fugit repudiandae veritatis?",
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
