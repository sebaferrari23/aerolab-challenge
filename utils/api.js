export function getApiURL(path) {
  return `${process.env.NEXT_PUBLIC_API_URL}${path}`;
}

export async function fetchAPI(path) {
  const requestUrl = getApiURL(path);
  const response = await fetch(requestUrl, {
    headers: { Authorization: process.env.NEXT_PUBLIC_TOKEN },
  });
  const data = await response.json();
  return data;
}

export async function getProducts() {
  const products = await fetchAPI('products');
  return products;
}
