import { validateAddress } from '../src/components/modal';

describe('validateAddress', () => {
    it('should return false, because length of word is less than 5 letters', () => {
        const result = validateAddress('Nezavisimosti Minsk BY');
        expect(result).toBeFalsy();
    });
    it('should return false, because contains less than 3 words', () => {
        const result = validateAddress('Minsk Belarus');
        expect(result).toBeFalsy();
    });
    it('should return true', () => {
        const result = validateAddress('Nezavisimosti Minsk Belarus');
        expect(result).toBeTruthy();
    });
});
