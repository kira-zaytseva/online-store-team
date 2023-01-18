import { validateExpiration } from '../src/components/modal';

describe('validateExpiration', () => {
    it('should return false, because first number (month) is more than 12', () => {
        const result = validateExpiration('14/23');
        expect(result).toBeFalsy();
    });
    it('should return true', () => {
        const result = validateExpiration('12/23');
        expect(result).toBeTruthy();
    });
});
