"use client";
import { Divider, Select } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
    background: "transparent",
};

const { Option } = Select;

export default function Home() {
    return (
        <div className="w-full">
            <section className="relative w-full container mx-auto px-3">
                <div className="hidden md:block">
                    <div>
                        <Image
                            className="w-full rounded-2xl"
                            src="/images/banner.png"
                            alt="banner"
                            layout="responsive"
                            width={500}
                            height={500}
                            quality={100}
                        />
                    </div>
                    <div className="absolute top-32 left-24 hidden md:block">
                        <h1 className="text-4xl font-bold tracking-wide">Đăng tin dễ dàng</h1>
                        <h1 className="text-4xl font-bold tracking-wide mt-1.5">Cho thuê rộn ràng</h1>
                        <p className="text-lg font-normal text-[#424242] mt-5">
                            Giảm ngay 50% khi đăng tin cho <br /> thuê tại thành phố hồ chí minh
                        </p>
                        <button className="button button-sm mt-5">Đăng tin ngay</button>
                    </div>
                </div>
                <div className="-bottom-36 md:absolute flex justify-center w-full container left-0 z-20 mx-auto ">
                    <div className="max-w-screen-lg w-full">
                        <div className="w-full rounded-lg bg-white shadow-xl mx-2 p-4">
                            <div className="border-b">
                                <ul className="flex">
                                    <li className="item-nav-link active">
                                        <Link href="/" className="px-3 text-nowrap">
                                            Nhà đất bán
                                        </Link>
                                        <div className="re_arrow"></div>
                                    </li>
                                    <li className="item-nav-link ">
                                        <Link href="/" className="px-3 text-nowrap">
                                            Nhà đất cho thuê
                                        </Link>
                                        <div className="re_arrow"></div>
                                    </li>
                                    <li className="item-nav-link ">
                                        <Link href="/" className="px-3 text-nowrap">
                                            Dự án
                                        </Link>
                                        <div className="re_arrow"></div>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex items-center py-5 flex-wrap gap-5">
                                <div className="flex items-center gap-2 pe-5 border-r-2">
                                    <Image src="/icons/local.svg" alt="img" width={18} height={18} />
                                    <div className="h-10 flex items-center text-sm gap-3 w-44 bg-transparent">
                                        <Select id="price" defaultValue="option1" style={{ width: "100%" }} className="custom-select search">
                                            <Option value="option1">TP. Hồ Chí Minh</Option>
                                            <Option value="option2">Hà nội</Option>
                                        </Select>
                                    </div>
                                </div>
                                <form className="py-2 md:flex-1">
                                    <div className="flex items-center gap-2">
                                        <Image width={18} height={18} src="/icons/search.svg" alt="Logo" />
                                        <input
                                            type="text"
                                            placeholder="Chọn địa điểm"
                                            className="bg-transparent caret-[#9302f2] text-base border-none w-full outline-none text-[#757575]"
                                        />
                                    </div>
                                </form>
                                <div className="flex items-center gap-3">
                                    <button className="button-outline-md">Filter</button>
                                    <Link href={"/search"} className="button button-md">
                                        Tìm kiếm
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="flex flex-wrap gap-5">
                                <div className="h-10 flex items-center text-sm gap-3 w-48 bg-white shadow-xl rounded-lg ps-3">
                                    <label htmlFor="price" className="text-nowrap text-sm font-normal">
                                        Mức giá:
                                    </label>
                                    <Select id="price" defaultValue="option1" style={{ width: 100 }} className="custom-select w-98">
                                        <Option value="option1">Tất cả</Option>
                                        <Option value="option2">1-2 tỷ</Option>
                                        <Option value="option3">2-3 tỷ</Option>
                                    </Select>
                                </div>
                                <div className="h-10 flex items-center text-sm gap-3 w-48 bg-white shadow-xl rounded-lg ps-3">
                                    <label htmlFor="price" className="text-nowrap text-sm font-normal">
                                        Diện tích:
                                    </label>
                                    <Select
                                        id="price"
                                        defaultValue="option1"
                                        style={{ width: 100 }}
                                        /* suffixIcon={null} */ className="custom-select w-98"
                                    >
                                        <Option value="option1">Tất cả</Option>
                                        <Option value="option2">1-2 tỷ</Option>
                                        <Option value="option3">2-3 tỷ</Option>
                                    </Select>

                                    {/*  <Image width={18} height={18} src="/icons/chevron-down-black.svg" alt="img" /> */}
                                </div>
                                <div className="h-10 flex items-center text-sm gap-3 w-48 bg-white shadow-xl rounded-lg ps-3">
                                    <label htmlFor="price" className="text-nowrap text-sm font-normal">
                                        Loại nhà đất:
                                    </label>
                                    <Select
                                        id="price"
                                        defaultValue="option1"
                                        style={{ width: 100 }}
                                        /* suffixIcon={null} */ className="custom-select w-98"
                                    >
                                        <Option value="option1">Tất cả</Option>
                                        <Option value="option2">1-2 tỷ</Option>
                                        <Option value="option3">2-3 tỷ</Option>
                                    </Select>

                                    {/*  <Image width={18} height={18} src="/icons/chevron-down-black.svg" alt="img" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-24 md:pt-52 container w-full mx-auto px-3">
                <div className="flex justify-between items-center mb-7">
                    <div>
                        <h1 className="text-4xl font-bold tracking-wide">Tin tức</h1>
                        <p className="text-lg font-normal mt-1">Tin tức bất động sản trong nước</p>
                    </div>
                    <div>
                        <Link href={"/"} className="cs-text-primary text-base text-nowrap font-medium flex items-center gap-1">
                            Xem thêm <Image src="/icons/chevron-right.svg" className="mt-0.5" alt="chevron-right" width={18} height={18} />
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6 md:gap-12">
                    <div className="col-span-12 md:col-span-6">
                        <Image src="/images/card/card-detail/1.png" className="w-full rounded-2xl" alt="img" quality={100} width={500} height={500} />
                        <p className="text-lg font-semibold mt-3">Tháo Gỡ "Điểm Nghẽn", Thúc Đẩy Thị Trường Bất Động Sản Phát Triển</p>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <ul className="flex flex-col justify-between h-full gap-3                                                                                                                                                                   ">
                            <li>
                                <div className="flex items-center gap-4">
                                    <Image src="/images/card/card-sm/1.png" className="rounded-xl" alt="img" quality={100} width={70} height={70} />
                                    <p className="text-base font-semibold">Tháo Gỡ "Điểm Nghẽn", Thúc Đẩy Thị Trường Bất Động Sản Phát Triển</p>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center gap-4">
                                    <Image src="/images/card/card-sm/2.png" className="rounded-xl" alt="img" quality={100} width={70} height={70} />
                                    <p className="text-base font-semibold">Lãi Suất Ngân Hàng BIDV Tháng 7/2024 - Vay Mua Nhà Từ 5%/Năm</p>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center gap-4">
                                    <Image src="/images/card/card-sm/3.png" className="rounded-xl" alt="img" quality={100} width={70} height={70} />
                                    <p className="text-base font-semibold">
                                        Thạc Sĩ Quản Trị Kinh Doanh Bỏ Việc Tại Úc, Về Việt Nam Làm Môi Giới Bất Động Sản
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center gap-4">
                                    <Image src="/images/card/card-sm/4.png" className="rounded-xl" alt="img" quality={100} width={70} height={70} />
                                    <p className="text-base font-semibold">
                                        Kịch Bản Nào Cho Thị Trường Bất Động Sản Việt Nam Nửa Cuối Năm 2024? (Kì 2)
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center gap-4">
                                    <Image src="/images/card/card-sm/5.png" className="rounded-xl" alt="img" quality={100} width={70} height={70} />
                                    <p className="text-base font-semibold">
                                        Kịch Bản Nào Cho Thị Trường Bất Động Sản Việt Nam Nửa Cuối Năm 2024? (Kì 2)
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="mt-24 container w-full mx-auto px-3">
                <div className="flex justify-between items-center mb-7">
                    <div>
                        <h1 className="text-4xl font-bold tracking-wide">Bất động sản dành cho bạn</h1>
                        <p className="text-lg font-normal mt-1">Bài đăng bất động sản phù hợp với bạn</p>
                    </div>
                    <div>
                        <Link href={"/"} className="cs-text-primary text-base font-medium text-nowrap flex items-center gap-1">
                            Xem thêm <Image src="/icons/chevron-right.svg" className="mt-0.5" alt="chevron-right" width={18} height={18} />
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-5">
                    <Link href={"#"} className="col-span-12 md:col-span-6 xl:col-span-3">
                        <div className="bg-white shadow-md p-3 rounded-lg hover:shadow-xl cursor-pointer">
                            <Image src="/images/card/card-medium/1.png" className="w-full" alt="img" width={500} height={500} quality={100} />
                            <h2 className="text-base font-semibold mt-3">Cho thuê căn hộ Hà Đô 1 - 2 -3 phòng ngủ, nhà tốt giá xinh..</h2>
                            <div className="flex justify-between items-center mt-3">
                                <p className="text-sm text-[#616161] flex items-center">
                                    <Image src="/icons/local.svg" alt="img" width={14} height={14} />
                                    Quận 10, Hồ Chí Minh
                                </p>
                                <p className="text-sm text-[#616161] flex items-center">
                                    <Image src="/icons/clock-circle.svg" alt="img" width={14} height={14} />
                                    15 giờ trước
                                </p>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <h2 className="cs-text-primary text-xl font-bold">2,55 tỷ</h2>
                                <Image src="/icons/heart-primary.svg" alt="img" width={24} height={24} />
                            </div>
                            <Divider />
                            <div className="flex items-center">
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">
                                    <Image src="/icons/Bed.svg" alt="img" width={16} height={16} />6 PN
                                </p>
                                <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">
                                    <Image src="/icons/home.svg" alt="img" width={16} height={16} />6 PN
                                </p>
                                <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">200m2</p>
                            </div>
                        </div>
                    </Link>

                    <Link href={"#"} className="col-span-12 md:col-span-6 xl:col-span-3">
                        <div className="bg-white shadow-md p-3 rounded-lg hover:shadow-xl cursor-pointer">
                            <Image src="/images/card/card-medium/2.png" className="w-full" alt="img" quality={100} width={500} height={500} />
                            <h2 className="text-base font-semibold mt-3">Cho thuê căn hộ Hà Đô 1 - 2 -3 phòng ngủ, nhà tốt giá xinh..</h2>
                            <div className="flex justify-between items-center mt-3">
                                <p className="text-sm text-[#616161] flex items-center">
                                    <Image src="/icons/local.svg" alt="img" width={14} height={14} />
                                    Quận 10, Hồ Chí Minh
                                </p>
                                <p className="text-sm text-[#616161] flex items-center">
                                    <Image src="/icons/clock-circle.svg" alt="img" width={14} height={14} />
                                    15 giờ trước
                                </p>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <h2 className="cs-text-primary text-xl font-bold">2,55 tỷ</h2>
                                <Image src="/icons/heart-primary.svg" alt="img" width={24} height={24} />
                            </div>
                            <Divider />
                            <div className="flex items-center">
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">
                                    <Image src="/icons/Bed.svg" alt="img" width={16} height={16} />6 PN
                                </p>
                                <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">
                                    <Image src="/icons/home.svg" alt="img" width={16} height={16} />6 PN
                                </p>
                                <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">200m2</p>
                            </div>
                        </div>
                    </Link>

                    <Link href={"#"} className="col-span-12 md:col-span-6 xl:col-span-3">
                        <div className="bg-white shadow-md p-3 rounded-lg hover:shadow-xl cursor-pointer">
                            <Image src="/images/card/card-medium/3.png" className="w-full" alt="img" quality={100} width={500} height={500} />
                            <h2 className="text-base font-semibold mt-3">Cho thuê căn hộ Hà Đô 1 - 2 -3 phòng ngủ, nhà tốt giá xinh..</h2>
                            <div className="flex justify-between items-center mt-3">
                                <p className="text-sm text-[#616161] flex items-center">
                                    <Image src="/icons/local.svg" alt="img" width={14} height={14} />
                                    Quận 10, Hồ Chí Minh
                                </p>
                                <p className="text-sm text-[#616161] flex items-center">
                                    <Image src="/icons/clock-circle.svg" alt="img" width={14} height={14} />
                                    15 giờ trước
                                </p>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <h2 className="cs-text-primary text-xl font-bold">2,55 tỷ</h2>
                                <Image src="/icons/heart-primary.svg" alt="img" width={24} height={24} />
                            </div>
                            <Divider />
                            <div className="flex items-center">
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">
                                    <Image src="/icons/Bed.svg" alt="img" width={16} height={16} />6 PN
                                </p>
                                <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">
                                    <Image src="/icons/home.svg" alt="img" width={16} height={16} />6 PN
                                </p>
                                <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">200m2</p>
                            </div>
                        </div>
                    </Link>

                    <Link href={"#"} className="col-span-12 md:col-span-6 xl:col-span-3">
                        <div className="bg-white shadow-md p-3 rounded-lg hover:shadow-xl cursor-pointer">
                            <Image src="/images/card/card-medium/4.png" className="w-full" alt="img" quality={100} width={500} height={500} />
                            <h2 className="text-base font-semibold mt-3">Cho thuê căn hộ Hà Đô 1 - 2 -3 phòng ngủ, nhà tốt giá xinh..</h2>
                            <div className="flex justify-between items-center mt-3">
                                <p className="text-sm text-[#616161] flex items-center">
                                    <Image src="/icons/local.svg" alt="img" width={14} height={14} />
                                    Quận 10, Hồ Chí Minh
                                </p>
                                <p className="text-sm text-[#616161] flex items-center">
                                    <Image src="/icons/clock-circle.svg" alt="img" width={14} height={14} />
                                    15 giờ trước
                                </p>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <h2 className="cs-text-primary text-xl font-bold">2,55 tỷ</h2>
                                <Image src="/icons/heart-primary.svg" alt="img" width={24} height={24} />
                            </div>
                            <Divider />
                            <div className="flex items-center">
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">
                                    <Image src="/icons/Bed.svg" alt="img" width={16} height={16} />6 PN
                                </p>
                                <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">
                                    <Image src="/icons/home.svg" alt="img" width={16} height={16} />6 PN
                                </p>
                                <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">200m2</p>
                            </div>
                        </div>
                    </Link>

                    <Link href={"#"} className="col-span-12 md:col-span-6 xl:col-span-3">
                        <div className="bg-white shadow-md p-3 rounded-lg hover:shadow-xl cursor-pointer">
                            <Image src="/images/card/card-medium/5.png" className="w-full" alt="img" quality={100} width={500} height={500} />
                            <h2 className="text-base font-semibold mt-3">Cho thuê căn hộ Hà Đô 1 - 2 -3 phòng ngủ, nhà tốt giá xinh..</h2>
                            <div className="flex justify-between items-center mt-3">
                                <p className="text-sm text-[#616161] flex items-center">
                                    <Image src="/icons/local.svg" alt="img" width={14} height={14} />
                                    Quận 10, Hồ Chí Minh
                                </p>
                                <p className="text-sm text-[#616161] flex items-center">
                                    <Image src="/icons/clock-circle.svg" alt="img" width={14} height={14} />
                                    15 giờ trước
                                </p>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <h2 className="cs-text-primary text-xl font-bold">2,55 tỷ</h2>
                                <Image src="/icons/heart-primary.svg" alt="img" width={24} height={24} />
                            </div>
                            <Divider />
                            <div className="flex items-center">
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">
                                    <Image src="/icons/Bed.svg" alt="img" width={16} height={16} />6 PN
                                </p>
                                <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">
                                    <Image src="/icons/home.svg" alt="img" width={16} height={16} />6 PN
                                </p>
                                <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">200m2</p>
                            </div>
                        </div>
                    </Link>

                    <Link href={"#"} className="col-span-12 md:col-span-6 xl:col-span-3">
                        <div className="bg-white shadow-md p-3 rounded-lg hover:shadow-xl cursor-pointer">
                            <Image src="/images/card/card-medium/6.png" className="w-full" alt="img" quality={100} width={500} height={500} />
                            <h2 className="text-base font-semibold mt-3">Cho thuê căn hộ Hà Đô 1 - 2 -3 phòng ngủ, nhà tốt giá xinh..</h2>
                            <div className="flex justify-between items-center mt-3">
                                <p className="text-sm text-[#616161] flex items-center">
                                    <Image src="/icons/local.svg" alt="img" width={14} height={14} />
                                    Quận 10, Hồ Chí Minh
                                </p>
                                <p className="text-sm text-[#616161] flex items-center">
                                    <Image src="/icons/clock-circle.svg" alt="img" width={14} height={14} />
                                    15 giờ trước
                                </p>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <h2 className="cs-text-primary text-xl font-bold">2,55 tỷ</h2>
                                <Image src="/icons/heart-primary.svg" alt="img" width={24} height={24} />
                            </div>
                            <Divider />
                            <div className="flex items-center">
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">
                                    <Image src="/icons/Bed.svg" alt="img" width={16} height={16} />6 PN
                                </p>
                                <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">
                                    <Image src="/icons/home.svg" alt="img" width={16} height={16} />6 PN
                                </p>
                                <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">200m2</p>
                            </div>
                        </div>
                    </Link>

                    <Link href={"#"} className="col-span-12 md:col-span-6 xl:col-span-3">
                        <div className="bg-white shadow-md p-3 rounded-lg hover:shadow-xl cursor-pointer">
                            <Image src="/images/card/card-medium/7.png" className="w-full" alt="img" quality={100} width={500} height={500} />
                            <h2 className="text-base font-semibold mt-3">Cho thuê căn hộ Hà Đô 1 - 2 -3 phòng ngủ, nhà tốt giá xinh..</h2>
                            <div className="flex justify-between items-center mt-3">
                                <p className="text-sm text-[#616161] flex items-center">
                                    <Image src="/icons/local.svg" alt="img" width={14} height={14} />
                                    Quận 10, Hồ Chí Minh
                                </p>
                                <p className="text-sm text-[#616161] flex items-center">
                                    <Image src="/icons/clock-circle.svg" alt="img" width={14} height={14} />
                                    15 giờ trước
                                </p>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <h2 className="cs-text-primary text-xl font-bold">2,55 tỷ</h2>
                                <Image src="/icons/heart-primary.svg" alt="img" width={24} height={24} />
                            </div>
                            <Divider />
                            <div className="flex items-center">
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">
                                    <Image src="/icons/Bed.svg" alt="img" width={16} height={16} />6 PN
                                </p>
                                <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">
                                    <Image src="/icons/home.svg" alt="img" width={16} height={16} />6 PN
                                </p>
                                <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">200m2</p>
                            </div>
                        </div>
                    </Link>

                    <Link href={"#"} className="col-span-12 md:col-span-6 xl:col-span-3">
                        <div className="bg-white shadow-md p-3 rounded-lg hover:shadow-xl cursor-pointer">
                            <Image src="/images/card/card-medium/8.png" className="w-full" alt="img" quality={100} width={500} height={500} />
                            <h2 className="text-base font-semibold mt-3">Cho thuê căn hộ Hà Đô 1 - 2 -3 phòng ngủ, nhà tốt giá xinh..</h2>
                            <div className="flex justify-between items-center mt-3">
                                <p className="text-sm text-[#616161] flex items-center">
                                    <Image src="/icons/local.svg" alt="img" width={14} height={14} />
                                    Quận 10, Hồ Chí Minh
                                </p>
                                <p className="text-sm text-[#616161] flex items-center">
                                    <Image src="/icons/clock-circle.svg" alt="img" width={14} height={14} />
                                    15 giờ trước
                                </p>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <h2 className="cs-text-primary text-xl font-bold">2,55 tỷ</h2>
                                <Image src="/icons/heart-primary.svg" alt="img" width={24} height={24} />
                            </div>
                            <Divider />
                            <div className="flex items-center">
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">
                                    <Image src="/icons/Bed.svg" alt="img" width={16} height={16} />6 PN
                                </p>
                                <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">
                                    <Image src="/icons/home.svg" alt="img" width={16} height={16} />6 PN
                                </p>
                                <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">200m2</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
            <section className="mt-24 container w-full mx-auto px-3">
                <div className="flex justify-between items-center mb-7">
                    <div>
                        <h1 className="text-4xl font-bold tracking-wide">Dự án bất động sản nổi bật</h1>
                        <p className="text-lg font-normal mt-1">Tin tức bất động sản trong nước</p>
                    </div>
                    <div>
                        <Link href={"/"} className="cs-text-primary text-base font-medium text-nowrap flex items-center gap-1">
                            Xem thêm <Image src="/icons/chevron-right.svg" className="mt-0.5" alt="chevron-right" width={18} height={18} />
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-5">
                    <Link href={"#"} className="col-span-12 md:col-span-6 xl:col-span-4">
                        <div className="bg-white shadow-md p-3 rounded-lg hover:shadow-xl cursor-pointer">
                            <Image src="/images/card/card-medium/9.png" className="w-full" alt="img" width={500} height={500} quality={100} />
                            <h2 className="text-base font-semibold mt-3">Imperia Sola Park</h2>
                            <p className="text-sm text-[#616161] flex items-center mt-3">
                                <Image src="/icons/local.svg" alt="img" width={14} height={14} />
                                Nam Từ Liêm, Hà Nội
                            </p>
                            <div className="flex justify-between items-center mt-4">
                                <h2 className="cs-text-primary text-xl font-bold">41.1 - 50.6 triệu/m2</h2>
                                <Image src="/icons/heart-primary.svg" alt="img" width={24} height={24} />
                            </div>
                            <Divider />
                            <div className="flex items-center">
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">
                                    <Image src="/icons/Bed.svg" alt="img" width={16} height={16} />6 PN
                                </p>
                                <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">
                                    <Image src="/icons/home.svg" alt="img" width={16} height={16} />6 PN
                                </p>
                                <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">200m2</p>
                            </div>
                        </div>
                    </Link>

                    <Link href={"#"} className="col-span-12 md:col-span-6 xl:col-span-4">
                        <div className="bg-white shadow-md p-3 rounded-lg hover:shadow-xl cursor-pointer">
                            <Image src="/images/card/card-medium/10.png" className="w-full" alt="img" quality={100} width={500} height={500} />
                            <h2 className="text-base font-semibold mt-3">Vinhomes Central Park</h2>
                            <p className="text-sm text-[#616161] flex items-center mt-3">
                                <Image src="/icons/local.svg" alt="img" width={14} height={14} />
                                Nam Từ Liêm, Hà Nội
                            </p>
                            <div className="flex justify-between items-center mt-4">
                                <h2 className="cs-text-primary text-xl font-bold">41.1 - 50.6 triệu/m2</h2>
                                <Image src="/icons/heart-primary.svg" alt="img" width={24} height={24} />
                            </div>
                            <Divider />
                            <div className="flex items-center">
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">
                                    <Image src="/icons/Bed.svg" alt="img" width={16} height={16} />6 PN
                                </p>
                                <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">
                                    <Image src="/icons/home.svg" alt="img" width={16} height={16} />6 PN
                                </p>
                                <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">200m2</p>
                            </div>
                        </div>
                    </Link>

                    <Link href={"#"} className="col-span-12 md:col-span-6 xl:col-span-4">
                        <div className="bg-white shadow-md p-3 rounded-lg hover:shadow-xl cursor-pointer">
                            <Image src="/images/card/card-medium/11.png" className="w-full" alt="img" quality={100} width={500} height={500} />
                            <h2 className="text-base font-semibold mt-3">Bcons Green View</h2>
                            <p className="text-sm text-[#616161] flex items-center mt-3">
                                <Image src="/icons/local.svg" alt="img" width={14} height={14} />
                                Nam Từ Liêm, Hà Nội
                            </p>
                            <div className="flex justify-between items-center mt-4">
                                <h2 className="cs-text-primary text-xl font-bold">41.1 - 50.6 triệu/m2</h2>
                                <Image src="/icons/heart-primary.svg" alt="img" width={24} height={24} />
                            </div>
                            <Divider />
                            <div className="flex items-center">
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">
                                    <Image src="/icons/Bed.svg" alt="img" width={16} height={16} />6 PN
                                </p>
                                <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">
                                    <Image src="/icons/home.svg" alt="img" width={16} height={16} />6 PN
                                </p>
                                <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                <p className="text-sm font-medium flex items-center gap-2 text-[#757575]">200m2</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="flex gap-3 flex-wrap items-center mt-5">
                    <button className="btn-gray">Vinhomes Central Park</button>
                    <button className="btn-gray">Vinhomes Smart City</button>
                    <button className="btn-gray">Bcons Green View</button>
                    <button className="btn-gray">Vinhomes Central Park</button>
                </div>
            </section>
            <section className="mt-24 bg-[#F5F5F5]">
                <div className="container w-full mx-auto px-3 py-6">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12 md:col-span-5  my-auto">
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-bold">Doanh nghiệp tiêu biểu</h3>
                                <p className="text-base text-[#616161] font-normal mt-2">
                                    Hợp tác để kết nối, quảng bá, xúc tiến đầu <br /> tư, liên doanh, liên kết đầu tư 
                                </p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-7">
                            <Carousel arrows autoplay>
                                <div>
                                    <h3 style={contentStyle}>
                                        <div className="grid grid-cols-3 gap-5">
                                            <div>
                                                <div>
                                                    <Image
                                                        className="w-full rounded-2xl"
                                                        src="/images/branch/1.png"
                                                        alt="img"
                                                        layout="responsive"
                                                        width={500}
                                                        height={500}
                                                        quality={100}
                                                    />
                                                </div>
                                                <div className="mt-5">
                                                    <Image
                                                        className="w-full rounded-2xl"
                                                        src="/images/branch/2.png"
                                                        alt="img"
                                                        layout="responsive"
                                                        width={500}
                                                        height={500}
                                                        quality={100}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <Image
                                                        className="w-full rounded-2xl"
                                                        src="/images/branch/3.png"
                                                        alt="img"
                                                        layout="responsive"
                                                        width={500}
                                                        height={500}
                                                        quality={100}
                                                    />
                                                </div>
                                                <div className="mt-5">
                                                    <Image
                                                        className="w-full rounded-2xl"
                                                        src="/images/branch/4.png"
                                                        alt="img"
                                                        layout="responsive"
                                                        width={500}
                                                        height={500}
                                                        quality={100}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <Image
                                                        className="w-full rounded-2xl"
                                                        src="/images/branch/5.png"
                                                        alt="img"
                                                        layout="responsive"
                                                        width={500}
                                                        height={500}
                                                        quality={100}
                                                    />
                                                </div>
                                                <div className="mt-5">
                                                    <Image
                                                        className="w-full rounded-2xl"
                                                        src="/images/branch/6.png"
                                                        alt="img"
                                                        layout="responsive"
                                                        width={500}
                                                        height={500}
                                                        quality={100}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>
                                        <div className="grid grid-cols-3 gap-5">
                                            <div>
                                                <div>
                                                    <Image
                                                        className="w-full rounded-2xl"
                                                        src="/images/branch/1.png"
                                                        alt="img"
                                                        layout="responsive"
                                                        width={500}
                                                        height={500}
                                                        quality={100}
                                                    />
                                                </div>
                                                <div className="mt-5">
                                                    <Image
                                                        className="w-full rounded-2xl"
                                                        src="/images/branch/2.png"
                                                        alt="img"
                                                        layout="responsive"
                                                        width={500}
                                                        height={500}
                                                        quality={100}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <Image
                                                        className="w-full rounded-2xl"
                                                        src="/images/branch/3.png"
                                                        alt="img"
                                                        layout="responsive"
                                                        width={500}
                                                        height={500}
                                                        quality={100}
                                                    />
                                                </div>
                                                <div className="mt-5">
                                                    <Image
                                                        className="w-full rounded-2xl"
                                                        src="/images/branch/4.png"
                                                        alt="img"
                                                        layout="responsive"
                                                        width={500}
                                                        height={500}
                                                        quality={100}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <Image
                                                        className="w-full rounded-2xl"
                                                        src="/images/branch/5.png"
                                                        alt="img"
                                                        layout="responsive"
                                                        width={500}
                                                        height={500}
                                                        quality={100}
                                                    />
                                                </div>
                                                <div className="mt-5">
                                                    <Image
                                                        className="w-full rounded-2xl"
                                                        src="/images/branch/6.png"
                                                        alt="img"
                                                        layout="responsive"
                                                        width={500}
                                                        height={500}
                                                        quality={100}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </h3>
                                </div>
                                <div>
                                    <h3 style={contentStyle}>
                                        <div className="grid grid-cols-3 gap-5">
                                            <div>
                                                <div>
                                                    <Image
                                                        className="w-full rounded-2xl"
                                                        src="/images/branch/1.png"
                                                        alt="img"
                                                        layout="responsive"
                                                        width={500}
                                                        height={500}
                                                        quality={100}
                                                    />
                                                </div>
                                                <div className="mt-5">
                                                    <Image
                                                        className="w-full rounded-2xl"
                                                        src="/images/branch/2.png"
                                                        alt="img"
                                                        layout="responsive"
                                                        width={500}
                                                        height={500}
                                                        quality={100}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <Image
                                                        className="w-full rounded-2xl"
                                                        src="/images/branch/3.png"
                                                        alt="img"
                                                        layout="responsive"
                                                        width={500}
                                                        height={500}
                                                        quality={100}
                                                    />
                                                </div>
                                                <div className="mt-5">
                                                    <Image
                                                        className="w-full rounded-2xl"
                                                        src="/images/branch/4.png"
                                                        alt="img"
                                                        layout="responsive"
                                                        width={500}
                                                        height={500}
                                                        quality={100}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <Image
                                                        className="w-full rounded-2xl"
                                                        src="/images/branch/5.png"
                                                        alt="img"
                                                        layout="responsive"
                                                        width={500}
                                                        height={500}
                                                        quality={100}
                                                    />
                                                </div>
                                                <div className="mt-5">
                                                    <Image
                                                        className="w-full rounded-2xl"
                                                        src="/images/branch/6.png"
                                                        alt="img"
                                                        layout="responsive"
                                                        width={500}
                                                        height={500}
                                                        quality={100}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </h3>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-24 container w-full mx-auto px-3">
                <div className="flex justify-between items-center mb-7">
                    <div>
                        <h1 className="text-4xl font-bold tracking-wide">Bất động sản theo địa điểm</h1>
                        <p className="text-lg font-normal mt-1">Tin tức bất động sản trong nước</p>
                    </div>
                    <div>
                        <Link href={"/"} className="cs-text-primary text-base font-medium text-nowrap flex items-center gap-1">
                            Xem thêm <Image src="/icons/chevron-right.svg" className="mt-0.5" alt="chevron-right" width={18} height={18} />
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12 lg:col-span-6">
                        <Image
                            className="w-full rounded-2xl"
                            src="/images/1.png"
                            alt="img"
                            layout="responsive"
                            width={500}
                            height={500}
                            quality={100}
                        />
                    </div>

                    <div className="col-span-12 lg:col-span-6">
                        <div className="grid grid-cols-12">
                            <div className="col-span-12">
                                <Image
                                    className="w-full img-cs rounded-2xl"
                                    src="/images/2.png"
                                    alt="img"
                                    layout="responsive"
                                    width={500}
                                    height={320}
                                    quality={100}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-5 mt-5">
                            <div className="col-span-6">
                                <Image
                                    className="w-full rounded-2xl"
                                    src="/images/3.png"
                                    alt="img"
                                    layout="responsive"
                                    width={500}
                                    height={500}
                                    quality={100}
                                />
                            </div>
                            <div className="col-span-6">
                                <Image
                                    className="w-full rounded-2xl"
                                    src="/images/4.png"
                                    alt="img"
                                    layout="responsive"
                                    width={500}
                                    height={500}
                                    quality={100}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-24  bg-[#FBF5FF]">
                <div className="container w-full mx-auto px-3 py-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-wide">Hỗ trợ tiện ích</h1>
                        <p className="text-sm font-normal text-[#616161] max-w-screen-md mx-auto mt-6">
                            Hỗ trợ tiện ích trong bất động sản giúp nâng cao chất lượng sống và giá trị tài sản. Các tiện ích như an ninh, bãi đỗ xe,
                            khu vui chơi, hồ bơi, và phòng gym tạo môi trường sống tiện nghi, an toàn. Ngoài ra, các dự án cao cấp thường kèm theo
                            trung tâm thương mại, nhà hàng, trường học và bệnh viện, mang lại sự tiện lợi cho cư dân. Đầu tư vào các tiện ích này
                            không chỉ thu hút khách hàng mà còn tăng giá trị bất động sản dài hạn.
                        </p>
                    </div>
                    <div className="grid grid-cols-12 mt-14">
                        <div className="col-span-3">
                            <div className="">
                                <Image src="/icons/YinYang.svg" className="mx-auto" alt="icon" width={50} height={50} quality={100} />
                                <h3 className="text-base font-semibold text-center mt-4">Xem tuổi xây nhà</h3>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="">
                                <Image src="/icons/assignment.svg" className="mx-auto" alt="icon" width={50} height={50} quality={100} />
                                <h3 className="text-base font-semibold text-center mt-4">Chi phí làm nhà</h3>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="">
                                <Image src="/icons/calculator.svg" className="mx-auto" alt="icon" width={50} height={50} quality={100} />
                                <h3 className="text-base font-semibold text-center mt-4">Tính lãi xuất</h3>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="">
                                <Image src="/icons/sun.svg" className="mx-auto" alt="icon" width={50} height={50} quality={100} />
                                <h3 className="text-base font-semibold text-center mt-4">Tư vấn phong thủy</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-24 container w-full mx-auto px-3">
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12 md:col-span-6 my-auto">
                        <div className="max-w-lg">
                            <h1 className="text-4xl font-bold tracking-wide">Được hơn 10k người dùng tin cậy</h1>
                            <p className="text-sm font-normal text-[#616161] max-w-screen-md mx-auto mt-6">
                                Chúng tôi là một công ty bất động sản có trụ sở tại Việt Nam đã hoạt động được hơn 20 năm. Chúng tôi đã giúp vô số
                                người tìm thấy ngôi nhà mơ ước của họ
                            </p>
                        </div>
                        <div className="flex gap-16 mt-12">
                            <div>
                                <h1 className="gradient-text text-3xl font-bold">999+</h1>
                                <p className="text-sm font-normal text-black max-w-screen-md mx-auto mt-3 text-center">Giao dịch thành công</p>
                            </div>
                            <div>
                                <h1 className="gradient-text text-3xl font-bold">99%</h1>
                                <p className="text-sm font-normal text-black max-w-screen-md mx-auto mt-3 text-center">Khách hàng hài lòng</p>
                            </div>
                            <div>
                                <h1 className="gradient-text text-3xl font-bold">200+</h1>
                                <p className="text-sm font-normal text-black max-w-screen-md mx-auto mt-3 text-center">Chủ đầu tư đã hợp tác</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <Image
                            className="w-full rounded-2xl"
                            src="/images/home-start.png"
                            alt="img"
                            layout="responsive"
                            width={500}
                            height={500}
                            quality={100}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
