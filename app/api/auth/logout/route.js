import { cookies } from 'next/headers';

export async function POST() {
  try {
    // Remove the session cookie
    cookies().delete('session');
    
    return Response.json({ status: 'success' });
  } catch (error) {
    console.error('Logout error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
