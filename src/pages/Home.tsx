import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';

const Home: React.FC = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Fast Delivery',
      description: 'Express shipping with real-time tracking. Get your orders delivered within 1-2 business days.'
    },
    {
      icon: '💎',
      title: 'Quality Assured',
      description: 'Every product is carefully selected and quality-checked to meet our high standards.'
    },
    {
      icon: '🛡️',
      title: 'Secure Shopping',
      description: 'Your data is protected with bank-level encryption and secure payment processing.'
    },
    {
      icon: '🌟',
      title: '24/7 Support',
      description: 'Round-the-clock customer support to assist you with any questions or concerns.'
    }
  ];

  const stats = [
    { value: '10K+', label: 'Happy Customers' },
    { value: '5K+', label: 'Products Available' },
    { value: '99%', label: 'Satisfaction Rate' },
    { value: '24/7', label: 'Customer Support' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-purple-900/20 rounded-3xl mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
            Premium Shopping Experience
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover curated collections of high-quality products with exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" className="text-lg px-8 py-4">
                🛍️ Shop Now
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                📖 Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Why Choose Us</h2>
          <p className="text-gray-600 dark:text-gray-300">We provide the best shopping experience with these key features</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
            >
              <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl text-white">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 text-center h-32 flex flex-col justify-center"
            >
              <div className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Shop?</h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers today.
        </p>
        <Link to="/products">
          <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
            Explore Products
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default Home;