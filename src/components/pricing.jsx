import React from 'react';

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for getting started",
      price: "0",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month"
      ],
      buttonText: "Get Started Free",
      isFeatured: false,
    },
    {
      name: "Pro",
      description: "Best for professionals",
      price: "29",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics"
      ],
      buttonText: "Start Pro Trial",
      isFeatured: true, 
      badge: "Most Popular"
    },
    {
      name: "Enterprise",
      description: "For teams and businesses",
      price: "99",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding"
      ],
      buttonText: "Contact Sales",
      isFeatured: false,
    }
  ];

  return (
    <section className="container mx-auto px-4 lg:px-16 py-24">
      
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#111827]">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 text-[16px]">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {pricingPlans.map((plan, index) => (
          <div 
            key={index} 
            className={`relative p-10 rounded-[2.5rem] border ${
              plan.isFeatured 
              ? "bg-[#7C3AED] text-white border-[#7C3AED] shadow-2xl" 
              : "bg-white text-[#111827] border-gray-100 hover:shadow-xl py-10"
            }`}
          >
            
            {plan.badge && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#D97706] text-xs font-black px-5 py-2 rounded-full border-2 border-white shadow-md">
                {plan.badge}
              </span>
            )}

            <h3 className="text-2xl mb-2">{plan.name}</h3>
            <p className={`text-sm mb-8 ${plan.isFeatured ? "text-purple-100" : "text-gray-400"}`}>
              {plan.description}
            </p>

            <div className="mb-8 flex">
              <span className="text-5xl font-black">${plan.price}</span>
              <span className={`text-lg ${plan.isFeatured ? "text-purple-200" : "text-gray-400"}`}>
                /Month
              </span>
            </div>

        
            <ul className="space-y-4 mb-10">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm ">
                  <span className={`text-lg ${plan.isFeatured ? "text-white" : "text-[#7C3AED]"}`}>
                    ✓
                  </span>
                  <span className={plan.isFeatured ? "text-purple-50" : "text-gray-600"}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

        
            <button className={`w-full py-3 rounded-full font-bold text-[16px] transition-all active:scale-95 shadow-lg ${
              plan.isFeatured 
              ? "bg-white text-[#4F39F6] hover:bg-gray-100" 
              : "bg-[#7C3AED] text-white hover:bg-[#6D28D9]"
            }`}>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;