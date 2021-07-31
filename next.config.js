const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "khongchobiet123",
        mongodb_password: "khongchobiet123",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site",
      },
    };
  }
  return {
    env: {
      mongodb_username: "khongchobiet123",
      mongodb_password: "khongchobiet123",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};
