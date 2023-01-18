import { validateName } from '../src/components/modal';

describe('validateName', () => {
    it('should return false, because length of word is less than 3 letters', () => {
        const result = validateName('Ki Zayt');
        expect(result).toBeFalsy();
    });
    it('should return false, because contains less than 2 words', () => {
        const result = validateName('Kira');
        expect(result).toBeFalsy();
    });
    it('should return true', () => {
        const result = validateName('Kira Zaytsava');
        expect(result).toBeTruthy();
    });
});
