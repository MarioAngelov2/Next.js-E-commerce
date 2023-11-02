import React from "react";
import Container from "../Container";
import Link from "next/link";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import { getCurrentUser } from "@/actions/getCurrentUser";

const Navbar = async () => {

    const user = await getCurrentUser();

    return (
        <div className="sticky top-0 w-full bg-slate-200 z-30 shadow-md">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex items-center justify-between gap-3 md-gap-0">
                        <Link href="/">E-Shop</Link>
                        <div className="hidden md:block">Search</div>
                        <div className="flex items-center gap-8 md:gap-12">
                            <CartCount />
                            <UserMenu user={user || null}/>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;
