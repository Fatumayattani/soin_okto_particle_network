import { useState, useEffect } from 'react';
import { Check, Wallet } from 'lucide-react';
import { walletEntryPlugin, EntryPosition } from '@particle-network/wallet';

export default function PricingPage() {
  const [walletConnected, setWalletConnected] = useState(false);

  const plans = [
    {
      name: 'Basic',
      price: '0.01 ETH',
      description: 'Perfect for getting started',
      features: [
        'Access to Community Forums',
        'Basic AI Chat Support',
        'Public Support Groups',
        'Resource Library Access',
      ],
    },
    {
      name: 'Premium',
      price: '0.05 ETH',
      description: 'Most popular choice',
      features: [
        'Everything in Basic',
        'Priority AI Support',
        'Private Support Groups',
        'Personalized Wellness Plan',
        'Monthly Virtual Events',
      ],
    },
    {
      name: 'Ultimate',
      price: '0.1 ETH',
      description: 'Complete wellness journey',
      features: [
        'Everything in Premium',
        '24/7 Priority Support',
        '1-on-1 Mentoring Sessions',
        'Exclusive Workshops',
        'Custom Resource Library',
        'Community Leadership Access',
      ],
    },
  ];

  useEffect(() => {
    // Wallet initialization should only happen once when the component mounts
    walletEntryPlugin.init(
      {
        projectId: import.meta.env.VITE_PROJECT_ID!,
        clientKey: import.meta.env.VITE_CLIENT_KEY!,
        appId: import.meta.env.VITE_APP_ID!,
      },
      {
        entryPosition: EntryPosition.BR, // Bottom Right
        visible: true, // Wallet icon visibility
        preload: true,
        themeType: 'light', // Optional: 'light' or 'dark'
      }
    );
  }, []);

  const connectWallet = async () => {
    try {
      // Open the Particle wallet when the button is clicked
      await walletEntryPlugin.walletEntryCreate();
      
      // Once the wallet is connected, set the wallet connection state to true
      setWalletConnected(true);
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  return (
    <div
      className="pt-24 px-4 sm:px-6 lg:px-8 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1591135108731-615592cf231b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Invest in Your Mental Wellness
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Choose the plan that best fits your journey. Connect your wallet to get started.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-pink-600 mb-2">
                  {plan.price}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <button
                  onClick={connectWallet} // Call connectWallet on button click
                  className="w-full flex items-center justify-center space-x-2 bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors"
                >
                  <Wallet className="h-5 w-5" />
                  <span>{walletConnected ? 'Wallet Connected' : 'Connect Wallet'}</span>
                </button>
              </div>
              <div className="px-8 pb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-pink-600 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
