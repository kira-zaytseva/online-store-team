import { getCurrentPets } from '../src/helpers/getCurrentPets';
import { data } from '../src/data/data';

describe('getCurrentPets', () => {
    it('should return products that match the filter', () => {
        const filterData = { pet: ['dogs'], category: ['Food'], brand: ['Purina'] };
        const result = getCurrentPets(filterData);

        expect(result).toStrictEqual([
            {
                id: 5,
                title: 'Complete Essentials Chicken & Rice Entree',
                information: [
                    {
                        id: 1,
                        question: 'Description',
                        answer:
                            'Real chicken provides a source of high-quality protein, helping maintain your pooch s strong muscles as he jumps and plays into his senior years. Made for dogs ages 7 and up, this high quality dog food gives your senior pal the optimal nutrition to support his nose- to - tail well - being.No corn, wheat, soy or potatoes are added to this premium wet dog food, meeting your high standards for your furry friend.',
                    },
                    {
                        id: 2,
                        question: 'Country',
                        answer: 'USA',
                    },
                    {
                        id: 3,
                        question: 'Brand',
                        answer: 'Purina',
                    },
                ],
                price: 30,
                images: [
                    'https://i.imgur.com/7Xt5IEv.jpg',
                    'https://i.imgur.com/zZg3Y6i.jpg',
                    'https://i.imgur.com/scUg4Cu.jpg',
                    'https://i.imgur.com/QMYJVu8.jpg',
                ],
                pet: 'dogs',
                category: 'Food',
                brand: 'Purina',
                stock: 3,
            },
            {
                id: 20,
                title: 'Plan Sport Development Puppy High Protein Beef & Rice',
                information: [
                    {
                        id: 1,
                        question: 'Description',
                        answer:
                            'Real Beef is the #1 ingredient in this high-quality wet dog food for puppies. Beef canned dog food for puppies including brain-nourishing nutrients including DHA for brain and vision development. Purina high-protein wet dog food for puppies to promote lean muscle in growing puppies.',
                    },
                    {
                        id: 2,
                        question: 'Country',
                        answer: 'USA',
                    },
                    {
                        id: 3,
                        question: 'Brand',
                        answer: 'Purina',
                    },
                ],
                price: 36,
                images: ['https://i.imgur.com/kYCpJkD.jpg', 'https://i.imgur.com/lBCdu2C.jpg'],
                category: 'Food',
                pet: 'dogs',
                brand: 'Purina',
                stock: 4,
            },
        ]);
    });
    it('should return all products when no filter is provided', () => {
        const result = getCurrentPets({});
        expect(result).toStrictEqual(data);
    });
    it('should return an empty array when no products match the filter', () => {
        const filterData = { pet: ['cat'], category: ['toy'], brand: ['Purina'] };
        const result = getCurrentPets(filterData);
        expect(result).toStrictEqual([]);
    });
});
