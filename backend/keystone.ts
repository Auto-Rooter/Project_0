import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost:27017/Sick_Fits';

// to auth React users
const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How Long the user should be signed in
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // Add data seeding
  },
  lists: createSchema({
    // Schema items go here
  }),
  ui: {
    // Changes for roles'
    isAccessAllowed: () => true,
  },
  // Add session values here
});
