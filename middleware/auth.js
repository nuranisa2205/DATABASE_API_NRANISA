const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized - Token tidak ada"
        });
    }

    // contoh token sederhana
    if (token !== "admin123") {
        return res.status(403).json({
            message: "Forbidden - Token tidak valid"
        });
    } 

    next();
   };

   module.exports = authMiddleware;