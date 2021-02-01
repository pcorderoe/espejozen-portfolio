import moment from "moment"

/**
 * @name Log
 * This is a utility to handle generic logs for debug time.
 */
const Log = (context) => {
    const _log = (place, message, type = undefined) => {
        const fn = (message) => {
            switch (type) {
                case 'log': default: return console.log(message)
                case 'error': return console.error(message)
                case 'warning': return console.warn(message)
            }
        }
        return context.debug ? fn(`${moment().format('DD/MM/YYYY HH:mm:ss')} | ${place} - ${message}`) : undefined
    }
    const _error = (place, message) => _log(place, message, 'error')
    const _warning = (place, message) => _log(place, message, 'warning')
    return {
        log: _log,
        error: _error,
        warning: _warning,

    }
}
/**
 * 
 * @name Utilities
 * Main fn of this
 */
const Utilities = (context) => {
    return {
        logger: Log(context)
    }
}

export default Utilities