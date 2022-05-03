import { faker } from '@faker-js/faker';

export default function handler(req, res) {
    const { amount } = req.query||10;

    switch (req.method) {
        case 'GET':
            return getDiscounts();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    async function getDiscounts(){
        const data = {
            discounts: []
        }
        for (let i = 0; i < amount; i++) {
            const discount = {
                imageLink: faker.image.imageUrl(60, 60, 'cat', true, true),
                title: faker.commerce.productName(),
                description:faker.commerce.productDescription(),
                qrCode:faker.image.cats()
            }
            data.discounts.push(discount);
        }

        res.status(200).json(data);
    }
}
