import fs from 'fs';


// export async function GET(params) {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await res.json();

//   return Response.json({ data })
// }

export async function GET(params) {
  console.log('params', params.Map);

  console.log('params', params.Map);

  const filePathRead = `public/metadata/unrevealed/191.json`;
  const revealedData = fs.readFileSync(filePathRead, 'utf-8');

  const filePathWrite = `public/metadata/hidden/191.json`;
  fs.writeFileSync(filePathWrite, revealedData, 'utf-8');

  console.log('wrote');
  return Response.json(JSON.parse(revealedData))

}



