"use client"

import React, {useEffect} from 'react';
import {Title} from './title';
import {useIntersection} from "react-use";
import {useCategoryStore} from "@/shared/store/category";
import {cn} from "@/shared/lib/utils";
import {ProductCard} from "@/shared/components/shared/product-card";

interface Props {
    title: string;
    items: any[];
    className?: string;
    categoryId: number
    listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({title, items, className, listClassName, categoryId}) => {
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)

    const intersectionRef = React.useRef(null)
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4
    })

    useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId)
        }
    }, [categoryId, intersection?.isIntersecting, title])

    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size="lg" className="font-extrabold mb-5"/>
            <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
                {items.map((product, i) => (
                    <ProductCard
                        id={product.id}
                        key={product.id}
                        name="Маргарита"
                        imageUrl={product.imageUrl}
                        price={390}
                        count={product.items[0].price}
                    />
                ))}
            </div>
        </div>
    );
};
