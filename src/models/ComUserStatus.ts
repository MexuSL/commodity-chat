import { Model, DataTypes } from "sequelize";
import sequelize from "../database/connection";

class CommodityUserStatus extends Model {
    public id!: number;
    public userId!: number;
    public typing?: boolean;
    public online?: boolean;
    public activeRoom?: string;
    public reading?: boolean;
    public posting?: boolean;
    public lastSeen?: Date;
    public createdAt!: Date;
    public updatedAt!: Date;
}

CommodityUserStatus.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        typing: {
            type: DataTypes.BOOLEAN,
        },
        online: {
            type: DataTypes.BOOLEAN,
        },
        activeRoom: {
            type: DataTypes.STRING,
        },
        reading: {
            type: DataTypes.BOOLEAN,
        },
        posting: {
            type: DataTypes.BOOLEAN,
        },
        lastSeen: {
            type: DataTypes.DATE,
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updatedAt: {
            allowNull: true,
            type: DataTypes.DATE,
        },
    },
    {
        sequelize,
        modelName: "CommodityUserStatus",
        tableName: "CommodityUserStatus",
    }
);

export default CommodityUserStatus;
