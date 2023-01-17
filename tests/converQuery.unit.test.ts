import { convertQuery } from '../src/helpers/convertQuery';

describe('convertQuery', () => {
    beforeEach(() => {
        Object.defineProperty(window, 'location', {
            value: {
                href: 'http://localhost:3000/#/catalog?param1=value1&param2=value2',
            },
            writable: true,
        });
    });
    test('Convert query string to URLSearchParams object', () => {
        const params = convertQuery('catalog');
        expect(params).toBeInstanceOf(URLSearchParams);
        expect(params.get('param1')).toBe('value1');
        expect(params.get('param2')).toBe('value2');
    });
});
