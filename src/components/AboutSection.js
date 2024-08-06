import React from 'react';

const steps = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-12 h-12 text-neon-blue mx-auto"
      >
        <path
          fillRule="evenodd"
          d="M12 1.75a8.25 8.25 0 100 16.5 8.25 8.25 0 000-16.5zm0 1.5a6.75 6.75 0 110 13.5 6.75 6.75 0 010-13.5zM11.25 5.5a.75.75 0 011.5 0v5.25h2.25a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75V5.5z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: 'Register Yourself',
    description: 'Create an account to get started with our services.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-12 h-12 text-neon-blue mx-auto"
      >
        <path
          fillRule="evenodd"
          d="M7.72 7.72a6.75 6.75 0 019.56 9.56l-.942-.941a5.25 5.25 0 10-7.677-7.677l-.942-.941zM3.06 3.06a.75.75 0 011.061 0L21.94 20.94a.75.75 0 01-1.061 1.06L3.06 4.12a.75.75 0 010-1.061z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: 'Select the Plan',
    description: 'Choose the best recharge plan that suits your needs.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-12 h-12 text-neon-blue mx-auto"
      >
        <path
          fillRule="evenodd"
          d="M6.75 6a1.5 1.5 0 011.5-1.5h8.5a1.5 1.5 0 011.5 1.5v2.25H6.75V6zm-1.5 4.75v7.5h13.5v-7.5h-13.5zm8.25 3.75h2.25v-2.25H13.5v2.25zm-3.75 0h2.25v-2.25H9.75v2.25zm-3.75 0h2.25v-2.25H6v2.25zm0-3.75h2.25v-2.25H6v2.25zm3.75 0h2.25v-2.25H9.75v2.25zm3.75 0h2.25v-2.25H13.5v2.25z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: 'Make Payment',
    description: 'Complete the payment process to recharge your mobile.',
  },
];

const AboutSection = () => {
  return (
    <div className="bg-black py-8">
      <div className="container mx-auto text-center max-w-4xl px-4">
        <div className="rounded-box border-4 border-neon-blue p-6 mx-4">
          <h2 className="text-3xl font-bold mb-8 text-white">About Us</h2>
          <p className="text-lg text-white mb-8">
            Our Mobile Recharge App is designed to make recharging your mobile simple and fast. With our user-friendly interface, you can complete your mobile recharge in just a few steps. Whether you're at home or on the go, our app provides a seamless experience to ensure you never run out of talk time.
          </p>
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={index} className="step-container">
                {step.icon}
                <h3 className="step-title text-lg font-bold text-neon-blue mt-4">{step.title}</h3>
                <p className="step-description text-white mt-2">{step.description}</p>
                {index < steps.length - 1 && <div className="arrow"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
