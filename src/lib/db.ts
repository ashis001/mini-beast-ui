import mysql from 'mysql2/promise';

// Ensure env vars are loaded (Next.js will load .env.local automatically)
const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
  MYSQL_PORT
} = process.env;

if (!MYSQL_HOST || !MYSQL_USER || !MYSQL_PASSWORD || !MYSQL_DATABASE) {
  // We keep this throw so misconfig surfaces early on the server
  throw new Error('Missing MySQL env vars. Please set MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE');
}

const useSSL = process.env.MYSQL_SSL === 'true';
const rejectUnauthorized = process.env.MYSQL_SSL_REJECT_UNAUTHORIZED !== 'false';

declare global {
  // eslint-disable-next-line no-var
  var __mysqlPool: mysql.Pool | undefined;
}

function createPool() {
  return mysql.createPool({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    port: MYSQL_PORT ? Number(MYSQL_PORT) : 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    // Optional SSL for Hostinger/remote MySQL
    ssl: useSSL ? { rejectUnauthorized } : undefined,
  });
}

export const pool: mysql.Pool = global.__mysqlPool ?? createPool();

if (process.env.NODE_ENV !== 'production') {
  global.__mysqlPool = pool;
}

export default pool;
