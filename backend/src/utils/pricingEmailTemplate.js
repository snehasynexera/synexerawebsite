import SERVICE_PRICING from "../config/servicePricing.js";

export function buildPricingEmail() {
  const rowsHtml = SERVICE_PRICING.map(
    (item) =>
      `<tr>
        <td style="padding:10px;border:1px solid #e5e7eb;">${item.service}</td>
        <td style="padding:10px;border:1px solid #e5e7eb;">${item.price}</td>
      </tr>`,
  ).join("");

  const textLines = SERVICE_PRICING.map(
    (item, index) => `${index + 1}. ${item.service} - ${item.price}`,
  ).join("\n");

  return {
    subject: "Synexera Service Catalog & Pricing",
    text: `Hi,\n\nThank you for your interest in Synexera. Here is our current service catalog:\n\n${textLines}\n\nFor a tailored proposal, reply to this email and share your requirements.\n\nRegards,\nSynexera Team`,
    html: `<div style="font-family:Arial,sans-serif;color:#111827;line-height:1.5">
      <h2 style="margin-bottom:12px;">Synexera Service Catalog & Pricing</h2>
      <p>Hi,</p>
      <p>Thank you for your interest in Synexera. Please find our current service pricing below:</p>
      <table style="border-collapse:collapse;width:100%;max-width:640px;">
        <thead>
          <tr>
            <th style="text-align:left;padding:10px;border:1px solid #e5e7eb;background:#f9fafb;">Service</th>
            <th style="text-align:left;padding:10px;border:1px solid #e5e7eb;background:#f9fafb;">Price</th>
          </tr>
        </thead>
        <tbody>${rowsHtml}</tbody>
      </table>
      <p style="margin-top:16px;">For a tailored proposal, reply to this email and share your requirements.</p>
      <p>Regards,<br/>Synexera Team</p>
    </div>`,
  };
}
