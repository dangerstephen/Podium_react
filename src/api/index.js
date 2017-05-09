const entryPoint = 'http://shakespeare.podium.co'
const token = 'koOheljmQX'

export default async function (url = '', headers = { method: 'GET' }) {
  const h = new Headers()
  h.append('Authorization', token);

  const options = {
    headers: h
  }
    const response = await fetch(`${entryPoint}${url}`, options)
    const results  = await response.json();
    return results;
}
