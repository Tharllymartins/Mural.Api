import { NextFunction, request, Request, response, Response } from "express";
import { where } from "sequelize/types";
import { Spoiler } from "../model/spoiler";

const spoiler = Spoiler;


exports.getOne = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    Spoiler.findOne({
        where: {
            id
        }
    }).then((spoiler) => {
        if (spoiler) {
            res.json(spoiler)
        } else {
            res.status(400).json({msg: "error"})
        }
    }).catch((error) => next(error))
}

exports.getAll = (req: Request, res: Response, next: NextFunction) => {
    let limit = Number(req.query.limit || 0)
    let page = Number(req.query.page || 0)
    if (!Number.isInteger(limit) || !Number.isInteger(page)) {
        res.status(400).json()
    }

    const ITENS_POR_PAGINA = 10;

    limit = limit > ITENS_POR_PAGINA || limit <= 0 ? ITENS_POR_PAGINA : limit;
    page = page <= 0 ? 0 : page * limit;

    spoiler.findAll({ limit, offset: page}).then((spoilers) => {
        if (spoilers && spoilers.length) {
            res.json(spoilers)
        } else {
            res.status(404)
        }
    }).catch((error) => {
        next(error)
    })    
}

exports.create = (req: Request, res: Response, next: NextFunction) => {
    const {title, owner, description} = req.body;

    spoiler.create({
        title,
        owner,
        description
    }).then(() => {
        res.status(201).json();
    }).catch((error) => {
        next(error)
    })
}

exports.update = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const {title, owner, description} = req.body;

    spoiler.findByPk(id).then((spoilerExist) => {
        if (spoilerExist) {
            spoiler.update({
                title,
                owner,
                description
            }, {
                where: {id}
            }
            ).then(() => {
                res.json()
            }).catch((error) => next(error))
        } else {
            res.status(404).json()
        }
    })
}

exports.delete = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    spoiler.findByPk(id).then((spoilerExist) => {
        if (spoilerExist) {
            spoiler.destroy({
                where: {
                    id
                }
            }).then(() => {
                res.status(202).json()
            }).catch((error) => {
                next(error)
            })
        } else {
            response.status(404).json()
        }
    })
}
