const logger = (req, res, next) => {
    const time = new Date() .toLocaleString();
    const method = req.method;
    const url = req.originalUrl;

    console.log(`[${time}] ${method} ${url}`);
    next();
};

module.exports = logger;
