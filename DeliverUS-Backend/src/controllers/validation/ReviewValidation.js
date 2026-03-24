import { check } from 'express-validator'

const create = [
    check('stars').exists().isInt({min: 0, max:5}).toInt(),
    check('body').optional({nullable:true, checkFalsy: true }).isString()
]

const update = [
    check('stars').exists().isInt({min: 0, max:5}).toInt(),
    check('body').optional({nullable:true, checkFalsy: true }).isString()
]

export { create, update }
