const jwt = require('jsonwebtoken');
require('dotenv').config();
const { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } = process.env;

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET, { expiresIn: '30m' });
    const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: '30d' });
    return {
      accessToken,
      refreshToken,
    };
  }
}

module.exports = new TokenService();
