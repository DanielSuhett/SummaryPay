const BillingCycle = require('./billingCycle')
const _ = require('lodash')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })

BillingCycle.after('post', errorOrNext).after('put', errorOrNext)

function errorOrNext(req, res, next) {
    const bundle = res.locals.bundle

    if(bundle.errors){
        var errors = parseErrors(bundle.errors)
        res.status(500).json({ errors })
    } else {
        next()
    }
}

function parseErrors(restfulErrors) {
    const errors = []

    _.forIn(restfulErrors, error => {
        errors.push(error.message)
    })
    return errors
}

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if(error){
            res.status(500).json({errors: [error]})
        }
    })
})

module.exports = BillingCycle