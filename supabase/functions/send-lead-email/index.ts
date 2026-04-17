import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface LeadPayload {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  source?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const payload: LeadPayload = await req.json();
    const { name, email, phone, message, source } = payload;

    const resendKey = Deno.env.get("RESEND_API_KEY");

    if (resendKey) {
      const html = `
        <h2>New Lead from Burns Realty Team Website</h2>
        ${source ? `<p><strong>Source:</strong> ${source}</p>` : ""}
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${(message || "").replace(/\n/g, "<br>")}</p>
      `;

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Burns Realty Team <onboarding@resend.dev>",
          to: ["eric.n.burns@outlook.com"],
          subject: `New Inquiry from ${name}`,
          html,
        }),
      });

      if (!res.ok) {
        const body = await res.text();
        console.error("Resend error:", body);
        return new Response(JSON.stringify({ error: "Email send failed" }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    } else {
      console.log("RESEND_API_KEY not set — skipping email for lead:", name, email);
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(JSON.stringify({ error: "Internal error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
