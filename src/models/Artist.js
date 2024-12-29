import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/sequelize.js'

class Artist extends Model {}

Artist.init(
  {

    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    instrument: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    tableName: 'artists', 
  },
);

export { Artist }