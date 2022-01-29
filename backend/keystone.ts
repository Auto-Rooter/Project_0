import 'dotenv/config';
import { createAuth } from '@keystone-next/auth';
import { config, createSchema } from '@keystone-next/keystone/schema';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';
import { User } from './schemas/User';
import { Product } from './schemas/Product';
import { ProductImage } from './schemas/ProductImage';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost:27017/Sick_Fits';

// to auth React users
const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How Long the user should be signed in
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User', // Schema
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // Dont forget the initial roles here
  },
});

export default withAuth(
  config({
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
      User,
      Product,
      ProductImage,
    }),
    ui: {
      // Show the UI only for the User who pass this, we only care about the logged in user with a valid session
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      isAccessAllowed: ({ session }) => !!session?.data, // session object => {listKey: 'User', itemId: 'doc _id', data: [object]}
    },
    session: withItemData(statelessSessions(sessionConfig), {
      // GraphQL Query, More info is usefull for Middleware checks
      User: 'id name email', // for permission
    }),
  })
);
