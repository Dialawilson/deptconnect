import { Request, Response } from 'express';
import prisma from '../config/db';
import { AuthRequest } from '../middlewares/auth';

// Product Controllers
export const createProduct = async (req: AuthRequest, res: Response) => {
  try {
    const { name, description, price, stock, imageUrl } = req.body;
    const product = await prisma.product.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        stock: parseInt(stock),
        imageUrl,
      },
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error });
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
};

// Order Controllers
export const createOrder = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    const { items } = req.body; // Array of { productId, quantity }

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: 'No items provided' });
    }

    // Calculate total and verify stock
    let total = 0;
    interface OrderItemInput {
      productId: string;
      quantity: number;
      price: number;
    }
    const orderItems: OrderItemInput[] = [];

    for (const item of items) {
      const product = await prisma.product.findUnique({ where: { id: item.productId } });
      if (!product) {
        return res.status(400).json({ message: `Product ${item.productId} not found` });
      }
      if (product.stock < item.quantity) {
        return res.status(400).json({ message: `Insufficient stock for ${product.name}` });
      }
      total += product.price * item.quantity;
      orderItems.push({
        productId: item.productId,
        quantity: item.quantity,
        price: product.price,
      });
    }

    // Create Order with Transaction
    // Note: In a real app, use prisma.$transaction
    const order = await prisma.$transaction(async (tx: any) => {
        const newOrder = await tx.order.create({
            data: {
                userId,
                total,
                status: 'COMPLETED', // Mock payment success
                items: {
                    create: orderItems
                }
            }
        });

        // Update stock
        for (const item of orderItems) {
            await tx.product.update({
                where: { id: item.productId },
                data: { stock: { decrement: item.quantity } }
            });
        }

        return newOrder;
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error processing order', error });
  }
};
