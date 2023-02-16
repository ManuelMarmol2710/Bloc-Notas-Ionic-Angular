export default {
  jwtSecret: process.env.JWT_SECRET || "somesecrettoken",

  DB: {
    URI:
      process.env.MONGODB_URI ||
      "mongodb://mongo:hSUP3me0Jj0K26kJww9Z@containers-us-west-167.railway.app:7533",
 
    USER: process.env.MONGODB_USER || "",

    PASSWORD: process.env.MONGODB_PASSWORD || "",

    NAME: process.env.MONGODB_NAME || "",

    LAST_NAME: process.env.MONGODB_NAME || "",

    NOTES: process.env.MONGODB_NOTES || "",
    COLLECTIONS: process.env.MONGODB_COLLECTIONS || "",
    OWNER: process.env.MONGODB_OWNER || "",
  },
};
