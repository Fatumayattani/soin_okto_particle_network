import { Check, Wallet } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      name: 'Basic',
      price: '0.01 ETH',
      description: 'Perfect for getting started',
      features: [
        'Access to Community Forums',
        'Basic AI Chat Support',
        'Public Support Groups',
        'Resource Library Access'
      ]
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
        'Monthly Virtual Events'
      ]
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
        'Community Leadership Access'
      ]
    }
  ];

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-rose-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Invest in Your Health & Empowerment
</h1>
<p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose a plan that supports your wellness goals. Connect your wallet to begin your journey.
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
                <div className="text-4xl font-bold text-rose-600 mb-2">
                  {plan.price}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <button className="w-full flex items-center justify-center space-x-2 bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors">
                  <Wallet className="h-5 w-5" />
                  <span>Connect Wallet</span>
                </button>
              </div>
              <div className="px-8 pb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-rose-600 mt-0.5" />
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