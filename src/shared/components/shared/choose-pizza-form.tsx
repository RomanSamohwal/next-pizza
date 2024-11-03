'use client';

import React from 'react';
import {Ingredient, ProductItem} from '@prisma/client';
import {Title} from './title';
import {cn} from "@/shared/lib/utils";
import {PizzaImage} from "@/shared/components/shared/pizza-image";
import {Button} from "@/shared/components/ui/button";
import {GroupVariants} from "@/shared/components/shared/group-variants";
import {PizzaSize, PizzaType, pizzaTypes} from "@/shared/constants";
import {IngredientItem} from "@/shared/components/shared/ingredient-item";
import {usePizzaOptions} from "@/shared/hooks";
import {getPizzaDetails} from "@/shared/lib";

interface Props {
    imageUrl: string;
    name: string;
    ingredients: Ingredient[];
    items: ProductItem[];
    loading?: boolean;
    onSubmit: (itemId: number, ingredients: number[]) => void;
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
                                                     items,
                                                     onSubmit
                                                 }) => {

    const {
        size,
        type,
        selectedIngredients,
        availableSizes,
        currentItemId,
        setSize,
        setType,
        addIngredient,
    } = usePizzaOptions(items);

    const {totalPrice, textDetaills} = getPizzaDetails(
        type,
        size,
        items,
        ingredients,
        selectedIngredients,
    );

    const handleClickAdd = () => {
        if (currentItemId) {
            onSubmit(currentItemId, Array.from(selectedIngredients));
        }
    };

    return (
        <div className={cn(className, 'flex flex-1')}>
            <PizzaImage imageUrl={imageUrl} size={size}/>

            <div className="w-[490px] bg-[#f7f6f5] p-7">
                <Title text={name} size="md" className="font-extrabold mb-1"/>

                <p className="text-gray-400">{textDetaills}</p>

                <div className="flex flex-col gap-4 mt-5">
                    <GroupVariants
                        items={availableSizes}
                        value={String(size)}
                        onClick={(value) => setSize(Number(value) as PizzaSize)}
                    />

                    <GroupVariants
                        items={pizzaTypes}
                        value={String(type)}
                        onClick={(value) => setType(Number(value) as PizzaType)}
                    />


                    <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-1">
                        <div className="grid grid-cols-3 gap-3">
                            {ingredients.map((ingredient) => (
                                <IngredientItem
                                    key={ingredient.id}
                                    name={ingredient.name}
                                    price={ingredient.price}
                                    imageUrl={ingredient.imageUrl}
                                    onClick={() => addIngredient(ingredient.id)}
                                    active={selectedIngredients.has(ingredient.id)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <Button
                    className="h-[55px] px-10 text-base rounded-[18px] w-full mt-3" onClick={handleClickAdd}>
                    Добавить в корзину за {totalPrice} ₽
                </Button>
            </div>
        </div>
    )
};
