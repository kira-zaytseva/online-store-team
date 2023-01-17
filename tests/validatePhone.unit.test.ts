import { validateCardNumber } from '../src/components/modal';

describe('validateCardNumber', () => {
    it('should return false', () => {
        const result = validateCardNumber('375283234356');
        expect(result).toEqual(false);
    });
    it('should return true', () => {
        const result = validateCardNumber('3752832343564444');
        expect(result).toEqual(true);
    });
});
