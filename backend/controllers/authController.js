import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// LOGIN LOCAL
export const login = async (req, res) => {
  try{
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );

  res.status(200).json({
    success: true,
    token,
    user: {id: user._id,name:user.name, role: user.role},
  });

  /* ✅ THIS IS THE CODE YOU ASKED ABOUT
  res.json({
    token,
    user: {
      id: user._id,
      role: user.role
    }
  });
  */

  }catch(error){
      console.log(error.message)
  }
};


// LOGIN GOOGLE
export const loginGoogle = async (req, res) => {
  try {
    const { token } = req.body;

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

    // TODO: créer ou retrouver utilisateur en base

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

export const googleCallback = (req, res) => {
  const token = jwt.sign(
    { id: req.user._id, role: req.user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );

  // ✅ SAME RESPONSE STRUCTURE
  res.redirect(
    `http://localhost:5173/oauth-success?token=${token}&role=${req.user.role}`
  );
};


export const githubCallback = (req, res) => {
  const token = jwt.sign(
    { id: req.user._id, role: req.user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );

  // ✅ SAME LOGIC
  res.redirect(
    `http://localhost:5173/oauth-success?token=${token}&role=${req.user.role}`
  );
};