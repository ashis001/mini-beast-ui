import pool from './db';
import type { Contact, Lead } from '@/lib/types';

async function queryDatabase<T>(sql: string, params: any[] = []): Promise<T[]> {
  let connection;
  try {
    connection = await pool.getConnection();
    const [rows] = await connection.query(sql, params);
    return rows as T[];
  } finally {
    if (connection) connection.release();
  }
}

export async function addContact(input: {
  name: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  jobTitle?: string;
  country?: string;
  zip?: string;
  consent?: boolean;
  message?: string;
}): Promise<Contact> {
  let conn: any;
  try {
    conn = await pool.getConnection();
    await conn.beginTransaction();

    const sql = 'INSERT INTO `contacts` (`name`, `first_name`, `last_name`, `email`, `phone`, `company`, `job_title`, `country`, `zip`, `consent`, `message`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [
      input.name,
      input.firstName || null,
      input.lastName || null,
      input.email || null,
      input.phone || null,
      input.company || null,
      input.jobTitle || null,
      input.country || null,
      input.zip || null,
      input.consent ? 1 : 0,
      input.message || null,
    ];

    const [result]: any = await conn.query(sql, values);
    const insertId = result.insertId as number;

    const [rows] = await conn.query('SELECT * FROM `contacts` WHERE `id` = ?', [insertId]);

    await conn.commit();
    return (rows as Contact[])[0];
  } catch (err) {
    if (conn) await conn.rollback();
    throw err;
  } finally {
    if (conn) conn.release();
  }
}

export async function listContacts(limit = 50): Promise<Contact[]> {
  return queryDatabase<Contact>('SELECT * FROM `contacts` ORDER BY `id` DESC LIMIT ?', [limit]);
}

export async function addLead(input: {
  adminUserId?: number;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  customerAddress?: string;
  interestedItemId?: number | null;
  notes?: string;
  status?: 'new' | 'contacted' | 'qualified' | 'lost' | 'won';
  priority?: 'low' | 'medium' | 'high' | 'urgent';
  followUpDate?: string | null; // YYYY-MM-DD
}): Promise<Lead> {
  const sql = `INSERT INTO \`leads\` (
      \`admin_user_id\`, \`customer_name\`, \`customer_phone\`, \`customer_email\`, \`customer_address\`,
      \`interested_item_id\`, \`notes\`, \`status\`, \`priority\`, \`follow_up_date\`
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [
    input.adminUserId ?? 1,
    input.customerName,
    input.customerPhone,
    input.customerEmail || null,
    input.customerAddress || null,
    input.interestedItemId ?? null,
    input.notes || null,
    input.status ?? 'new',
    input.priority ?? 'medium',
    input.followUpDate ?? null,
  ];

  const [result]: any = await pool.query(sql, values);
  const id = result.insertId as number;
  const rows = await queryDatabase<Lead>('SELECT * FROM `leads` WHERE `id` = ?', [id]);
  return rows[0];
}
