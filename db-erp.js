// db-erp.js
const mysql = require('mysql2/promise');

async function checkConnection() {
  let connection;
  try {
    connection = await mysql.createConnection({
      host: '193.203.184.190', // force IPv4
      user: 'u383989558_erp',
      password: '@#@Nitish91@',
      database: 'u383989558_erp',
      port: 3306,
      // ssl: { rejectUnauthorized: true }, // enable if Hostinger enforces SSL
    });

    console.log('✅ Connected to MySQL Server (ERP)');

    const [serverVersion] = await connection.query('SELECT VERSION() AS version');
    console.log('MySQL Server version:', serverVersion[0].version);

    const [dbName] = await connection.query('SELECT DATABASE() AS db');
    console.log("📂 You're connected to database:", dbName[0].db);

    const [tables] = await connection.query('SHOW TABLES');
    console.log('\n📑 Tables in database:');
    tables.forEach((row) => {
      console.log('   -', Object.values(row)[0]);
    });
  } catch (err) {
    console.error('❌ Error while connecting to MySQL (ERP):', err.message);
  } finally {
    if (connection) {
      await connection.end();
      console.log('🔌 MySQL connection is closed');
    }
  }
}

checkConnection();
