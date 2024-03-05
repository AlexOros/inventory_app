import mongoose from 'mongoose';

export default async function setupDB() {
  const { DB_USER_NAME, DB_USER_PASSWORD, DB_CLUSTER, DB_NAME } = process.env;
  const mongoDB = `mongodb+srv://${DB_USER_NAME}:${DB_USER_PASSWORD}@${DB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`;

  await mongoose.connect(mongoDB, {
    dbName: DB_NAME,
  });
}
