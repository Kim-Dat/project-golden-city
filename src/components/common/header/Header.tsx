"use client";
import { Checkbox, Collapse, Drawer, Dropdown, Modal, type MenuProps } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [height, setHeight] = useState(false);
    const [isModal, setIsModal] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    const onLogin = () => {
        setIsModal(true);
        setOpen(false);
    };
    useEffect(() => {
        const handleScroll = () => {
            const newHeight = window.scrollY > 100 ? true : false;
            setHeight(newHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const items: MenuProps["items"] = [
        {
            label: (
                <div className="flex justify-start items-center gap-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                        <Image width={18} height={18} src="/icons/home-wave.svg" alt="home-wave" />
                    </div>
                    <span className="text-base font-normal ">Pháp Lý BĐS</span>
                </div>
            ),
            key: "0",
        },
        {
            label: (
                <div className="flex justify-start items-center gap-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                        <Image width={18} height={18} src="/icons/layer_1.svg" alt="layer_1" />
                    </div>
                    <span className="text-base font-normal ">Ký gửi BĐS</span>
                </div>
            ),
            key: "1",
        },
        {
            label: (
                <div className="flex justify-start items-center gap-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                        <Image width={18} height={18} src="/icons/Chatbot.svg" alt="Chatbot" />
                    </div>
                    <span className="text-base font-normal ">Tư vấn chuyên gia</span>
                </div>
            ),
            key: "3",
        },
    ];
    return (
        <header className={`transition-all ease-out duration-300 bg-white w-full ${height ? "h-16 shadow-lg" : "h-20"} py-4 fixed px-4 z-50 `}>
            <nav className="flex items-center justify-between container mx-auto h-full">
                <div className="flex items-center">
                    <Link href="/">
                        <Image width={62} height={40} src="/icons/logo.svg" alt="Logo" />
                    </Link>
                    <ul className="hidden xl:flex">
                        <li className="item-nav">
                            <Link href="/">Nhà đất bán</Link>
                            <div className="re_arrow"></div>
                        </li>
                        <li className="item-nav">
                            <Link href={"/"}> Nhà đất cho Thuê</Link>
                            <div className="re_arrow"></div>
                        </li>
                        <li className="item-nav">
                            <Link href="/"> Dự án</Link>
                            <div className="re_arrow"></div>
                        </li>
                        <li className="item-nav-drop">
                            <Dropdown
                                menu={{ items }}
                                trigger={["click"]}
                                placement="bottom"
                                getPopupContainer={(triggerNode) => triggerNode.parentNode}
                            >
                                <span className="me-1">Dịch vụ</span>
                            </Dropdown>

                            <Image width={18} height={18} src="/icons/chevron-down.svg" className="" alt="chevron-down" />
                        </li>
                        <li className="item-nav">
                            <Link href="/"> Quy hoạch</Link>
                            <div className="re_arrow"></div>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center justify-between">
                    <Image width={22} height={22} className="cursor-pointer" src="/icons/heart.svg" alt="heart" />
                    <ul className="hidden xl:flex mb-1">
                        <li className="btn-nav">
                            <span className="btn-link" onClick={() => setIsModal(true)}>
                                Đăng nhập
                            </span>
                        </li>
                        <li className="btn-nav">
                            <span className="btn-link">Đăng ký</span>
                        </li>
                        <li className="btn-nav">
                            <Link href={"/"} className="item-link">
                                Ký gửi BĐS
                            </Link>
                        </li>
                        <li className="btn-nav">
                            <Link href={"/"} className="item-link">
                                Đăng tin
                            </Link>
                        </li>
                    </ul>
                    <button className="button button-sm hidden xl:flex">Trở thành Sale</button>
                    <button className="h-[18px] w-[18px] ms-5 mb-0.5 block xl:hidden" onClick={showDrawer}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                        </svg>
                    </button>
                </div>
            </nav>
            <Drawer
                title={
                    <div className="flex justify-between items-center">
                        <Image width={42} height={20} src="/icons/logo.svg" alt="Logo" />
                        <button className="button button-sm">Đăng tin</button>
                    </div>
                }
                onClose={onClose}
                open={open}
            >
                <div className="h-full relative">
                    <div className="h-[600px] overflow-y-auto">
                        <ul className="z-0">
                            <li className="item-nav-mobile">
                                <Link href={"/"} className="text-base font-medium cs-text-black ">
                                    Nhà đất bán
                                </Link>
                            </li>
                            <li className="item-nav-mobile">
                                <Link href={"/"} className="text-base font-medium cs-text-black">
                                    Nhà đất cho Thuê
                                </Link>
                            </li>
                            <li className="item-nav-mobile">
                                <Link href={"/"} className="text-base font-medium cs-text-black">
                                    Dự án
                                </Link>
                            </li>
                            <li>
                                <Collapse
                                    collapsible="header"
                                    bordered={false}
                                    items={[
                                        {
                                            key: "1",
                                            label: <div className="text-base font-medium cs-text-black">Dịch vụ</div>,
                                            children: (
                                                <ul className="ps-5">
                                                    <li className="p-2">
                                                        <Link href={"/"} className="text-base font-normal cs-text-black">
                                                            Pháp Lý BĐS
                                                        </Link>
                                                    </li>
                                                    <li className="p-2">
                                                        <Link href={"/"} className="text-base font-normal cs-text-black">
                                                            Ký gửi BĐS
                                                        </Link>
                                                    </li>
                                                    <li className="p-2">
                                                        <Link href={"/"} className="text-base font-normal cs-text-black">
                                                            Tư vấn chuyên gia
                                                        </Link>
                                                    </li>
                                                </ul>
                                            ),
                                        },
                                    ]}
                                />
                            </li>
                            <li className="item-nav-mobile">
                                <Link href={"/"} className="text-base font-medium cs-text-black">
                                    Quy hoạch
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="absolute z-50 bg-white flex flex-col items-center bottom-0 py-6 right-0 w-full">
                        <div className="flex justify-around gap-3">
                            <div>
                                <span className="btn-login cursor-pointer" onClick={() => onLogin()}>
                                    Đăng nhập
                                </span>
                            </div>
                            <div>
                                <Link href={"/"} className="btn-logout">
                                    Đăng ký
                                </Link>
                            </div>
                        </div>
                        <div className="mt-5 w-full">
                            <Link href={"/"} className="button button-lg">
                                Trở thành Sale
                            </Link>
                        </div>
                    </div>
                </div>
            </Drawer>

            <Modal
                title={false}
                centered
                open={isModal}
                width={1000}
                footer={false}
                className="custom-modal"
                onOk={() => setIsModal(false)}
                onCancel={() => setIsModal(false)}
            >
                <div className="grid grid-cols-12">
                    <div className="col-span-6 hidden md:block">
                        <Image
                            className="w-full h-full"
                            src="/images/bg-login.png"
                            alt="login"
                            /* layout="responsive" */ width={500}
                            height={500}
                            quality={100}
                        />
                    </div>
                    <div className="col-span-12 md:col-span-6 p-10">
                        <div>
                            <Image width={62} height={40} src="/icons/logo.svg" alt="Logo" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold tracking-wide mt-5">Đăng nhập</h1>
                            <form className="mt-5">
                                <div>
                                    <label htmlFor="name" className="text-sm font-medium text-[#1A1A1A]">
                                        Tên đăng nhập
                                    </label>
                                    <div className="flex border items-center p-2 gap-2 rounded-md mt-1">
                                        <Image width={18} height={18} src="/icons/user.svg" alt="icon" />
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="SĐT hoặc email"
                                            className="bg-transparent border-none w-full outline-none caret-[#9302f2] "
                                        />
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <label htmlFor="name" className="text-sm font-medium text-[#1A1A1A]">
                                        Mật khẩu
                                    </label>
                                    <div className="flex border items-center mt-1 p-2 gap-2 rounded-md">
                                        <Image width={18} height={18} src="/icons/lock.svg" alt="icon" />
                                        <input
                                            type="password"
                                            id="pass"
                                            placeholder="Nhập mật khẩu"
                                            className="bg-transparent border-none w-full outline-none caret-[#9302f2] "
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-between mt-5">
                                    <div className="flex items-center gap-2 ">
                                        <Checkbox id="memberPass" onChange={() => {}} />
                                        <label htmlFor="memberPass" className="text-xs font-normal cursor-pointer">
                                            Nhớ mật khẩu
                                        </label>
                                    </div>
                                    <div>
                                        <Link href={"/"} className="cs-text-primary text-xs font-normal">
                                            Quên mật khẩu?
                                        </Link>
                                    </div>
                                </div>
                                <button className="button button-xl mt-5">Đăng nhập</button>
                            </form>

                            <div className="mb-5 flex w-full items-center justify-center mt-5">
                                <div className="flex-auto border border-gray-200"></div>
                                <span className=" text-nowrap text-xs px-2 text-gray-400">Hoặc</span>
                                <div className="flex-auto border border-gray-200"></div>
                            </div>
                            <div className="flex justify-between items-center">
                                <button className="button-outline-sm ">
                                    <Image width={18} height={18} src="/icons/flat-color-icons_google.svg" alt="icon" />
                                </button>
                                <button className="button-outline-sm ">
                                    <Image width={18} height={18} src="/icons/apple.svg" alt="icon" />
                                </button>
                                <button className="button-outline-sm ">
                                    <Image width={18} height={18} src="/icons/fb.svg" alt="icon" />
                                </button>
                            </div>
                            <p className="text-xs text-[#424242] mt-5">
                                Bằng việc tiếp tục, bạn đồng ý với Điều khoản sử dụng, Chính sách bảo mật,  Quy chế, Chính sách của chúng tôi.
                            </p>
                            <p className="text-xs  text-black mt-3">
                                Chưa là thành viên?{" "}
                                <Link href={"/"} className="cs-text-primary font-medium ">
                                    Đăng ký
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </Modal>
        </header>
    );
};

export default Header;
