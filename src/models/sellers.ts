import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { sequelize } from "./sequelize";



export class Seller extends Model {
    public id!: number;
    public name!: string;
    public phone!: number;
    public email!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}
Seller.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        phone: {
            type: DataTypes.DECIMAL(19, 2),
            allowNull: false
        },
        email: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
    },
    {
        tableName: "Sellers",
        sequelize: sequelize, // this bit is important
    }
);

export interface SellerInterface {
    name: string;
    phone: number;
    email: number
}

export interface PaginationInfo {
    page?: number;
    pageSize?: number;
    count?: number;
    total?: number;
    previousPage?: number | undefined;
    nextPage?: number | undefined;
    totalPages?: number;
}

