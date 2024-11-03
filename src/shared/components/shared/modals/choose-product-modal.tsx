'use client';

import React from 'react';
import {useRouter} from 'next/navigation';
import {ProductWithRelations} from "@/@types/prisma";
import {Dialog, DialogContent} from "@/shared/components/ui/dialog";
import {cn} from "@/shared/lib/utils";
import {ChoosePizzaForm} from "@/shared/components/shared/choose-pizza-form";
import {ChooseProductForm} from "@/shared/components/shared/choose-product-form";


// import { ProductForm } from '../product-form';

interface Props {
    product: ProductWithRelations;
    className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({className, product}) => {
    const router = useRouter();
    const isPizzaForm = Boolean(product.items[0].pizzaType)

    const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
        // try {
        //     const itemId = productItemId ?? firstItem.id;
        //
        //     await addCartItem({
        //         productItemId: itemId,
        //         ingredients,
        //     });
        //
        //     toast.success(product.name + ' добавлена в корзину');
        //
        //     _onSubmit?.();
        // } catch (err) {
        //     toast.error('Не удалось добавить товар в корзину');
        //     console.error(err);
        // }
    };

    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent className={cn(
                'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
                className,
            )}>
                {isPizzaForm
                    ? <ChoosePizzaForm imageUrl={product.imageUrl}
                                       name={product.name}
                                       ingredients={product.ingredients}
                                       items={product.items}
                                       onSubmit={onSubmit}/>
                    : <ChooseProductForm imageUrl={product.imageUrl} name={product.name} />}
            </DialogContent>
        </Dialog>
    );
};
