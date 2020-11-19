exports.seed = function (knex) {
  return knex("billy_madison")
    .del()
    .then(function () {
      return knex("billy_madison").insert([
        { name: "Billy Madison", quote: "Goooo!" },
        {
          name: "user1",
          quote: "i am a user",
        },
        {
          name: "user2",
          quote:
            "no way, i am also a user",
        },
        {
          name: "Frank",
          quote:
            "im frank",
        },
      ]);
    });
};
