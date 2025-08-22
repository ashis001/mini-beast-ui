import { NextResponse } from 'next/server';
import { addLead } from '@/lib/data';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));

    // Required
    const customerPhone = (body.customerPhone ?? '').toString().trim();
    const customerNameRaw = (body.customerName ?? '').toString().trim();

    if (!customerPhone) {
      return NextResponse.json({ error: 'Phone is required' }, { status: 400 });
    }

    // Optional
    const firstName = (body.firstName ?? '').toString().trim();
    const lastName = (body.lastName ?? '').toString().trim();
    const customerName = customerNameRaw || `${firstName} ${lastName}`.trim() || 'Anonymous';

    const customerEmail = (body.customerEmail ?? '').toString().trim() || undefined;
    const customerAddress = (body.customerAddress ?? '').toString().trim() || undefined;
    const interestedItemId = typeof body.interestedItemId === 'number' ? body.interestedItemId : undefined;
    const notes = (body.notes ?? '').toString().trim() || undefined;
    const status = (body.status ?? 'new') as 'new' | 'contacted' | 'qualified' | 'lost' | 'won';
    const priority = (body.priority ?? 'medium') as 'low' | 'medium' | 'high' | 'urgent';
    const followUpDate = (body.followUpDate ?? '').toString().trim() || undefined; // YYYY-MM-DD

    const lead = await addLead({
      customerName,
      customerPhone,
      customerEmail,
      customerAddress,
      interestedItemId: interestedItemId ?? null,
      notes,
      status,
      priority,
      followUpDate: followUpDate ?? null,
    });

    return NextResponse.json({ success: true, lead });
  } catch (error: any) {
    console.error('POST /api/demo error:', error);
    const message = error?.message || 'Internal Server Error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
