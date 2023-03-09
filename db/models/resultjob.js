const { Model } = require("sequelize");
const { default: Review } = require("../../src/components/review/Review");

module.exports = (sequelize, DataTypes) => {
  class ResultJob extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Review }) {
      this.belongsTo(Review, { foreignKey: "review_id" });
    }
  }
  ResultJob.init(
    {
      img: DataTypes.TEXT,
      review_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ResultJob",
    }
  );
  return ResultJob;
};
