import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">Our Story</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          From a simple idea to a trusted e-commerce platform, learn about our journey 
          and the values that drive us forward.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-1 gap-12 mb-16">
        {/* Our Beginning */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Our Beginning</h2>
          </div>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              Founded in 2020 by a team of passionate entrepreneurs, E-Commerce Lite started 
              as a small project with a big vision: to make online shopping accessible, 
              enjoyable, and secure for everyone.
            </p>
            <p>
              Our founders, Alex Johnson and Sarah Chen, noticed a gap in the market for 
              a platform that combined quality products with exceptional customer service. 
              They believed that shopping online should be more than just transactions—it 
              should be an experience.
            </p>
            <p>
              What began as a modest online store has grown into a trusted platform serving 
              thousands of customers worldwide, all while staying true to our core values 
              of quality, transparency, and customer satisfaction.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Our Mission</h2>
          </div>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              We're on a mission to revolutionize online shopping by providing carefully 
              curated products, seamless user experiences, and unparalleled customer support.
            </p>
            <p>
              Every product in our collection is handpicked by our team to ensure it meets 
              our rigorous quality standards. We work directly with manufacturers and trusted 
              suppliers to bring you the best value without compromising on quality.
            </p>
            <p>
              Our commitment extends beyond just selling products. We're building a community 
              of satisfied customers who trust us for their shopping needs and recommend us 
              to friends and family.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-12">Meet Our Founders</h2>
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-8">
          <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg text-center">
            <div className="w-20 h-20 bg-linear-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              AJ
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Alex Johnson</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">CEO & Co-Founder</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              With over 10 years of experience in e-commerce and technology, Alex leads 
              our vision and strategic direction. His passion for innovation drives our 
              continuous improvement.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg text-center">
            <div className="w-20 h-20 bg-linear-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              SC
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Sarah Chen</h3>
            <p className="text-green-600 dark:text-green-400 font-medium mb-4">COO & Co-Founder</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Sarah brings extensive experience in operations and customer service. She 
              ensures that every aspect of our business delivers exceptional value to 
              our customers.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="grid grid-cols-3 sm:grid-cols-1 gap-8 mb-16">
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">💎</span>
          </div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">Quality First</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            We never compromise on quality. Every product is thoroughly vetted before 
            it reaches our customers.
          </p>
        </div>
        
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🤝</span>
          </div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">Customer Focus</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Our customers are at the heart of everything we do. Their satisfaction 
            is our ultimate measure of success.
          </p>
        </div>
        
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🌱</span>
          </div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">Continuous Growth</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            We're constantly evolving, learning, and improving to serve our customers 
            better every day.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
          Be part of our growing community and experience the difference that comes 
          from shopping with a company that truly cares.
        </p>
        <button
          onClick={() => window.location.href = '/products'}
          className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
        >
          Start Shopping Today
        </button>
      </div>
    </div>
  );
};

export default About;