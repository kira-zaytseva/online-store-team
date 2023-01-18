import { validateCardNumber } from '../src/components/modal';

describe('validateCardNumber', () => {
    it('should return false, if card number length is not 16 digits', () => {
        const result = validateCardNumber('375283234356');
        expect(result).toBeFalsy();
    });
    it('should return true', () => {
        const result = validateCardNumber('3752832343564444');
        expect(result).toBeTruthy();
    });
});
