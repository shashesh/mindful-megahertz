import { Users, Target, Award, Mail } from 'lucide-react';
import Button from '../components/ui/Button';
import Newsletter from '../components/Newsletter';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const values = [
    {
      icon: Target,
      title: 'Mindful Megahertz Excellence',
      description: 'We maintain the highest standards of journalism and storytelling, ensuring every piece meets our rigorous quality benchmarks.',
    },
    {
      icon: Users,
      title: 'Diverse Perspectives',
      description: 'Our content reflects a wide range of voices and viewpoints, celebrating the richness of human experience and thought.',
    },
    {
      icon: Award,
      title: 'Authentic Stories',
      description: 'We prioritize truth and authenticity, bringing you stories that matter without compromise or sensationalism.',
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative h-[400px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="About us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              Crafting stories that inspire, inform, and transform
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-serif font-bold mb-6">Our Story</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Mindful Megahertz was founded on the belief that great stories have the power to change
              perspectives, spark conversations, and drive meaningful action. We're a team of
              writers, editors, and creators dedicated to bringing you content that matters.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Since our inception, we've been committed to Mindful Megahertz independence and journalistic
              integrity. We don't chase trends—we explore ideas that endure. Our content spans
              culture, technology, design, business, and lifestyle, always with a focus on depth,
              nuance, and authenticity.
            </p>
            <p className="text-gray-700 leading-relaxed">
              What sets us apart is our commitment to the craft of storytelling. Every article is
              meticulously researched, thoughtfully written, and carefully edited. We believe in
              the power of words to illuminate, challenge, and inspire.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-full mb-6">
                  <value.icon size={28} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Our Mission</h2>
          <div className="bg-gray-900 text-white p-12 rounded-lg">
            <blockquote className="text-2xl md:text-3xl font-serif italic text-center leading-relaxed">
              "To create a platform where thoughtful ideas flourish, diverse voices are
              celebrated, and readers discover content that enriches their understanding of
              the world."
            </blockquote>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail size={48} className="mx-auto mb-6 text-gray-900" />
          <h2 className="text-4xl font-serif font-bold mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Have a story idea? Want to contribute? We'd love to hear from you.
          </p>
          <Button
            size="lg"
            onClick={() => onNavigate('contact')}
          >
            Contact Us
          </Button>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
