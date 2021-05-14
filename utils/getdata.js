import path from 'path';
import fs from 'fs';

const getData = async () => {
  const filepath = path.join(process.cwd(), 'data', 'reviews.json');
  const jsonData = await fs.readFileSync(filepath)
  const data = JSON.parse(jsonData);
  return data
}

export default getData