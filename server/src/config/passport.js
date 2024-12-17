const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const config = require('./config');

const jwtOptions = {
  secretOrKey: config.jwt.secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtVerify = async (payload, done) => {
  try {
    const res = await db.users.findOne({ attribute: ['role_name'], where: { id: payload.sub }, raw: true });
    const checkLogin = await db.logins.findOne({ where: { user_id: payload.sub }, raw: true });
    if (checkLogin.status == 'deactive') {
      return done(null, false);;
    }
    if (!res) {
      return done(null, false);
    }

    done(null, res.role_name);
  } catch (error) {
    done(error, false);
  }
};

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

module.exports = {
  jwtStrategy,
};
