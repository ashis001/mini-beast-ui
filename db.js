// db.js
const mysql = require('mysql2/promise');

async function checkConnection() {
  let connection;
  try {
    connection = await mysql.createConnection({
      host: 'srv1750.hstgr.io', // or '193.203.184.190'
      user: 'u383989558_minibeast',
      password: '@#@Nitish91@',
      database: 'u383989558_minibeast',
      port: 3306,
      // Uncomment SSL if Hostinger requires it and you face TLS errors
      // ssl: { rejectUnauthorized: true },
    });

    console.log('✅ Connected to MySQL Server');

    // 🔎 Get server info
    const [serverVersion] = await connection.query('SELECT VERSION() AS version');
    console.log('MySQL Server version:', serverVersion[0].version);

    // 📂 Get current database
    const [dbName] = await connection.query('SELECT DATABASE() AS db');
    console.log("📂 You're connected to database:", dbName[0].db);

    // 📑 Show all tables
    const [tables] = await connection.query('SHOW TABLES');
    console.log('\n📑 Tables in database:');
    tables.forEach((row) => {
      console.log('   -', Object.values(row)[0]);
    });
  } catch (err) {
    console.error('❌ Error while connecting to MySQL:', err.message);
  } finally {
    if (connection) {
      await connection.end();
      console.log('🔌 MySQL connection is closed');
    }
  }
}

// Run the function
checkConnection();
