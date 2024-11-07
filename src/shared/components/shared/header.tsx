import {FC} from "react";

import Image from 'next/image';
import {User} from "lucide-react";
import Link from "next/link";

import {cn} from "@/shared/lib/utils";
import {Container} from "@/shared/components/shared/container";
import {SearchInput} from "@/shared/components/shared/search-input";
import {Button} from "@/shared/components/ui/button";
import {CartButton} from "@/shared/components/shared/cart-button";

interface IProps {
    className?: string;
}

export const Header: FC<IProps> = ({className}) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className='flex items-center justify-between py-8'>
                <Link href='/'>
                    <div className="flex items-center gap-4">
                        <Image src="/logo.png" width={35} height={35} alt="Logo"/>
                        <div>
                            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
                            <p className="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
                        </div>
                    </div>
                </Link>

                <div className='mx-10 flex-1'>
                    <SearchInput/>
                </div>

                <div className="flex items-center gap-3">
                    <Button variant="outline" className="flex items-center gap-1">
                        <User size={16}/>
                        Войти</Button>
                        <CartButton/>
                </div>
            </Container>
        </header>
    )
}
