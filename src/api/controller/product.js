import { prisma } from '../../lib/prisma'; 

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const products = await prisma.product.findMany(); 
    res.status(200).json(products);
  } else if (req.method === 'POST') {
    const newProduct = await prisma.product.create({
      data: req.body, 
    });
    res.status(201).json(newProduct);
  }
}
