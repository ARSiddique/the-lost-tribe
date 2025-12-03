// app/api/contact/route.js
export async function POST(req) {
  try {
    const body = await req.json();
    // TODO: integrate email service (Resend, SendGrid, etc.)
    console.log("Contact message:", body);
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ ok: false }), { status: 400 });
  }
}
