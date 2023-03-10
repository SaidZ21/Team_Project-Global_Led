const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ ResultJob }) {
      this.hasMany(ResultJob, { foreignKey: "review_id" });
    }
  }
  Review.init(
    {
      logo: DataTypes.TEXT,
      name: DataTypes.STRING,
      title: DataTypes.STRING,
      info: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Review",
    }
  );
  return Review;
};
