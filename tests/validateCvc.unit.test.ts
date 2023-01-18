import { validateCvc } from '../src/components/modal';

describe('validatePhone', () => {
    it('should return false, because length is not 3 digits', () => {
        const result = validateCvc('3752');
        expect(result).toBeFalsy();
    });
    it('should return false, because contains letters', () => {
        const result = validateCvc('3s3');
        expect(result).toBeFalsy();
    });
    it('should return true', () => {
        const result = validateCvc('375');
        expect(result).toBeTruthy();
    });
});
