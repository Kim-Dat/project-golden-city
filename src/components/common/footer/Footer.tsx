import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-100 w-full px-4 pt-12">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-4 mb-10">
                    <div className="col-span-12 md:col-span-5">
                        <Image width={102} height={80} src="/icons/log-footer.svg" alt="Logo" />
                        <h2 className="text-base font-semibold my-5">CÔNG TY CỔ PHẦN CHOTDATNHANH VIET NAM</h2>
                        <ul>
                            <li>
                                <div className="flex items-start gap-3">
                                    <Image width={18} height={18} className="mt-1" src="/icons/local.svg" alt="local" />
                                    <span className="text-base font-normal text-[#616161]">
                                        Tầng 12 Vincom Center, Đồng Khởi,
                                        <br /> Q.1, TP. Hồ Chí Minh
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center gap-3 mt-5">
                                    <Image width={18} height={18} src="/icons/Call.svg" alt="Call" />
                                    <span className="text-base font-normal text-[#616161]">+84 983 234 323</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center gap-3 mt-5">
                                    <Image width={18} height={18} src="/icons/gmail.svg" alt="gmail" />
                                    <span className="text-base font-normal text-[#616161]">chotdatnhanh@gmail.com</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-12 md:col-span-7 mt-2">
                        <div className="grid grid-cols-12 gap-5">
                            <div className="col-span-6 md:col-span-4">
                                <h2 className="text-lg font-semibold">Hướng Dẫn</h2>
                                <ul>
                                    <li className="text-base font-normal text-[#1A1A1A] mt-5 btn-link">Về chúng tôi</li>
                                    <li className="text-base font-normal text-[#1A1A1A] mt-5 btn-link">Báo giá & hỗ trợ</li>
                                    <li className="text-base font-normal text-[#1A1A1A] mt-5 btn-link">Câu hỏi thường găp</li>
                                    <li className="text-base font-normal text-[#1A1A1A] mt-5 btn-link">Góp ý báo lỗi</li>
                                </ul>
                            </div>
                            <div className="col-span-6 md:col-span-4">
                                <h2 className="text-lg font-semibold">Quy định</h2>
                                <ul>
                                    <li className="text-base font-normal text-[#1A1A1A] mt-5 btn-link">Quy định đăng tin</li>
                                    <li className="text-base font-normal text-[#1A1A1A] mt-5 btn-link">Quy chế hoạt động</li>
                                    <li className="text-base font-normal text-[#1A1A1A] mt-5 btn-link">Điều khoản thoả thuận</li>
                                    <li className="text-base font-normal text-[#1A1A1A] mt-5 btn-link">Chính sách bảo mật</li>
                                </ul>
                            </div>
                            <div className="col-span-12 md:col-span-4">
                                <h2 className="text-lg font-semibold">Đăng ký nhận tin</h2>
                                <form className="p-2  border border-gray-300 bg-white rounded-lg mt-5">
                                    <div className="flex">
                                        <input
                                            type="text"
                                            placeholder="Nhập Email của bạn"
                                            className="bg-transparent border-none w-full outline-none caret-[#9302f2] "
                                        />
                                        <button>
                                            <Image width={34} height={34} src="/icons/Button.svg" alt="Logo" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center sm:justify-between flex-wrap gap-3 py-5 border-t">
                    <div>
                        <p className="flex items-center gap-1 text-base font-normal text-[#757575]">
                            Chotdatnhanh <Image width={18} height={18} src="/icons/Group.svg" alt="Logo" />
                            2024
                            <Image width={4} height={4} src="/icons/Ellipse.svg" alt="Logo" /> Version 2.4
                        </p>
                    </div>
                    <div className="flex items-center gap-5">
                        <Image width={34} height={34} src="/icons/zl.svg" alt="zl" />
                        <Image width={34} height={34} src="/icons/yt.svg" alt="yt" />
                        <Image width={34} height={34} src="/icons/fb.svg" alt="fb" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
