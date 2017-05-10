export default async function (url = '', headers = { method: 'GET' }) {
  const h = new Headers()
  h.append('Authorization', 'koOheljmQX');

  const options = {
    headers: h
  }
    const response = await fetch(`${url}`, options)
    const results  = await response.json();
    return results;
}
