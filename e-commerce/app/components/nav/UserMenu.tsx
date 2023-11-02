"use client";

import React, { useCallback, useState } from "react";
import Avatar from "../Avatar";
import { AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import BackDrop from "./BackDrop";
import { LoggedInUser } from "@/types";

interface UserMenuProps {
    user: LoggedInUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    return (
        <>
            <div className="relative z-30">
                <div
                    onClick={toggleOpen}
                    className="p-2 border-[1px] border-slate-400 flex flex-row 
                    items-center gap-1 rounded-full cursor-pointer hover:shadow-md transition text-slate-700"
                >
                    <Avatar />
                    <AiFillCaretDown />
                </div>
                {isOpen && (
                    <div
                        className="absolute rounded-md shadow-md w-[170px] bg-white 
                        overflow-hidden right-0 top-12 text-sm flex flex-col cursor-pointer"
                    >
                        {user ? (
                            <div>
                                <Link href="/orders">
                                    <MenuItem onClick={toggleOpen}>
                                        Your orders
                                    </MenuItem>
                                </Link>
                                <Link href="/admin">
                                    <MenuItem onClick={toggleOpen}>
                                        Admin Dashboard
                                    </MenuItem>
                                </Link>
                                <hr />
                                <MenuItem
                                    onClick={() => {
                                        toggleOpen();
                                        signOut();
                                    }}
                                >
                                    Logout
                                </MenuItem>
                            </div>
                        ) : (
                            <div>
                                <Link href="/login">
                                    <MenuItem onClick={toggleOpen}>
                                        Login
                                    </MenuItem>
                                </Link>
                                <Link href="/register">
                                    <MenuItem onClick={toggleOpen}>
                                        Sign Up
                                    </MenuItem>
                                </Link>
                            </div>
                        )}
                    </div>
                )}
            </div>
            {isOpen ? <BackDrop onClick={toggleOpen} /> : null}
        </>
    );
};

export default UserMenu;
