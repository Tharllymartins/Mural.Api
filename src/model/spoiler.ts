import { database } from "../database/database";
import { DataTypes } from "sequelize";


interface spoiler {
    id: string;
    title: string;
    owner: string;
    description: string;
}


export const Spoiler = database.define("Spoiler", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING(255),
        validate: {
            len: [2, 255]
        }
    },
    owner: {
        allowNull: false,
        type: DataTypes.STRING(40),
        validate: {
            len: [2, 40]
        }
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING(40),
        validate: {
            len: [2, 40]
        }
    }
})