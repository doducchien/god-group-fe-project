import Layout from "../../component/Layout";

const Footer = () => {
    return (
        <footer className="bg-white text-black pt-20 pb-10">
            <Layout>
                <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 border-l-4 border-red-500 pl-2">
                            Our Offices
                        </h3>
                        <div className="text-sm space-y-4">
                            <div>
                                <h4 className="font-semibold">Bac Ninh Head Office</h4>
                                <p>2th Floor, Viet Long Complex, 30 Ly Thai To Street, Ninh Xa Ward, Bac Ninh City, Bac Ninh Province, Viet Nam</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">Ha Noi Office</h4>
                                <p>No. 6, Lane 45 Tran Thai Tong, Cau Giay District, Ha Noi, Viet Nam</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">US Office</h4>
                                <p>30 N Gould St, Ste R, Sheridan, WY 82801</p>
                                <p>13894 South Bangerter Parkway Suite 200, Draper UT, 84020</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">Production Factory</h4>
                                <p>Hap Linh Industrial Cluster, Hap Linh Ward, Bac Ninh City, Bac Ninh Province, Viet Nam</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 border-l-4 border-red-500 pl-2">
                            Quick Link
                        </h3>
                        <ul className="text-sm space-y-2">
                            <li><a href="#" className="hover:text-red-400">Home</a></li>
                            <li><a href="#" className="hover:text-red-400">Products</a></li>
                            <li><a href="#" className="hover:text-red-400">Careers</a></li>
                            <li><a href="#" className="hover:text-red-400">About Us</a></li>
                            <li><a href="#" className="hover:text-red-400">Services</a></li>
                            <li><a href="#" className="hover:text-red-400">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 border-l-4 border-red-500 pl-2">
                            Contact us
                        </h3>
                        <div className="text-sm space-y-2">
                            <p>📞 +84 333 021 099</p>
                            <p>📧 contact@godgroup.com</p>
                            <p>🌐 www.godgroup.com</p>
                        </div>

                        <h3 className="text-lg font-semibold mt-6 mb-4 border-l-4 border-red-500 pl-2">
                            Facebook
                        </h3>
                        <div className="w-[200px] h-[80px] bg-white-800 flex items-center justify-center">
                        </div>
                    </div>
                </div>

                <div className="text-center text-xs mt-10 border-t border-gray-600 pt-4">
                    © 2024 GOD GROUP. All rights reserved.
                </div>
            </Layout>

        </footer>
    );
};

export default Footer;
