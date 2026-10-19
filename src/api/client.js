const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export async function getAbout() {
  const res = await fetch(`${API_URL}/about`);
  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }
  return res.json();
}
