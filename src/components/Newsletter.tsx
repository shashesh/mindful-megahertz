import { useState } from 'react';
import { Mail } from 'lucide-react';
import Input from './ui/Input';
import Button from './ui/Button';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
          <Mail size={32} />
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          Stay Informed
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Get our latest stories, exclusive insights, and curated content delivered directly to your inbox.
        </p>

        {subscribed ? (
          <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-green-400 font-semibold">Thank you for subscribing!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button type="submit" className="whitespace-nowrap bg-white text-gray-900 hover:bg-gray-200">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
