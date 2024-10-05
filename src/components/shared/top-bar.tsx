import {Container} from "@/components/shared/container";
import {Categories} from "@/components/shared/categories";
import {SortPopup} from "@/components/shared/sort-popup";

export const TopBar = () => {
  return  <div className="sticky top-0 bg-white py-5 shadow-lg shadow-black/5">
        <Container className="flex items-center justify-between ">
            <Categories/>
            <SortPopup/>
        </Container>
    </div>
}
