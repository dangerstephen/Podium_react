export const entryPoint = 'http://shakespeare.podium.co'
const token = 'koOheljmQX'

export default async function (headers = { method: 'GET' }) {
  const h = new Headers()
  h.append('Authorization', token);

  const options = {
    headers: h
  }
    const response = await fetch(`${entryPoint}`, options)
    const results  = await response.json();
    return results;
}
