// Vercel API route for health check
export default function handler(req, res) {
  res.status(200).json({ ok: true });
}
