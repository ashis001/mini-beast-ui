export type LearningPath = {
  id: string;
  title: string;
  description: string;
  link: string;
};

export type Contact = {
  id: number;
  name: string;
  email: string | null;
  phone: string | null;
  message: string | null;
  created_at: string;
};

export type Lead = {
  id: number;
  admin_user_id: number;
  customer_name: string;
  customer_phone: string;
  customer_email: string | null;
  customer_address: string | null;
  interested_item_id: number | null;
  notes: string | null;
  status: 'new' | 'contacted' | 'qualified' | 'lost' | 'won';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  follow_up_date: string | null; // YYYY-MM-DD
  created_at: string;
  updated_at: string;
};
