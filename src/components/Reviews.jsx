import { useEffect } from 'react';

const Reviews = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.commoninja.com/sdk/latest/commonninja.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) document.body.removeChild(existingScript);
    };
  }, []);

  return (
    <section id="reviews" className="bg-charcoal py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-cream text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="commonninja_component pid-c28ab60c-2f08-408c-83b6-9015654522ee"></div>
      </div>
    </section>
  );
};

export default Reviews;