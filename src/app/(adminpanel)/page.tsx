export default function Admin() {
  return (
    <>
      <div className="container mx-auto px-4 py-4">
        {/* Top Section */}
        <div className="bg-[#F1F0FF] py-8">
          <div className="text-center lg:text-left lg:ml-[300px]">
            <h2 className="text-[#101750] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
              Admin
            </h2>
            <p className="text-sm text-gray-600">
              Home. Pages. <span className="text-[#FB2E86]">Admin</span>
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Sidebar Section */}
          <div className="shadow-sm rounded-lg space-y-4 flex justify-center items-center">
            <img
              src="img/aboutus.png"
              alt="About Us"
              className="object-contain max-w-full h-auto"
            />
          </div>

          {/* FAQ Section */}
          <div>
            <div className="bg-white shadow-sm rounded-lg p-6 space-y-4">
              {[
                {
                  question: "Know About Our Ecomerce Business, History",
                  answer:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repellendus suscipit atque quo voluptas ratione magnam soluta.",
                },
              ].map((faq, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-lg text-[#151875] text-[18px] font-bold">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400">{faq.answer}</p>
                  <button className="px-6 py-2 border rounded text-white bg-[#FB2E86] hover:bg-[#FB2E86]/90">
                    Contact Us
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Features Section */}
        <div className="mt-12"></div>
      </div>
    </>
  );
}
