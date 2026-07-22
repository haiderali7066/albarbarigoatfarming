import jwt from "jsonwebtoken";

const JWT_SECRET =
  process.env.JWT_SECRET || "my-secret-key";

export const generateToken = () => {
  return jwt.sign(
    {
      role: "admin",
    },
    JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};

export const verifyToken = (
  token: string
) => {
  try {
    return jwt.verify(
      token,
      JWT_SECRET
    );
  } catch (error) {
    console.error(
      "JWT Verify Error:",
      error
    );

    return null;
  }
};