import type { Product, CartItem } from './types.js';

export class Cart {
  private items: CartItem[] = [];

  getItems(): CartItem[] {
    return this.items;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  getItemCount(): number {
    return this.items.length;
  }

  findItem(name: string): CartItem | undefined {
    return this.items.find(item => item.name === name);
  }

  addItem(product: Product): void {
    const newItem: CartItem = { ...product, quantity: 1 };
    this.items.push(newItem);
  }

  increaseQuantity(name: string): void {
    this.items = this.items.map(item => {
      if (name === item.name) {
        return {
          ...item,
          quantity: item.quantity + 1
        };
      }
      return item;
    });
  }

  decreaseQuantity(name: string): void {
    this.items = this.items.map(item => {
      if (name === item.name) {
        return {
          ...item,
          quantity: item.quantity - 1
        };
      }
      return item;
    }).filter(item => item.quantity > 0);
  }

  removeItem(name: string): void {
    this.items = this.items.filter(product => product.name !== name);
  }

  calculateTotal(): string {
    return this.items.reduce((total, item) => total + (item.quantity * item.price), 0).toFixed(2);
  }

  clear(): void {
    this.items = [];
  }
}
