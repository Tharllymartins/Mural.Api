import { database } from "../database/database";
import { DataTypes, Sequelize } from "sequelize";



export const Spoiler = database.define("Spoiler", {
    id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        type: DataTypes.UUID,
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