import ProductPage from '../src/pages/product';

describe('checkStock', () => {
    const page = new ProductPage('test');
    it('should return "Not available" for 0 quantity in stock', () => {
        const result = page.checkStock(0);
        expect(result).toEqual('Not available');
    });
    it('should return "In stock" for >0 quantity in stock', () => {
        const result = page.checkStock(20);
        expect(result).toEqual('In stock');
    });
});
