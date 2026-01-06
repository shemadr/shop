import { loadProducts } from './data.js';
import { Cart } from './cart.js';
import { OrderManager } from './order.js';
import { Renderer } from './renderer.js';
import type { Product } from './types.js';

class App {
  private products: Product[] = [];
  private cart: Cart;
  private orderManager: OrderManager;
  private renderer: Renderer;

  constructor() {
    this.cart = new Cart();
    this.orderManager = new OrderManager();
    this.renderer = new Renderer();
  }

  async initialize(): Promise<void> {
    this.products = await loadProducts();
    this.render();
    this.attachGlobalEventListeners();
  }

  private attachGlobalEventListeners(): void {
    const newOrderBtn = document.getElementById('new-order-btn');
    newOrderBtn?.addEventListener('click', () => this.handleNewOrder());
  }

  private handleAddToCart(product: Product): void {
    this.cart.addItem(product);
    this.render();
  }

  private handleIncreaseQuantity(name: string): void {
    this.cart.increaseQuantity(name);
    this.render();
  }

  private handleDecreaseQuantity(name: string): void {
    this.cart.decreaseQuantity(name);
    this.render();
  }

  private handleRemoveProduct(name: string): void {
    this.cart.removeItem(name);
    this.render();
  }

  private handleConfirmOrder(): void {
    const cartItems = this.cart.getItems();
    const total = this.cart.calculateTotal();
    this.orderManager.showConfirmModal(cartItems, total);
  }

  private handleNewOrder(): void {
    this.cart.clear();
    this.orderManager.hideConfirmModal();
    this.render();
  }

  private render(): void {
    this.renderer.renderProducts(
      this.products,
      this.cart.getItems(),
      (product) => this.handleAddToCart(product),
      (name) => this.handleIncreaseQuantity(name),
      (name) => this.handleDecreaseQuantity(name)
    );

    this.renderer.renderCart(
      this.cart.getItems(),
      this.cart.calculateTotal(),
      (name) => this.handleRemoveProduct(name),
      () => this.handleConfirmOrder()
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.initialize();
});
