function Info() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Information
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Company Details */}
          <div className="bg-gray-50 rounded-lg p-6 shadow">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Company Details
            </h2>

            <div className="space-y-3">
              <p><span className="font-semibold">Company:</span> Beauty Store</p>
              <p><span className="font-semibold">Founded:</span> 2024</p>
              <p><span className="font-semibold">Industry:</span> Cosmetics & Skincare</p>
              <p><span className="font-semibold">Head Office:</span> New Delhi, India</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 rounded-lg p-6 shadow">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Contact Information
            </h2>

            <div className="space-y-3">
              <p><span className="font-semibold">Email:</span> support@beautystore.com</p>
              <p><span className="font-semibold">Phone:</span> +91 9876543210</p>
              <p><span className="font-semibold">Website:</span> www.beautystore.com</p>
              <p><span className="font-semibold">Support:</span> Mon - Fri (9 AM - 6 PM)</p>
            </div>
          </div>

        </div>

        {/* About */}
        <div className="mt-10 bg-gray-50 rounded-lg p-6 shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            About Us
          </h2>

          <p className="text-gray-600 leading-7">
            Beauty Store offers a wide range of skincare, makeup, and beauty
            products. Our goal is to provide high-quality products at affordable
            prices while ensuring an excellent shopping experience for every
            customer.
          </p>
        </div>

        {/* Services */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Our Services
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

            <div className="bg-white border rounded-lg shadow p-5 text-center hover:shadow-lg">
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="font-semibold">Fast Delivery</h3>
            </div>

            <div className="bg-white border rounded-lg shadow p-5 text-center hover:shadow-lg">
              <div className="text-4xl mb-3">💳</div>
              <h3 className="font-semibold">Secure Payment</h3>
            </div>

            <div className="bg-white border rounded-lg shadow p-5 text-center hover:shadow-lg">
              <div className="text-4xl mb-3">🎁</div>
              <h3 className="font-semibold">Best Offers</h3>
            </div>

            <div className="bg-white border rounded-lg shadow p-5 text-center hover:shadow-lg">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="font-semibold">24/7 Support</h3>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Info;