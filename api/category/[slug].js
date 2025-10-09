// Vercel API route for categories
export default async function handler(req, res) {
  const { slug } = req.query;

  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    let url = '';
    if (slug === 'mens-shoes') url = 'https://dummyjson.com/products/category/mens-shoes';
    else if (slug === 'womens-shoes') url = 'https://dummyjson.com/products/category/womens-shoes';
    else if (slug === 'kids') url = 'https://dummyjson.com/products?limit=20';
    else url = `https://dummyjson.com/products/search?q=${encodeURIComponent(slug)}`;

    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch category' });
  }
}
