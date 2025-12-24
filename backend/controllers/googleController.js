import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleAuth = async (req, res) => {
  try {
    const { token } = req.body;

    // 1️⃣ Vérifier le token Google
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    const user = {
      email: payload.email,
      name: payload.name,
      picture: payload.picture,
    };

    // 2️⃣ TODO: créer ou retrouver l’utilisateur en base
    // ex: User.findOne({ email })

    // 3️⃣ Créer ton JWT interne
    const appToken = jwt.sign(
      { email: user.email, role: "ADMIN" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token: appToken,
      user,
    });
  } catch (err) {
    res.status(401).json({ message: "Invalid Google token" });
  }
};