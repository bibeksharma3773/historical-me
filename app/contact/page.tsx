import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Historical Me',
  description: 'Get in touch with the team at Historical Me.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-brand-dark mb-6">Contact Us</h1>
      <div className="prose lg:prose-xl text-slate-700">
        <p>
          We'd love to hear from you! Whether you have a question, feedback, or a suggestion, please feel free to reach out.
        </p>
        <p>
          For all inquiries, you can contact us via email. We do our best to respond to all messages within 48 hours.
        </p>
        <p className="mt-6">
          <strong>Email:</strong> <a href="mailto:contact@historicalme.example.com" className="text-brand-secondary hover:underline">contact@historicalme.example.com</a>
        </p>
        <p>
          Please note that this is a fictional contact address for this demonstration project.
        </p>
      </div>
    </div>
  );
}
