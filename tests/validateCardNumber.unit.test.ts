import { validatePhone } from '../src/components/modal';

describe('validatePhone', () => {
    it('should return false', () => {
        const result = validatePhone('375283234356');
        expect(result).toEqual(false);
    });
    it('should return true', () => {
        const result = validatePhone('+375283234356');
        expect(result).toEqual(true);
    });
});
