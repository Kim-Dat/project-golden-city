"use client";
import { Select } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const { Option } = Select;

const Page = () => {
    return (
        <div className="w-full">
            <section className=" container w-full mx-auto px-5">
                <div className="bg-[#F5F5F5] rounded-lg px-3">
                    <div className="flex items-center py-3 flex-wrap gap-5">
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
                            <Link href={"/search"} className="button button-sm">
                                Tìm kiếm
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3 mt-5 flex-wrap">
                    <div>
                        <div className="h-10 flex items-center text-sm gap-3 w-48 bg-white shadow-xl border rounded-lg px-3">
                            <Select id="price" defaultValue="option1" style={{ width: "100%" }} className="custom-select w-98">
                                <Option value="option1" disabled>
                                    Loại nhà đất
                                </Option>
                                <Option value="option2">Đất nông nghiệp</Option>
                                <Option value="option3">Đất phi nông nghiệp</Option>
                                <Option value="option3">Đất chưa sử dụng</Option>
                            </Select>
                        </div>
                    </div>
                    <div>
                        <div className="h-10 flex items-center text-sm gap-3 w-28 bg-white shadow-xl border rounded-lg px-3">
                            <Select id="price" defaultValue="option1" style={{ width: "100%" }} className="custom-select w-98">
                                <Option value="option1" disabled>
                                    Mức giá
                                </Option>
                                <Option value="option2">1-2 tỷ</Option>
                                <Option value="option3">2-3 tỷ</Option>
                            </Select>
                        </div>
                    </div>
                    <div>
                        <div className="h-10 flex items-center text-sm gap-3 w-32 bg-white shadow-xl border rounded-lg px-3">
                            <Select id="price" defaultValue="option1" style={{ width: "100%" }} className="custom-select w-98">
                                <Option value="option1" disabled>
                                    Diện tích
                                </Option>
                                <Option value="option2">1-2 m2</Option>
                                <Option value="option3">2-3 m2</Option>
                            </Select>
                        </div>
                    </div>
                    <div>
                        <div className="h-10 flex items-center text-sm gap-3 w-48 bg-white shadow-xl border rounded-lg px-3">
                            <Select id="price" defaultValue="option1" style={{ width: "100%" }} className="custom-select w-98">
                                <Option value="option1" disabled>
                                    Số phòng ngủ
                                </Option>
                                <Option value="option2">1 khách 1 ngủ</Option>
                                <Option value="option3">2 khách 1 ngủ</Option>
                                <Option value="option3">1 khách 2 ngủ</Option>
                            </Select>
                        </div>
                    </div>
                    <div>
                        <div className="h-10 flex items-center text-sm gap-3 w-36 bg-white shadow-xl border rounded-lg px-3">
                            <Select id="price" defaultValue="option1" style={{ width: "100%" }} className="custom-select w-98">
                                <Option value="option1" disabled>
                                    Hướng nhà
                                </Option>
                                <Option value="option2">Đông</Option>
                                <Option value="option3">Tây</Option>
                                <Option value="option3">Nam</Option>
                                <Option value="option3">Bắc</Option>
                            </Select>
                        </div>
                    </div>
                    <div>
                        <div className="h-10 flex items-center text-sm gap-3 w-48 bg-white shadow-xl border rounded-lg px-3">
                            <Select id="price" defaultValue="option1" style={{ width: "100%" }} className="custom-select w-98">
                                <Option value="option1" disabled>
                                    Hướng ban công
                                </Option>
                                <Option value="option2">Đông</Option>
                                <Option value="option3">Tây</Option>
                                <Option value="option3">Nam</Option>
                                <Option value="option3">Bắc</Option>
                            </Select>
                        </div>
                    </div>
                    <div>
                        <div className="h-10 flex items-center text-sm gap-3 w-48 bg-white shadow-xl border rounded-lg px-3">
                            <Select id="price" defaultValue="option1" style={{ width: "100%" }} className="custom-select w-98">
                                <Option value="option1" disabled>
                                    Nội dung tin
                                </Option>
                                <Option value="option2">Toàn cầu</Option>
                                <Option value="option3">Địa phương</Option>
                            </Select>
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-24 container w-full mx-auto px-3">
                <div className="mb-7">
                    <div>
                        <h3 className="text-2xl font-bold">Mua bán nhà đất TP. Hồ Chí Minh</h3>
                        <p className="text-base text-black font-normal mt-2">Hiện có 63.673 bất động sản.</p>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-12 bg-white shadow-md p-3 rounded-lg hover:shadow-xl cursor-pointer gap-5">
                        <div className="col-span-12 lg:col-span-4">
                            <Image src="/images/card/card-medium/9.png" className="w-full" alt="img" width={500} height={500} quality={100} />
                            <div className="flex justify-between gap-3 mt-3">
                                <div>
                                    <Image src="/images/card/card-sm/6.png" alt="img" width={90} height={90} quality={100} />
                                </div>
                                <div>
                                    <Image src="/images/card/card-sm/7.png" alt="img" width={90} height={90} quality={100} />
                                </div>
                                <div>
                                    <Image src="/images/card/card-sm/8.png" alt="img" width={90} height={90} quality={100} />
                                </div>
                                <div>
                                    <Image src="/images/card/card-sm/9.png" alt="img" width={90} height={90} quality={100} />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-8">
                            <div className="grid grid-cols-12">
                                <div className="col-span-12 lg:col-span-8 lg:border-r pb-4 pe-5">
                                    <h3 className="text-xl font-bold">
                                        Quỹ căn hộ cho thuê giá tốt nhất Vinhomes Ocean Park tại các phân khu S, Ruby, Masteri, Pavilion...
                                    </h3>
                                    <div className="flex items-start gap-2 mt-4">
                                        <Image width={18} height={18} className="mt-1" src="/icons/local.svg" alt="local" />
                                        <span className="text-base font-normal text-[#616161]">
                                            Đường Hoàng Quốc Việt, Phường Cổ Nhuế 1, Bắc Từ Liêm, Hà Nội
                                        </span>
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <p className="text-md font-medium flex items-center gap-2 text-[#757575]">
                                            <Image src="/icons/Bed.svg" alt="img" width={18} height={18} />6 PN
                                        </p>
                                        <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                        <p className="text-md font-medium flex items-center gap-2 text-[#757575]">
                                            <Image src="/icons/home.svg" alt="img" width={18} height={18} />2 lầu
                                        </p>

                                        <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                        <p className="text-md font-medium flex items-center gap-2 text-[#757575]">
                                            <Image src="/icons/turn.svg" alt="img" width={18} height={18} />
                                            Hướng Nam
                                        </p>
                                        <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                        <p className="text-md font-medium flex items-center gap-2 text-[#757575]">
                                            <Image src="/icons/ky.svg" alt="img" width={18} height={18} />
                                            200m2
                                        </p>
                                    </div>
                                    <p className="text-base font-normal text-[#616161] mt-4">
                                        Cho thuê CCMN cao cấp mới tinh gần Hoàng Quốc Việt,Trần cung, Phạm Văn Đồng, khu đô thị Nam Cường.Thang máy
                                        nhật,khóa cửa vân tay,PCCC đầy đủ,điều hòa,nóng lạnh,gường tủ, ...
                                    </p>
                                </div>
                                <div className="col-span-12 lg:col-span-4 flex lg:flex-col lg:justify-center justify-between  items-center gap-5 pb-4 lg:p-0">
                                    <p className="text-md text-nowrap">Giá bán</p>
                                    <h1 className="text-xl cs-text-primary font-bold text-nowrap">22 triệu / tháng</h1>
                                    <div className="w-32 lg:mt-5">
                                        <button className="button button-xl ">Mua ngay</button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between w-full border-t pt-3">
                                <div className="flex items-center gap-3">
                                    <div className="h-auto w-16">
                                        <Image src="/avatar/1.png" alt="img" className="block" width={50} height={50} quality={100} />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-md font-medium">Gia Huy</h3>
                                        <div className="flex items-center gap-2">
                                            <Image src="/icons/clock-circle.svg" alt="icon" width={16} height={16} quality={100} />
                                            <p className="text-nowrap">15 giờ trước</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex items-center flex-wrap justify-end   gap-3 ">
                                    <a href="tel:0899 205 345" className="button-outline-sm">
                                        <div className="flex items-center gap-2">
                                            <div className="w-[18px] h-auto">
                                                <Image src="/icons/call-fit.svg" alt="icon" width={18} height={18} quality={100} />
                                            </div>
                                            <h3 className="text-nowrap">0899 205 345</h3>
                                        </div>
                                    </a>
                                    <button className="button-outline-sm">Thương lượng giá</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid mt-10 grid-cols-12 bg-white shadow-md p-3 rounded-lg hover:shadow-xl cursor-pointer gap-5">
                        <div className="col-span-12 lg:col-span-4">
                            <Image src="/images/card/card-medium/9.png" className="w-full" alt="img" width={500} height={500} quality={100} />
                            <div className="flex justify-between gap-3 mt-3">
                                <div>
                                    <Image src="/images/card/card-sm/6.png" alt="img" width={90} height={90} quality={100} />
                                </div>
                                <div>
                                    <Image src="/images/card/card-sm/7.png" alt="img" width={90} height={90} quality={100} />
                                </div>
                                <div>
                                    <Image src="/images/card/card-sm/8.png" alt="img" width={90} height={90} quality={100} />
                                </div>
                                <div>
                                    <Image src="/images/card/card-sm/9.png" alt="img" width={90} height={90} quality={100} />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-8">
                            <div className="grid grid-cols-12">
                                <div className="col-span-12 lg:col-span-8 lg:border-r pb-4 pe-5">
                                    <h3 className="text-xl font-bold">
                                        Quỹ căn hộ cho thuê giá tốt nhất Vinhomes Ocean Park tại các phân khu S, Ruby, Masteri, Pavilion...
                                    </h3>
                                    <div className="flex items-start gap-2 mt-4">
                                        <Image width={18} height={18} className="mt-1" src="/icons/local.svg" alt="local" />
                                        <span className="text-base font-normal text-[#616161]">
                                            Đường Hoàng Quốc Việt, Phường Cổ Nhuế 1, Bắc Từ Liêm, Hà Nội
                                        </span>
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <p className="text-md font-medium flex items-center gap-2 text-[#757575]">
                                            <Image src="/icons/Bed.svg" alt="img" width={18} height={18} />6 PN
                                        </p>
                                        <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                        <p className="text-md font-medium flex items-center gap-2 text-[#757575]">
                                            <Image src="/icons/home.svg" alt="img" width={18} height={18} />2 lầu
                                        </p>

                                        <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                        <p className="text-md font-medium flex items-center gap-2 text-[#757575]">
                                            <Image src="/icons/turn.svg" alt="img" width={18} height={18} />
                                            Hướng Nam
                                        </p>
                                        <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                        <p className="text-md font-medium flex items-center gap-2 text-[#757575]">
                                            <Image src="/icons/ky.svg" alt="img" width={18} height={18} />
                                            200m2
                                        </p>
                                    </div>
                                    <p className="text-base font-normal text-[#616161] mt-4">
                                        Cho thuê CCMN cao cấp mới tinh gần Hoàng Quốc Việt,Trần cung, Phạm Văn Đồng, khu đô thị Nam Cường.Thang máy
                                        nhật,khóa cửa vân tay,PCCC đầy đủ,điều hòa,nóng lạnh,gường tủ, ...
                                    </p>
                                </div>
                                <div className="col-span-12 lg:col-span-4 flex lg:flex-col lg:justify-center justify-between  items-center gap-5 pb-4 lg:p-0">
                                    <p className="text-md text-nowrap">Giá bán</p>
                                    <h1 className="text-xl cs-text-primary font-bold text-nowrap">22 triệu / tháng</h1>
                                    <div className="w-32 lg:mt-5">
                                        <button className="button button-xl ">Mua ngay</button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between w-full border-t pt-3">
                                <div className="flex items-center gap-3">
                                    <div className="h-auto w-16">
                                        <Image src="/avatar/2.png" alt="img" className="block" width={50} height={50} quality={100} />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-md font-medium">Gia Huy</h3>
                                        <div className="flex items-center gap-2">
                                            <Image src="/icons/clock-circle.svg" alt="icon" width={16} height={16} quality={100} />
                                            <p className="text-nowrap">15 giờ trước</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex items-center flex-wrap justify-end   gap-3 ">
                                    <a href="tel:0899 205 345" className="button-outline-sm">
                                        <div className="flex items-center gap-2">
                                            <div className="w-[18px] h-auto">
                                                <Image src="/icons/call-fit.svg" alt="icon" width={18} height={18} quality={100} />
                                            </div>
                                            <h3 className="text-nowrap">0899 205 345</h3>
                                        </div>
                                    </a>
                                    <button className="button-outline-sm">Thương lượng giá</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid mt-10 grid-cols-12 bg-white shadow-md p-3 rounded-lg hover:shadow-xl cursor-pointer gap-5">
                        <div className="col-span-12 lg:col-span-4">
                            <Image src="/images/card/card-medium/9.png" className="w-full" alt="img" width={500} height={500} quality={100} />
                            <div className="flex justify-between gap-3 mt-3">
                                <div>
                                    <Image src="/images/card/card-sm/6.png" alt="img" width={90} height={90} quality={100} />
                                </div>
                                <div>
                                    <Image src="/images/card/card-sm/7.png" alt="img" width={90} height={90} quality={100} />
                                </div>
                                <div>
                                    <Image src="/images/card/card-sm/8.png" alt="img" width={90} height={90} quality={100} />
                                </div>
                                <div>
                                    <Image src="/images/card/card-sm/9.png" alt="img" width={90} height={90} quality={100} />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-8">
                            <div className="grid grid-cols-12">
                                <div className="col-span-12 lg:col-span-8 lg:border-r pb-4 pe-5">
                                    <h3 className="text-xl font-bold">
                                        Quỹ căn hộ cho thuê giá tốt nhất Vinhomes Ocean Park tại các phân khu S, Ruby, Masteri, Pavilion...
                                    </h3>
                                    <div className="flex items-start gap-2 mt-4">
                                        <Image width={18} height={18} className="mt-1" src="/icons/local.svg" alt="local" />
                                        <span className="text-base font-normal text-[#616161]">
                                            Đường Hoàng Quốc Việt, Phường Cổ Nhuế 1, Bắc Từ Liêm, Hà Nội
                                        </span>
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <p className="text-md font-medium flex items-center gap-2 text-[#757575]">
                                            <Image src="/icons/Bed.svg" alt="img" width={18} height={18} />6 PN
                                        </p>
                                        <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                        <p className="text-md font-medium flex items-center gap-2 text-[#757575]">
                                            <Image src="/icons/home.svg" alt="img" width={18} height={18} />2 lầu
                                        </p>

                                        <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                        <p className="text-md font-medium flex items-center gap-2 text-[#757575]">
                                            <Image src="/icons/turn.svg" alt="img" width={18} height={18} />
                                            Hướng Nam
                                        </p>
                                        <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                        <p className="text-md font-medium flex items-center gap-2 text-[#757575]">
                                            <Image src="/icons/ky.svg" alt="img" width={18} height={18} />
                                            200m2
                                        </p>
                                    </div>
                                    <p className="text-base font-normal text-[#616161] mt-4">
                                        Cho thuê CCMN cao cấp mới tinh gần Hoàng Quốc Việt,Trần cung, Phạm Văn Đồng, khu đô thị Nam Cường.Thang máy
                                        nhật,khóa cửa vân tay,PCCC đầy đủ,điều hòa,nóng lạnh,gường tủ, ...
                                    </p>
                                </div>
                                <div className="col-span-12 lg:col-span-4 flex lg:flex-col lg:justify-center justify-between  items-center gap-5 pb-4 lg:p-0">
                                    <p className="text-md text-nowrap">Giá bán</p>
                                    <h1 className="text-xl cs-text-primary font-bold text-nowrap">22 triệu / tháng</h1>
                                    <div className="w-32 lg:mt-5">
                                        <button className="button button-xl ">Mua ngay</button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between w-full border-t pt-3">
                                <div className="flex items-center gap-3">
                                    <div className="h-auto w-16">
                                        <Image src="/avatar/3.png" alt="img" className="block" width={50} height={50} quality={100} />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-md font-medium">Gia Huy</h3>
                                        <div className="flex items-center gap-2">
                                            <Image src="/icons/clock-circle.svg" alt="icon" width={16} height={16} quality={100} />
                                            <p className="text-nowrap">15 giờ trước</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex items-center flex-wrap justify-end gap-3 ">
                                    <a href="tel:0899 205 345" className="button-outline-sm">
                                        <div className="flex items-center gap-2">
                                            <div className="w-[18px] h-auto ">
                                                <Image src="/icons/call-fit.svg" alt="icon" width={18} height={18} quality={100} />
                                            </div>
                                            <h3 className="text-nowrap">0899 205 345</h3>
                                        </div>
                                    </a>
                                    <button className="button-outline-sm">Thương lượng giá</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid mt-10 grid-cols-12 bg-white shadow-md p-3 rounded-lg hover:shadow-xl cursor-pointer gap-5">
                        <div className="col-span-12 lg:col-span-4">
                            <Image src="/images/card/card-medium/9.png" className="w-full" alt="img" width={500} height={500} quality={100} />
                            <div className="flex justify-between gap-3 mt-3">
                                <div>
                                    <Image src="/images/card/card-sm/6.png" alt="img" width={90} height={90} quality={100} />
                                </div>
                                <div>
                                    <Image src="/images/card/card-sm/7.png" alt="img" width={90} height={90} quality={100} />
                                </div>
                                <div>
                                    <Image src="/images/card/card-sm/8.png" alt="img" width={90} height={90} quality={100} />
                                </div>
                                <div>
                                    <Image src="/images/card/card-sm/9.png" alt="img" width={90} height={90} quality={100} />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-8">
                            <div className="grid grid-cols-12">
                                <div className="col-span-12 lg:col-span-8 lg:border-r pb-4 pe-5">
                                    <h3 className="text-xl font-bold">
                                        Quỹ căn hộ cho thuê giá tốt nhất Vinhomes Ocean Park tại các phân khu S, Ruby, Masteri, Pavilion...
                                    </h3>
                                    <div className="flex items-start gap-2 mt-4">
                                        <Image width={18} height={18} className="mt-1" src="/icons/local.svg" alt="local" />
                                        <span className="text-base font-normal text-[#616161]">
                                            Đường Hoàng Quốc Việt, Phường Cổ Nhuế 1, Bắc Từ Liêm, Hà Nội
                                        </span>
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <p className="text-md font-medium flex items-center gap-2 text-[#757575]">
                                            <Image src="/icons/Bed.svg" alt="img" width={18} height={18} />6 PN
                                        </p>
                                        <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                        <p className="text-md font-medium flex items-center gap-2 text-[#757575]">
                                            <Image src="/icons/home.svg" alt="img" width={18} height={18} />2 lầu
                                        </p>

                                        <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                        <p className="text-md font-medium flex items-center gap-2 text-[#757575]">
                                            <Image src="/icons/turn.svg" alt="img" width={18} height={18} />
                                            Hướng Nam
                                        </p>
                                        <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                        <p className="text-md font-medium flex items-center gap-2 text-[#757575]">
                                            <Image src="/icons/ky.svg" alt="img" width={18} height={18} />
                                            200m2
                                        </p>
                                    </div>
                                    <p className="text-base font-normal text-[#616161] mt-4">
                                        Cho thuê CCMN cao cấp mới tinh gần Hoàng Quốc Việt,Trần cung, Phạm Văn Đồng, khu đô thị Nam Cường.Thang máy
                                        nhật,khóa cửa vân tay,PCCC đầy đủ,điều hòa,nóng lạnh,gường tủ, ...
                                    </p>
                                </div>
                                <div className="col-span-12 lg:col-span-4 flex lg:flex-col lg:justify-center justify-between  items-center gap-5 pb-4 lg:p-0">
                                    <p className="text-md text-nowrap">Giá bán</p>
                                    <h1 className="text-xl cs-text-primary font-bold text-nowrap">22 triệu / tháng</h1>
                                    <div className="w-32 lg:mt-5">
                                        <button className="button button-xl ">Mua ngay</button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between w-full border-t pt-3">
                                <div className="flex items-center gap-3">
                                    <div className="h-auto w-16">
                                        <Image src="/avatar/4.png" alt="img" className="block" width={50} height={50} quality={100} />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-md font-medium">Gia Huy</h3>
                                        <div className="flex items-center gap-2">
                                            <Image src="/icons/clock-circle.svg" alt="icon" width={16} height={16} quality={100} />
                                            <p className="text-nowrap">15 giờ trước</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex items-center flex-wrap justify-end   gap-3 ">
                                    <a href="tel:0899 205 345" className="button-outline-sm">
                                        <div className="flex items-center gap-2">
                                            <div className="w-[18px] h-auto ">
                                                <Image src="/icons/call-fit.svg" alt="icon" width={18} height={18} quality={100} />
                                            </div>
                                            <h3 className="text-nowrap">0899 205 345</h3>
                                        </div>
                                    </a>
                                    <button className="button-outline-sm">Thương lượng giá</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid mt-10 grid-cols-12 bg-white shadow-md p-3 rounded-lg hover:shadow-xl cursor-pointer gap-5">
                        <div className="col-span-12 lg:col-span-4">
                            <Image src="/images/card/card-medium/9.png" className="w-full" alt="img" width={500} height={500} quality={100} />
                            <div className="flex justify-between gap-3 mt-3">
                                <div>
                                    <Image src="/images/card/card-sm/6.png" alt="img" width={90} height={90} quality={100} />
                                </div>
                                <div>
                                    <Image src="/images/card/card-sm/7.png" alt="img" width={90} height={90} quality={100} />
                                </div>
                                <div>
                                    <Image src="/images/card/card-sm/8.png" alt="img" width={90} height={90} quality={100} />
                                </div>
                                <div>
                                    <Image src="/images/card/card-sm/9.png" alt="img" width={90} height={90} quality={100} />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-8">
                            <div className="grid grid-cols-12">
                                <div className="col-span-12 lg:col-span-8 lg:border-r pb-4 pe-5">
                                    <h3 className="text-xl font-bold">
                                        Quỹ căn hộ cho thuê giá tốt nhất Vinhomes Ocean Park tại các phân khu S, Ruby, Masteri, Pavilion...
                                    </h3>
                                    <div className="flex items-start gap-2 mt-4">
                                        <Image width={18} height={18} className="mt-1" src="/icons/local.svg" alt="local" />
                                        <span className="text-base font-normal text-[#616161]">
                                            Đường Hoàng Quốc Việt, Phường Cổ Nhuế 1, Bắc Từ Liêm, Hà Nội
                                        </span>
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <p className="text-md font-medium flex items-center gap-2 text-[#757575]">
                                            <Image src="/icons/Bed.svg" alt="img" width={18} height={18} />6 PN
                                        </p>
                                        <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                        <p className="text-md font-medium flex items-center gap-2 text-[#757575]">
                                            <Image src="/icons/home.svg" alt="img" width={18} height={18} />2 lầu
                                        </p>

                                        <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                        <p className="text-md font-medium flex items-center gap-2 text-[#757575]">
                                            <Image src="/icons/turn.svg" alt="img" width={18} height={18} />
                                            Hướng Nam
                                        </p>
                                        <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                        <p className="text-md font-medium flex items-center gap-2 text-[#757575]">
                                            <Image src="/icons/ky.svg" alt="img" width={18} height={18} />
                                            200m2
                                        </p>
                                    </div>
                                    <p className="text-base font-normal text-[#616161] mt-4">
                                        Cho thuê CCMN cao cấp mới tinh gần Hoàng Quốc Việt,Trần cung, Phạm Văn Đồng, khu đô thị Nam Cường.Thang máy
                                        nhật,khóa cửa vân tay,PCCC đầy đủ,điều hòa,nóng lạnh,gường tủ, ...
                                    </p>
                                </div>
                                <div className="col-span-12 lg:col-span-4 flex lg:flex-col lg:justify-center justify-between  items-center gap-5 pb-4 lg:p-0">
                                    <p className="text-md text-nowrap">Giá bán</p>
                                    <h1 className="text-xl cs-text-primary font-bold text-nowrap">22 triệu / tháng</h1>
                                    <div className="w-32 lg:mt-5">
                                        <button className="button button-xl ">Mua ngay</button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between w-full border-t pt-3">
                                <div className="flex items-center gap-3">
                                    <div className="h-auto w-16">
                                        <Image src="/avatar/5.png" alt="img" className="block" width={50} height={50} quality={100} />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-md font-medium">Gia Huy</h3>
                                        <div className="flex items-center gap-2">
                                            <Image src="/icons/clock-circle.svg" alt="icon" width={16} height={16} quality={100} />
                                            <p className="text-nowrap">15 giờ trước</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex items-center flex-wrap justify-end   gap-3 ">
                                    <a href="tel:0899 205 345" className="button-outline-sm">
                                        <div className="flex items-center gap-2">
                                            <div className="w-[18px] h-auto ">
                                                <Image src="/icons/call-fit.svg" alt="icon" width={18} height={18} quality={100} />
                                            </div>
                                            <h3 className="text-nowrap">0899 205 345</h3>
                                        </div>
                                    </a>
                                    <button className="button-outline-sm">Thương lượng giá</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid mt-10 grid-cols-12 bg-white shadow-md p-3 rounded-lg hover:shadow-xl cursor-pointer gap-5">
                        <div className="col-span-12 lg:col-span-4">
                            <Image src="/images/card/card-medium/9.png" className="w-full" alt="img" width={500} height={500} quality={100} />
                            <div className="flex justify-between gap-3 mt-3">
                                <div>
                                    <Image src="/images/card/card-sm/6.png" alt="img" width={90} height={90} quality={100} />
                                </div>
                                <div>
                                    <Image src="/images/card/card-sm/7.png" alt="img" width={90} height={90} quality={100} />
                                </div>
                                <div>
                                    <Image src="/images/card/card-sm/8.png" alt="img" width={90} height={90} quality={100} />
                                </div>
                                <div>
                                    <Image src="/images/card/card-sm/9.png" alt="img" width={90} height={90} quality={100} />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-8">
                            <div className="grid grid-cols-12">
                                <div className="col-span-12 lg:col-span-8 lg:border-r pb-4 pe-5">
                                    <h3 className="text-xl font-bold">
                                        Quỹ căn hộ cho thuê giá tốt nhất Vinhomes Ocean Park tại các phân khu S, Ruby, Masteri, Pavilion...
                                    </h3>
                                    <div className="flex items-start gap-2 mt-4">
                                        <Image width={18} height={18} className="mt-1" src="/icons/local.svg" alt="local" />
                                        <span className="text-base font-normal text-[#616161]">
                                            Đường Hoàng Quốc Việt, Phường Cổ Nhuế 1, Bắc Từ Liêm, Hà Nội
                                        </span>
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <p className="text-md font-medium flex items-center gap-2 text-[#757575]">
                                            <Image src="/icons/Bed.svg" alt="img" width={18} height={18} />6 PN
                                        </p>
                                        <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                        <p className="text-md font-medium flex items-center gap-2 text-[#757575]">
                                            <Image src="/icons/home.svg" alt="img" width={18} height={18} />2 lầu
                                        </p>

                                        <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                        <p className="text-md font-medium flex items-center gap-2 text-[#757575]">
                                            <Image src="/icons/turn.svg" alt="img" width={18} height={18} />
                                            Hướng Nam
                                        </p>
                                        <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                        <p className="text-md font-medium flex items-center gap-2 text-[#757575]">
                                            <Image src="/icons/ky.svg" alt="img" width={18} height={18} />
                                            200m2
                                        </p>
                                    </div>
                                    <p className="text-base font-normal text-[#616161] mt-4">
                                        Cho thuê CCMN cao cấp mới tinh gần Hoàng Quốc Việt,Trần cung, Phạm Văn Đồng, khu đô thị Nam Cường.Thang máy
                                        nhật,khóa cửa vân tay,PCCC đầy đủ,điều hòa,nóng lạnh,gường tủ, ...
                                    </p>
                                </div>
                                <div className="col-span-12 lg:col-span-4 flex lg:flex-col lg:justify-center justify-between  items-center gap-5 pb-4 lg:p-0">
                                    <p className="text-md text-nowrap">Giá bán</p>
                                    <h1 className="text-xl cs-text-primary font-bold text-nowrap">22 triệu / tháng</h1>
                                    <div className="w-32 lg:mt-5">
                                        <button className="button button-xl ">Mua ngay</button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between w-full border-t pt-3">
                                <div className="flex items-center gap-3">
                                    <div className="h-auto w-16">
                                        <Image src="/avatar/6.png" alt="img" className="block" width={50} height={50} quality={100} />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-md font-medium">Gia Huy</h3>
                                        <div className="flex items-center gap-2">
                                            <Image src="/icons/clock-circle.svg" alt="icon" width={16} height={16} quality={100} />
                                            <p className="text-nowrap">15 giờ trước</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex items-center flex-wrap justify-end   gap-3 ">
                                    <a href="tel:0899 205 345" className="button-outline-sm">
                                        <div className="flex items-center gap-2">
                                            <div className="w-[18px] h-auto ">
                                                <Image src="/icons/call-fit.svg" alt="icon" width={18} height={18} quality={100} />
                                            </div>
                                            <h3 className="text-nowrap">0899 205 345</h3>
                                        </div>
                                    </a>
                                    <button className="button-outline-sm">Thương lượng giá</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid mt-10 grid-cols-12 bg-white shadow-md p-3 rounded-lg hover:shadow-xl cursor-pointer gap-5">
                        <div className="col-span-12 lg:col-span-4">
                            <Image src="/images/card/card-medium/9.png" className="w-full" alt="img" width={500} height={500} quality={100} />
                            <div className="flex justify-between gap-3 mt-3">
                                <div>
                                    <Image src="/images/card/card-sm/6.png" alt="img" width={90} height={90} quality={100} />
                                </div>
                                <div>
                                    <Image src="/images/card/card-sm/7.png" alt="img" width={90} height={90} quality={100} />
                                </div>
                                <div>
                                    <Image src="/images/card/card-sm/8.png" alt="img" width={90} height={90} quality={100} />
                                </div>
                                <div>
                                    <Image src="/images/card/card-sm/9.png" alt="img" width={90} height={90} quality={100} />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-8">
                            <div className="grid grid-cols-12">
                                <div className="col-span-12 lg:col-span-8 lg:border-r pb-4 pe-5">
                                    <h3 className="text-xl font-bold">
                                        Quỹ căn hộ cho thuê giá tốt nhất Vinhomes Ocean Park tại các phân khu S, Ruby, Masteri, Pavilion...
                                    </h3>
                                    <div className="flex items-start gap-2 mt-4">
                                        <Image width={18} height={18} className="mt-1" src="/icons/local.svg" alt="local" />
                                        <span className="text-base font-normal text-[#616161]">
                                            Đường Hoàng Quốc Việt, Phường Cổ Nhuế 1, Bắc Từ Liêm, Hà Nội
                                        </span>
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <p className="text-md font-medium flex items-center gap-2 text-[#757575]">
                                            <Image src="/icons/Bed.svg" alt="img" width={18} height={18} />6 PN
                                        </p>
                                        <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                        <p className="text-md font-medium flex items-center gap-2 text-[#757575]">
                                            <Image src="/icons/home.svg" alt="img" width={18} height={18} />2 lầu
                                        </p>

                                        <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                        <p className="text-md font-medium flex items-center gap-2 text-[#757575]">
                                            <Image src="/icons/turn.svg" alt="img" width={18} height={18} />
                                            Hướng Nam
                                        </p>
                                        <Image width={4} height={4} className="mx-3" src="/icons/Ellipse.svg" alt="Logo" />
                                        <p className="text-md font-medium flex items-center gap-2 text-[#757575]">
                                            <Image src="/icons/ky.svg" alt="img" width={18} height={18} />
                                            200m2
                                        </p>
                                    </div>
                                    <p className="text-base font-normal text-[#616161] mt-4">
                                        Cho thuê CCMN cao cấp mới tinh gần Hoàng Quốc Việt,Trần cung, Phạm Văn Đồng, khu đô thị Nam Cường.Thang máy
                                        nhật,khóa cửa vân tay,PCCC đầy đủ,điều hòa,nóng lạnh,gường tủ, ...
                                    </p>
                                </div>
                                <div className="col-span-12 lg:col-span-4 flex lg:flex-col lg:justify-center justify-between  items-center gap-5 pb-4 lg:p-0">
                                    <p className="text-md text-nowrap">Giá bán</p>
                                    <h1 className="text-xl cs-text-primary font-bold text-nowrap">22 triệu / tháng</h1>
                                    <div className="w-32 lg:mt-5">
                                        <button className="button button-xl ">Mua ngay</button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between w-full border-t pt-3">
                                <div className="flex items-center gap-3">
                                    <div className="h-auto w-16">
                                        <Image src="/avatar/7.png" alt="img" className="block" width={50} height={50} quality={100} />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-md font-medium">Gia Huy</h3>
                                        <div className="flex items-center gap-2">
                                            <Image src="/icons/clock-circle.svg" alt="icon" width={16} height={16} quality={100} />
                                            <p className="text-nowrap">15 giờ trước</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex items-center flex-wrap justify-end   gap-3 ">
                                    <a href="tel:0899 205 345" className="button-outline-sm">
                                        <div className="flex items-center gap-2">
                                            <div className="w-[18px] h-auto ">
                                                <Image src="/icons/call-fit.svg" alt="icon" width={18} height={18} quality={100} />
                                            </div>
                                            <h3 className="text-nowrap">0899 205 345</h3>
                                        </div>
                                    </a>
                                    <button className="button-outline-sm">Thương lượng giá</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;
