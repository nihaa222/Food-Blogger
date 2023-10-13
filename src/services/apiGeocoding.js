export async function getAddress({ latitude, longitude }) {
  console.log(latitude, 'latitude');
  console.log(longitude, 'longitude');
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  );
  console.log(res.status, 'status');
  if (!res.ok) throw Error('Failed getting address');

  const data = await res.json();
  return data;
}
