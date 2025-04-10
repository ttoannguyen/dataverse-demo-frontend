import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import MapSection from '../components/MapSection';
import Card from '../components/Card';

const Home = () => {
  const [featuredCategories] = useState([
    { name: 'News', icon: '📰' },
    { name: 'Datasets', icon: '📊' },
    { name: 'Maps', icon: '🗺️' },
    { name: 'Stories', icon: '📖' }
  ]);

  const [recentPosts] = useState([
    {
      title: 'Mekong River Water Levels',
      country: '🇰🇭 Cambodia',
      tags: ['Environment', 'Water'],
      year: '2023',
      organization: 'Mekong River Commission',
      description: 'Latest data on water levels across the Mekong river system'
    },
    {
      title: 'Agricultural Production Report',
      country: '🇻🇳 Vietnam',
      tags: ['Agriculture', 'Economy'],
      year: '2023',
      organization: 'Ministry of Agriculture',
      description: 'Annual report on rice and crop production in the Mekong Delta'
    }
  ]);

  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />
      <main className="flex-grow px-12">
        {/* Hero Section */}
        <section className="py-12 px-4">
        <div className="w-full px-4">
          <h1 className="text-4xl font-bold text-center mb-6 max-w-6xl mx-auto">
              Dataverse CTU
            </h1>
            <div className="w-full max-w-2xl mx-auto mb-8 px-4">
              <SearchBar placeholder="Search datasets, news, maps..." />
            </div>
            <MapSection />
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-8 bg-gray-50">
        <div className="w-full px-4">
            <h2 className="text-2xl font-bold mb-6">Featured Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {featuredCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow hover:shadow-md transition duration-300 text-center"
                >
                  <span className="text-3xl mb-2 block">{category.icon}</span>
                  <h3 className="font-medium">{category.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-12 px-4">
        <div className="w-full px-4">
            <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentPosts.map((post, index) => (
                <Card key={index} {...post} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
