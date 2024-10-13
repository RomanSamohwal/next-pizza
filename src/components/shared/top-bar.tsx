import {Container} from "@/components/shared/container";
import {Categories} from "@/components/shared/categories";
import {SortPopup} from "@/components/shared/sort-popup";
import {Category} from "@prisma/client";
import {FC} from "react";

interface Props {
    items: Category[]
    className?: string;
}

export const TopBar: FC<Props> = ({items}) => {
  return  <div className="sticky top-0 bg-white py-5 shadow-lg shadow-black/5">
        <Container className="flex items-center justify-between ">
            <Categories items={items}/>
            <SortPopup/>
        </Container>
    </div>
}
