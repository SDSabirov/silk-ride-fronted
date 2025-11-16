module.exports = {
  apps: [
    {
      name: "Silk Ride",
      port: "3012",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};