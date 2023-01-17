import { validateCvc } from '../src/components/modal';

describe('validatePhone', () => {
    it('should return false, because of length > 3', () => {
        const result = validateCvc('3752');
        expect(result).toEqual(false);
    });
    it('should return false, because contains letters', () => {
        const result = validateCvc('3s3');
        expect(result).toEqual(false);
    });
    it('should return true', () => {
        const result = validateCvc('375');
        expect(result).toEqual(true);
    });
});
