import { NextResponse } from 'next/server';
import { addContact } from '@/lib/data';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const name = (body.name ?? '').toString().trim();
    const email = (body.email ?? '').toString().trim() || undefined;
    const phone = (body.phone ?? '').toString().trim() || undefined;
    const message = (body.message ?? '').toString().trim() || undefined;

    let firstName = (body.firstName ?? '').toString().trim() || undefined;
    let lastName = (body.lastName ?? '').toString().trim() || undefined;
    const company = (body.company ?? '').toString().trim() || undefined;
    const jobTitle = (body.jobTitle ?? '').toString().trim() || undefined;
    const country = (body.country ?? '').toString().trim() || undefined;
    const zip = (body.zip ?? '').toString().trim() || undefined;
    const consent = Boolean(body.consent ?? false);

    if (!name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    // Fallback: derive first/last from name if not provided
    if (!firstName || !lastName) {
      const parts = name.split(' ').filter(Boolean);
      if (!firstName && parts.length > 0) firstName = parts[0];
      if (!lastName && parts.length > 1) lastName = parts.slice(1).join(' ');
    }

    const contact = await addContact({
      name,
      firstName,
      lastName,
      email,
      phone,
      company,
      jobTitle,
      country,
      zip,
      consent,
      message,
    });
    return NextResponse.json({ success: true, contact });
  } catch (error: any) {
    console.error('POST /api/contact error:', error);
    // Return the error message to aid debugging (remove or mask in production if needed)
    const message = error?.message || 'Internal Server Error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
