const API_BASE_URL = 'http://localhost:3000';

export async function createResources(payload) {
    const res = await fetch(`${API_BASE_URL}/resources`, {
        method: 'POST',
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    if (!res.ok) {
        throw new Error(`Could not create resource: ${res.status}`);
    }
    return res.json();
}

export async function updateResource(resourceId, payload) {
  const res = await fetch(`${API_BASE_URL}/resources/${resourceId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Could not update resource: ${res.status}`);
  }

  return res.json();
}

export async function fetchResources() {
    console.log(`${API_BASE_URL}/resources`);
  const res = await fetch(`${API_BASE_URL}/resources`);

  if (!res.ok) {
    throw new Error(`Could not load resources: ${res.status}`);
  }

  return res.json();
}

export async function fetchResourcesById(resourceId) {
  const res = await fetch(`${API_BASE_URL}/resources/${resourceId}`);

  if (!res.ok) {
    throw new Error(`Could not load resource: ${res.status}`);
  }

  return res.json();
}