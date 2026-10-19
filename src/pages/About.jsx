import { useEffect, useState } from 'react';
import { getAbout } from '../api/client.js';

export default function About() {
  const [about, setAbout] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAbout()
      .then(setAbout)
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p className="error">Could not load about info: {error}</p>;
  if (!about) return <p>Loading...</p>;

  return (
    <section>
      <h1>About</h1>
      <dl>
        <dt>Name</dt>
        <dd>{about.name}</dd>
        <dt>Version</dt>
        <dd>{about.version}</dd>
        <dt>Description</dt>
        <dd>{about.description}</dd>
      </dl>
    </section>
  );
}
