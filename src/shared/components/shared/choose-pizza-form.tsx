'use client';

import React from 'react';
import {Ingredient} from '@prisma/client';
import {Title} from './title';
import {cn} from "@/shared/lib/utils";
import {PizzaImage} from "@/shared/components/shared/pizza-image";
import {Button} from "@/shared/components/ui/button";
import {GroupVariants} from "@/shared/components/shared/group-variants";
import {PizzaSize, pizzaSizes, PizzaType} from "@/shared/constants";

interface Props {
    imageUrl: string;
    name: string;
    ingredients: Ingredient[];
    // items: ProductItem[];
    loading?: boolean;
    // onSubmit: (itemId: number, ingredients: number[]) => void;
    className?: string;
}

/**
 * Форма выбора ПИЦЦЫ
 */
export const ChoosePizzaForm: React.FC<Props> = ({
                                                     name,
                                                     imageUrl,
                                                     ingredients,
                                                     loading,
                                                     className,
                                                 }) => {
    const [size, setSize] = React.useState<PizzaSize>(20)
    const [type, setType] = React.useState<PizzaType>(1)

    const textDetaills = '30 см, традиционное тесто 30г'
    const totalPrice = '350р'


    return (
        <div className={cn(className, 'flex flex-1')}>
            <PizzaImage imageUrl={imageUrl} size={size}/>

            <div className="w-[490px] bg-[#f7f6f5] p-7">
                <Title text={name} size="md" className="font-extrabold mb-1"/>

                <p className="text-gray-400">{textDetaills}</p>

                {/*<div className="flex flex-col gap-4 mt-5">*/}
                <GroupVariants
                     items={pizzaSizes}
                     value={String(size)}
                     onClick={(value) => setSize(Number(value) as PizzaSize)}
                />

                {/*    <GroupVariants*/}
                {/*        items={pizzaTypes}*/}
                {/*        value={String(type)}*/}
                {/*        onClick={(value) => setType(Number(value) as PizzaType)}*/}
                {/*    />*/}
                {/*</div>*/}

                {/*<div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">*/}
                {/*    <div className="grid grid-cols-3 gap-3">*/}
                {/*        {ingredients.map((ingredient) => (*/}
                {/*            <IngredientItem*/}
                {/*                key={ingredient.id}*/}
                {/*                name={ingredient.name}*/}
                {/*                price={ingredient.price}*/}
                {/*                imageUrl={ingredient.imageUrl}*/}
                {/*                onClick={() => addIngredient(ingredient.id)}*/}
                {/*                active={selectedIngredients.has(ingredient.id)}*/}
                {/*            />*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*</div>*/}

                <Button
                    className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
                    Добавить в корзину за {totalPrice} ₽
                </Button>
            </div>
        </div>
    );
};
