import {Container} from "@/components/shared/container";
import {Title} from "@/components/shared/title";
import {Filters} from "@/components/shared/filters";
import {TopBar} from "@/components/shared/top-bar";
import {ProductsGroupList} from "@/components/shared/products-group-list";

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold"/>
            </Container>

            <TopBar/>

            <Container className="mt-10 pb-14">
                <div className="flex gap-[80px]">
                    <div className="w-[250px]">
                        <Filters/>
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductsGroupList title="Пиццы" categoryId={1} items={[{
                                id: 1,
                                name: "Чизбургер-пицца",
                                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif',
                                price: 500,
                                items: [{price: 550}]
                            },
                                {
                                    id: 2,
                                    name: "Чизбургер-пицца",
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif',
                                    price: 500,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 3,
                                    name: "Чизбургер-пицца",
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif',
                                    price: 500,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 4,
                                    name: "Чизбургер-пицца",
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif',
                                    price: 500,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 5,
                                    name: "Чизбургер-пицца",
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif',
                                    price: 500,
                                    items: [{price: 550}]
                                }, {
                                    id: 6,
                                    name: "Чизбургер-пицца",
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif',
                                    price: 500,
                                    items: [{price: 550}]
                                }

                            ]}/>
                            <ProductsGroupList title="Комбо" categoryId={2} items={[{
                                id: 1,
                                name: "Чизбургер-пицца",
                                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif',
                                price: 500,
                                items: [{price: 550}]
                            },
                                {
                                    id: 2,
                                    name: "Чизбургер-пицца",
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif',
                                    price: 500,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 3,
                                    name: "Чизбургер-пицца",
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif',
                                    price: 500,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 4,
                                    name: "Чизбургер-пицца",
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif',
                                    price: 500,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 5,
                                    name: "Чизбургер-пицца",
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif',
                                    price: 500,
                                    items: [{price: 550}]
                                }, {
                                    id: 6,
                                    name: "Чизбургер-пицца",
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38562151D1ABAB7FD749CFA7B1FC.avif',
                                    price: 500,
                                    items: [{price: 550}]
                                }

                            ]}/>
                        </div>

                        {/*<div className="flex items-center gap-6 mt-12">*/}

                        {/*    <span className="text-sm text-gray-400">5 из 65</span>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </Container>
        </>
    );
}
