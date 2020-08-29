import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { sequelize } from "./sequelize";
import { Seller } from "./sellers"

export class Offer extends Model {
    public id!: number;
    public title!: string;
    public amount!: number;
    public fees!: number;
    public seller_id!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}
Offer.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        seller_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        title: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        amount: {
            type: DataTypes.DECIMAL(19, 2),
            allowNull: false
        },
        fees: {
            type: DataTypes.DECIMAL(19, 2),
            allowNull: false
        },
    },
    {
        tableName: "offers",
        sequelize: sequelize, // this bit is important
    }
);
export interface OfferInterface {
    title: string;
    amount: number;
    fees: number;
    seller_id: number
}
Offer.hasMany(Seller, {
    sourceKey: "id",
    foreignKey: "seller_id",
});
