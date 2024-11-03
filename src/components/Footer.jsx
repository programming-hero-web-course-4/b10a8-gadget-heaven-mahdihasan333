const Footer = () => {
  return (
    <footer className=" bg-white text-center py-20">
      <div className="flex flex-col container mx-auto">
        <div className="mb-4">
          <h3 className="text-3xl font-bold text-[#09080F] my-2">
            Gadget Heaven
          </h3>
          <p className="text-[rgba(9, 8, 15, 0.6)] font-medium">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <div className="divider my-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 text-[#09080F] ">
          <nav className="flex flex-col space-y-4">
            <h6 className="text-lg font-bold">Services</h6>
            <p className="text-gray-600 font-medium">Product Support</p>
            <p className="text-gray-600 font-medium">Order Tracking</p>
            <p className="text-gray-600 font-medium">Shipping & Delivery</p>
            <p className="text-gray-600 font-medium">Returns</p>
          </nav>
          <nav className="flex flex-col space-y-4">
            <h6 className="text-lg font-bold">Company</h6>
            <p className="text-gray-600 font-medium">About Us</p>
            <p className="text-gray-600 font-medium">Careers</p>
            <p className="text-gray-600 font-medium">Contact</p>
          </nav>
          <nav className="flex flex-col space-y-4">
            <h6 className="text-lg font-bold">Services</h6>
            <p className="text-gray-600 font-medium">Terms of Service</p>
            <p className="text-gray-600 font-medium">Privacy Policy</p>
            <p className="text-gray-600 font-medium">Cookie Policy</p>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
