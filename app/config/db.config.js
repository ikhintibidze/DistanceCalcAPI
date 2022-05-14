module.exports = {
  HOST: "mysql-72507-0.cloudclusters.net",
  USER: "admin",
  PASSWORD: "MWAcyPvS",
  DB: "distancecalcdb",
  PORT: "10692",
  dialect: "mysql",
  dialectOptions: {
    multipleStatements: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
