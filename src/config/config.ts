export default {
    jwtSecret: process.env.JWT_SECRET || "somesecrettoken",
  
    DB: {
      URI:
        process.env.MONGODB_URI ||
        "mongodb+srv://movilesproyecto:12345@cluster0.htp15ow.mongodb.net/test",
   
      USER: process.env.MONGODB_USER || "",
  
      PASSWORD: process.env.MONGODB_PASSWORD || "",
  
      NAME: process.env.MONGODB_NAME || "",
  
      LAST_NAME: process.env.MONGODB_NAME || "",
  
      NOTES: process.env.MONGODB_NOTES || "",
      COLLECTIONS: process.env.MONGODB_COLLECTIONS || "",
      OWNER: process.env.MONGODB_OWNER || "",
    },
  };