import {prisma} from "../../../prisma/prisma-client";
import {Container} from "@/shared/components/shared/container";
import {Title} from "@/shared/components/shared/title";
import {TopBar} from "@/shared/components/shared/top-bar";
import {Filters} from "@/shared/components/shared/filters";
import {ProductsGroupList} from "@/shared/components/shared/products-group-list";

export default async function Home() {

    const categories = await prisma.category.findMany({
        include: {
            products: {
                include: {
                    ingredients: true,
                    items: true
                }
            }
        }
    })

    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold"/>
            </Container>

            <TopBar items={categories.filter((category) => category.products.length > 0)} />

            <Container className="mt-10 pb-14">
                <div className="flex gap-[80px]">
                    <div className="w-[250px]">
                        <Filters/>
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            {
                                categories.map((category) => (
                                    category.products.length > 0 && (
                                        <ProductsGroupList title={category.name} items={category.products}
                                                           categoryId={category.id} key={category.id}/>
                                    )
                                ))
                            }
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
