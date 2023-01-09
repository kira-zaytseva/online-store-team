import { routes } from '../enums';
import { PetsInterface } from './types';

export const data: PetsInterface[] = [
    {
        id: 1,
        title: 'Puppy food',
        information: [
            {
                id: 1,
                question: 'Description',
                answer:
                    'Meets the high energy needs of small breed dogs during a puppy’s short, intense growth period. Exclusive small kibble size designed for little dogs with small jaws and picky appetites. Provides immune support with an exclusive blend of antioxidants and vitamins.',
            },
            {
                id: 2,
                question: 'Country',
                answer: 'France',
            },
            {
                id: 3,
                question: 'Brand',
                answer: 'Royal Canin',
            },
        ],
        price: 55,
        images: ['https://i.imgur.com/HRVaJUg.jpg', 'https://i.imgur.com/juKJAEL.jpg'],
        pet: 'dogs',
        category: 'Food',
        brand: 'Royal Canin',
        stock: 7,
    },
    {
        id: 2,
        title: 'Kibble Chase Roaming Treat Dropper',
        information: [
            {
                id: 1,
                question: 'Description',
                answer:
                    'The engaging toy rolls on the floor unpredictably and randomly dispenses treats to entice your canine companion. Paw-fect for dogs of all sizes, the toy`s fun, automatic movements encourage active play.',
            },
            {
                id: 2,
                question: 'Country',
                answer: 'USA',
            },
            {
                id: 3,
                question: 'Brand',
                answer: 'PetSafe',
            },
        ],
        price: 25,
        images: ['https://i.imgur.com/KwumyL4.jpg', 'https://i.imgur.com/pHhvBuu.jpg'],
        pet: 'dogs',
        category: 'Toys',
        brand: 'PetSafe',
        stock: 1,
    },
    {
        id: 3,
        title: 'Treat Tower Treat Dispensing Toy',
        information: [
            {
                id: 1,
                question: 'Description',
                answer:
                    'Interactive learning toys makes dogs work for their reward. Difficulty level can be adjusted to make it easier or harder to get the treats. Great for pups who gobble treats and food up too quickly.',
            },
            {
                id: 2,
                question: 'Country',
                answer: 'USA',
            },
            {
                id: 3,
                question: 'Brand',
                answer: 'PetSafe',
            },
        ],
        price: 17,
        images: [
            'https://i.imgur.com/HpwYfec.jpg',
            'https://i.imgur.com/4C1oaka.jpg',
            'https://i.imgur.com/RwNgGcc.jpg',
            'https://i.imgur.com/z7WmV4M.jpg',
        ],
        pet: 'dogs',
        category: 'Toys',
        brand: 'PetSafe',
        stock: 4,
    },
    {
        id: 4,
        title: 'Breed Health Nutrition Labrador Retriever Adult',
        information: [
            {
                id: 1,
                question: 'Description',
                answer:
                    'Designed to meet the nutritional needs of purebred Labrador Retrievers 15 months and older. Specialized kibble is designed to help quick eaters to chew slowly. Promotes an ideal weight with precise calorie and fat content for large dog weight management.',
            },
            {
                id: 2,
                question: 'Country',
                answer: 'France',
            },
            {
                id: 3,
                question: 'Brand',
                answer: 'Royal Canin',
            },
        ],
        price: 75,
        images: [
            'https://i.imgur.com/6LxXpW0.jpg',
            'https://i.imgur.com/uK3onNC.jpg',
            'https://i.imgur.com/G8L3jhq.jpg',
        ],
        pet: 'dogs',
        category: 'Food',
        brand: 'Royal Canin',
        stock: 3,
    },
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
        id: 6,
        title: 'Crunchy Beef Strap',
        information: [
            {
                id: 1,
                question: 'Description',
                answer:
                    'Made from 100% natural, crunchy beef ligaments. High in protein and low in fat with a rich, meaty flavor. Crunchy texture provides a rewarding chewing experience your dog will love.',
            },
            {
                id: 2,
                question: 'Country',
                answer: 'USA',
            },
            {
                id: 3,
                question: 'Brand',
                answer: 'Bones Chews',
            },
        ],
        price: 2,
        images: [
            'https://i.imgur.com/ZSlP0lT.jpg',
            'https://i.imgur.com/Ya75lSl.jpg',
            'https://i.imgur.com/65ndtOp.jpg',
        ],
        pet: 'dogs',
        category: 'Food',
        brand: 'Bones Chews',
        stock: 9,
    },
    {
        id: 7,
        title: 'Busy Buddy Bristle Bone Treat Dispenser',
        information: [
            {
                id: 1,
                question: 'Description',
                answer:
                    'The rubber nubs and nylon bristles help stimulate gums and clean teeth. The durable nylon and heavy-duty rubber makes this toy grrr-eat for strong chewers.',
            },
            {
                id: 2,
                question: 'Country',
                answer: 'USA',
            },
            {
                id: 3,
                question: 'Brand',
                answer: 'PetSafe',
            },
        ],
        price: 14,
        images: [
            'https://i.imgur.com/aM1tanl.jpg',
            'https://i.imgur.com/QkTqpSh.jpg',
            'https://i.imgur.com/9UgiwcG.jpg',
            'https://i.imgur.com/H7iuqCu.jpg',
        ],
        pet: 'dogs',
        category: 'Toys',
        brand: 'PetSafe',
        stock: 3,
    },
    {
        id: 8,
        title: 'Ultra Ball, Medium',
        information: [
            {
                id: 1,
                question: 'Description',
                answer:
                    'High bouncing balls that can be used in the water for a splashing good time. Designed specifically for the game of fetch. Features and extra-thick rubber core and quality material that floats',
            },
            {
                id: 2,
                question: 'Country',
                answer: 'United Kingdom',
            },
            {
                id: 3,
                question: 'Brand',
                answer: 'Chuckit!',
            },
        ],
        price: 15,
        images: [
            'https://i.imgur.com/pmw5IrW.jpg',
            'https://i.imgur.com/UnPnFQg.jpg',
            'https://i.imgur.com/w65oSSW.jpg',
        ],
        pet: 'dogs',
        category: 'Toys',
        brand: 'Chuckit!',
        stock: 15,
    },
    {
        id: 9,
        title: 'Ricochet Interactive Sound Game',
        information: [
            {
                id: 1,
                question: 'Description',
                answer:
                    'Includes 2 smart toys to encourage your dog to run back and forth as he tries to catch a moving squeak sound. The durable construction is made from highly durable plastic and a soft rubber coating that can withstand intense play.',
            },
            {
                id: 2,
                question: 'Country',
                answer: 'USA',
            },
            {
                id: 3,
                question: 'Brand',
                answer: 'PetSafe',
            },
        ],
        pet: 'dogs',
        price: 35,
        images: [
            'https://i.imgur.com/rVCqAT8.jpg',
            'https://i.imgur.com/Z6pWQ4h.jpg',
            'https://i.imgur.com/xYomeUY.jpg',
        ],
        category: 'Toys',
        brand: 'PetSafe',
        stock: 3,
    },
    {
        id: 10,
        title: 'Busy Buddy Twist n Treat Treat Dispenser',
        information: [
            {
                id: 1,
                question: 'Description',
                answer: 'Can be used with treat of your choice. Made of natural rubber.',
            },
            {
                id: 2,
                question: 'Country',
                answer: 'USA',
            },
            {
                id: 3,
                question: 'Brand',
                answer: 'PetSafe',
            },
        ],
        price: 15,
        images: [
            'https://i.imgur.com/7rzYvsr.jpg',
            'https://i.imgur.com/Vy9gmEI.jpg',
            'https://i.imgur.com/zfE9y0w.jpg',
        ],
        pet: 'dogs',
        category: 'Toys',
        brand: 'PetSafe',
        stock: 7,
    },
    {
        id: 11,
        title: 'Indoor Super Slider',
        information: [
            {
                id: 1,
                question: 'Description',
                answer:
                    'An exciting pounce, chase and squeak toy. Designed for indoor use and stays safely on the floor. Slick base slides across most floors.',
            },
            {
                id: 2,
                question: 'Country',
                answer: 'United Kingdom',
            },
            {
                id: 3,
                question: 'Brand',
                answer: 'Chuckit!',
            },
        ],
        price: 13,
        images: [
            'https://i.imgur.com/gBQa0Qe.jpg',
            'https://i.imgur.com/NIrZZeQ.jpg',
            'https://i.imgur.com/pJyIcIc.jpg',
        ],
        pet: 'dogs',
        category: 'Toys',
        brand: 'Chuckit!',
        stock: 1,
    },
    {
        id: 12,
        title: 'Dog finger toothbrush',
        information: [
            {
                id: 1,
                question: 'Description',
                answer:
                    'The unique 360º design allows you to clean your pet`s entire mouth with just a few swipes. The silicone bristles are soft, yet abrasive enough to remove plaque. Fits thin and thicker fingers, just add a few drops of water to make the silicone expand. It will also create a seal for smaller fingers!',
            },
            {
                id: 2,
                question: 'Country',
                answer: 'China',
            },
            {
                id: 3,
                question: 'Brand',
                answer: 'Jasper',
            },
        ],
        price: 16,
        images: [
            'https://i.imgur.com/iaSmYdE.jpg',
            'https://i.imgur.com/c3ToFgK.jpg',
            'https://i.imgur.com/Eq7VzB5.jpg',
            'https://i.imgur.com/9lhzQ3d.jpg',
        ],
        pet: 'dogs',
        category: 'Grooming supplies',
        brand: 'Jasper',
        stock: 6,
    },
    {
        id: 13,
        title: 'Nutri-Vet Chicken Flavored Enzymatic Toothpaste',
        information: [
            {
                id: 1,
                question: 'Description',
                answer:
                    'Made in the USA with your dog’s dental health in mind. This non-foaming toothpaste is safe to use on all doggies.',
            },
            {
                id: 2,
                question: 'Country',
                answer: 'China',
            },
            {
                id: 3,
                question: 'Brand',
                answer: 'Jasper',
            },
        ],
        price: 7,
        images: [
            'https://i.imgur.com/WXA69NK.jpg',
            'https://i.imgur.com/LaKV4ce.jpg',
            'https://i.imgur.com/vleheGd.jpg',
        ],
        pet: 'dogs',
        category: 'Grooming supplies',
        brand: 'Jasper',
        stock: 3,
    },
    {
        id: 14,
        title: 'Dog nail clipper',
        information: [
            {
                id: 1,
                question: 'Description',
                answer:
                    'Japanese high-carbon steel blades for long-lasting sharpness and durability. Sharp, long-lasting cutting edge helps trim dog or cat nails cleanly and quickly.',
            },
            {
                id: 2,
                question: 'Country',
                answer: 'Japan',
            },
            {
                id: 3,
                question: 'Brand',
                answer: 'Frisco',
            },
        ],
        price: 10,
        images: ['https://i.imgur.com/D7UopwG.jpg', 'https://i.imgur.com/NhZmVCZ.jpg'],
        pet: 'dogs',
        category: 'Grooming supplies',
        brand: 'Frisco',
        stock: 7,
    },
    {
        id: 15,
        title: 'Dog grooming brush',
        information: [
            {
                id: 1,
                question: 'Description',
                answer:
                    'Stainless-steel slicker brush remove tangles effectively, yet with minimal discomfort. Ergonomic anti-slip wooden handle protects against hand and wrist strain.',
            },
            {
                id: 2,
                question: 'Country',
                answer: 'Japan',
            },
            {
                id: 3,
                question: 'Brand',
                answer: 'Frisco',
            },
        ],
        price: 17,
        images: [
            'https://i.imgur.com/WibOAZZ.jpg',
            'https://i.imgur.com/RVLFhE5.jpg',
            'https://i.imgur.com/0GGdXge.jpg',
        ],
        pet: 'dogs',
        category: 'Grooming supplies',
        brand: 'Frisco',
        stock: 2,
    },
    {
        id: 16,
        title: 'Dog ear cleaner',
        information: [
            {
                id: 1,
                question: 'Description',
                answer:
                    'This dog ear cleaner removes dirt, debris and odor-causing ear wax from your pup’s ears. Formulated with salicylic acid plus tea tree and eucalyptus oils to help maintain a healthy ear environment. With aloe vera juice to add a boost of natural hydration.',
            },
            {
                id: 2,
                question: 'Country',
                answer: 'Japan',
            },
            {
                id: 3,
                question: 'Brand',
                answer: 'Frisco',
            },
        ],
        price: 8,
        images: [
            'https://i.imgur.com/5xOZRq5.jpg',
            'https://i.imgur.com/il8YztR.jpg',
            'https://i.imgur.com/dcVyVo0.jpg',
        ],
        pet: 'dogs',
        category: 'Grooming supplies',
        brand: 'Frisco',
        stock: 3,
    },
    {
        id: 17,
        title: 'Dog shampoo',
        information: [
            {
                id: 1,
                question: 'Description',
                answer:
                    'Nourishing oatmeal shampoo gently cleans and soothes dry skin. Ideal for dogs and cats. Oat protein works to actively hydrate, protect and nourish with the help of soothing chamomile extract. Hydrating aloe vera naturally hydrates skin and coat, plus there are zero dyes or parabens.',
            },
            {
                id: 2,
                question: 'Country',
                answer: 'Japan',
            },
            {
                id: 3,
                question: 'Brand',
                answer: 'Frisco',
            },
        ],
        price: 10,
        images: [
            'https://i.imgur.com/UibbkcO.jpg',
            'https://i.imgur.com/EdNCLGH.jpg',
            'https://i.imgur.com/H9kcpOF.jpg',
        ],
        pet: 'dogs',
        category: 'Grooming supplies',
        brand: 'Frisco',
        stock: 2,
    },
    {
        id: 18,
        title: 'Dog conditioner',
        information: [
            {
                id: 1,
                question: 'Description',
                answer:
                    'Oat protein, jojoba oil, and nutrients like vitamins B and E help nourish and strengthen their coat. With regular use, it’s formulated to help release loose hair and strengthen the undercoat to help manage shedding. Contains no parabens or dyes. Features hydrating aloe vera to help nourish and moisturize.',
            },
            {
                id: 2,
                question: 'Country',
                answer: 'Japan',
            },
            {
                id: 3,
                question: 'Brand',
                answer: 'Frisco',
            },
        ],
        price: 10,
        images: [
            'https://i.imgur.com/U3M1EGk.jpg',
            'https://i.imgur.com/IKCOxuL.jpg',
            'https://i.imgur.com/icBPGnO.jpg',
        ],
        pet: 'dogs',
        category: 'Grooming supplies',
        brand: 'Frisco',
        stock: 3,
    },
    {
        id: 19,
        title: 'French Bulldog Puppy Dry Food + N-Bone Puppy Teething Ring Chicken Flavor Dog Treats',
        information: [
            {
                id: 1,
                question: 'Description',
                answer:
                    'Provides 100% of the complete and balanced nutrition that purebred French Bulldogs puppies under 12 months need. Distinctive formulation works to support a robust immune system and promote growth during a puppy’s first year of life.',
            },
            {
                id: 2,
                question: 'Country',
                answer: 'France',
            },
            {
                id: 3,
                question: 'Brand',
                answer: 'Royal Canin',
            },
        ],
        price: 30,
        images: [
            'https://i.imgur.com/lC8VBc3.jpg',
            'https://i.imgur.com/DvBVxRT.jpg',
            'https://i.imgur.com/3Pxaync.jpg',
        ],
        pet: 'dogs',
        category: 'Food',
        brand: 'Royal Canin',
        stock: 7,
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
    {
        id: 21,
        title: 'Busy Buddy Bouncy Bone Treat Dispenser',
        information: [
            {
                id: 1,
                question: 'Description',
                answer:
                    'This 3-in-1 toy features a rubber ball, a nylon bone and refillable treat-holding rings to keep your buddy busy! The durable nylon and vanilla-scented rubber makes this toy paw-fect for strong chewers.',
            },
            {
                id: 2,
                question: 'Country',
                answer: 'USA',
            },
            {
                id: 3,
                question: 'Brand',
                answer: 'PetSafe',
            },
        ],
        price: 13,
        images: [
            'https://i.imgur.com/kfo3f77.jpg',
            'https://i.imgur.com/mV8HD3L.jpg',
            'https://i.imgur.com/Oyy8Moh.jpg',
            'https://i.imgur.com/zivZxS5.jpg',
        ],
        category: 'Toys',
        pet: 'dogs',
        brand: 'PetSafe',
        stock: 3,
    },
    {
        id: 22,
        title: 'Ultra Rubber Ball',
        information: [
            {
                id: 1,
                question: 'Description',
                answer:
                    'High bouncing balls that can be used in the water for a splashing good time. Designed specifically for the game of fetch. Features and extra-thick rubber core and quality material that floats',
            },
            {
                id: 2,
                question: 'Country',
                answer: 'United Kingdom',
            },
            {
                id: 3,
                question: 'Brand',
                answer: 'Chuckit!',
            },
        ],
        price: 11,
        images: [
            'https://i.imgur.com/5HACgNz.jpg',
            ' https://i.imgur.com/P2uUOX4.jpg',
            'https://i.imgur.com/LrlE0xc.jpg',
        ],
        pet: 'dogs',
        category: 'Toys',
        brand: 'Chuckit!',
        stock: 2,
    },
    {
        id: 23,
        title: 'Trash Can Hide & Seek Puzzle Plush Squeaky',
        information: [
            {
                id: 1,
                question: 'Description',
                answer:
                    'Perfect for games of hide-and-seek with your pup. Stuff the squeaky racoons in the soft trash can and watch your pup pull them out! The plush squeak toys have built-in squeakers to get your dog excited about playtime.',
            },
            {
                id: 2,
                question: 'Country',
                answer: 'Japan',
            },
            {
                id: 3,
                question: 'Brand',
                answer: 'Frisco',
            },
        ],
        price: 10,
        images: [
            'https://i.imgur.com/RzfwbVx.jpg',
            'https://i.imgur.com/2I8zG6q.jpg',
            'https://i.imgur.com/PQ7vzO2.jpg',
            'https://i.imgur.com/8s3VB5P.jpg',
        ],
        pet: 'dogs',
        category: 'Toys',
        brand: 'Frisco',
        stock: 3,
    },
    {
        id: 24,
        title: 'Busy Buddy Tug-A-Jug Treat Dispenser',
        information: [
            {
                id: 1,
                question: 'Description',
                answer:
                    'Clear base that can be filled with kibble or treats. Interactive play builds bonds between people and pets. Durable non-toxic material withstands prolonged play. Textured rubber wrap cleans teeth',
            },
            {
                id: 2,
                question: 'Country',
                answer: 'USA',
            },
            {
                id: 3,
                question: 'Brand',
                answer: 'PetSafe',
            },
        ],
        price: 22,
        images: [
            'https://i.imgur.com/HiITnCh.jpg',
            'https://i.imgur.com/k1X08K1.jpg',
            'https://i.imgur.com/hWk7R7G.jpg',
            'https://i.imgur.com/ZxFvywt.jpg',
            'https://i.imgur.com/qnsUm9T.jpg',
        ],
        pet: 'dogs',
        category: 'Toys',
        brand: 'PetSafe',
        stock: 3,
    },
    {
        id: 25,
        title: 'Indoor Roller',
        information: [
            {
                id: 1,
                question: 'Description',
                answer:
                    'Multilayer construction for added durability. Textured chenille fabric that is ideal for small dogs and puppies',
            },
            {
                id: 2,
                question: 'Country',
                answer: 'United Kingdom',
            },
            {
                id: 3,
                question: 'Brand',
                answer: 'Chuckit!',
            },
        ],
        price: 10,
        images: ['https://i.imgur.com/K7vnCcg.jpg', 'https://i.imgur.com/z0PlzAX.jpg'],
        pet: 'dogs',
        category: 'Toys',
        brand: 'Chuckit!',
        stock: 17,
    },
    {
        id: 26,
        title: 'Sheba Soup Tuna Fillets Wet Cat Food Pouches - 4 x 40g',
        information: [
            {
                id: 1,
                question: 'Description',
                answer: 'High quality adult cat food providing complete nutrition for your feline companion.',
            },
            {
                id: 2,
                question: 'Country',
                answer: 'United States',
            },
            {
                id: 3,
                question: 'Brand',
                answer: 'Sheba',
            },
        ],
        price: 95,
        images: ['https://i.imgur.com/Qd2FkQT.png', 'https://i.imgur.com/6Raaoyi.png'],
        pet: 'cats',
        category: 'Food',
        stock: 6,
        brand: 'Sheba',
    },
    {
        id: 27,
        title: 'Sheba Soup Chicken Fillets Wet Cat Food Pouches - 4 x 40g',
        information: [
            {
                id: 1,
                question: 'Description',
                answer:
                    'Sheba soup for cats is a classic recipe of delicately flaked morsels in a smooth, silky soup your cat will adore.',
            },
            {
                id: 2,
                question: 'Country',
                answer: 'United States',
            },
            {
                id: 3,
                question: 'Brand',
                answer: 'Sheba',
            },
        ],
        price: 85,
        images: ['https://i.imgur.com/sNgEPq1.png', 'https://i.imgur.com/1aidDhL.png'],
        pet: 'cats',
        category: 'Food',
        stock: 5,
        brand: 'Sheba',
    },
];

export const pets = [
    {
        title: 'dogs',
        image: 'https://i.imgur.com/lp87sKW.png',
        link: `#${routes.CatalogPage}?pet=dogs`,
    },
    {
        title: 'cats',
        image: 'https://i.imgur.com/aL0NOhH.png',
        link: `#${routes.CatalogPage}?pet=cats`,
    },
    {
        title: 'fish',
        image: 'https://i.imgur.com/AvcxmFX.png',
        link: `#${routes.CatalogPage}?pet=fish`,
    },
];
