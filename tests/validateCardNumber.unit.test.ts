import { validatePhone } from '../src/components/modal';

describe('validatePhone', () => {
    it('should return false, because it doesnt start with +', () => {
        const result = validatePhone('375283234356');
        expect(result).toBeFalsy();
    });
    it('should return true', () => {
        const result = validatePhone('+375283234356');
        expect(result).toBeTruthy();
    });
});
