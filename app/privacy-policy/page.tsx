import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Historical Me',
  description: 'Read the privacy policy for the Historical Me application.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-brand-dark mb-6">Privacy Policy</h1>
      <div className="prose lg:prose-xl text-slate-700">
        <p><strong>Last Updated:</strong> August 29, 2025</p>
        
        <h2 className="text-2xl font-bold text-brand-dark mt-8">Introduction</h2>
        <p>
          Historical Me (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose information about you when you use our website.
        </p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8">Information We Collect</h2>
        <p>
          We collect very minimal information from our users. The only piece of data you actively provide is your birth year when you use our timeline generation service.
        </p>
        <ul>
            <li><strong>Birth Year:</strong> We use the birth year you provide solely to generate your personalized timeline. This information is sent to our server to process the request but is not stored, logged, or associated with any personal identifiers. Each request is stateless.</li>
            <li><strong>Usage Data:</strong> Like most websites, we may collect non-personally-identifying information that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. This is done to better understand how our visitors use the website.</li>
        </ul>

        <h2 className="text-2xl font-bold text-brand-dark mt-8">How We Use Information</h2>
        <p>
          The information we collect is used for the following purposes:
        </p>
        <ul>
            <li>To provide, operate, and maintain our website.</li>
            <li>To generate the personalized timeline as requested by you.</li>
            <li>To improve, personalize, and expand our website.</li>
            <li>To understand and analyze how you use our website.</li>
        </ul>

        <h2 className="text-2xl font-bold text-brand-dark mt-8">Third-Party Services</h2>
        <p>
          This website may use third-party advertising services like Google AdSense to display advertisements. These services may use cookies to serve ads based on a user&apos;s prior visits to this and other websites. You can opt out of personalized advertising by visiting Google&apos;s Ads Settings.
        </p>

        <h2 className="text-2xl font-bold text-brand-dark mt-8">Data Security</h2>
        <p>
          We do not store any personal information you provide. The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
        </p>
        
        <h2 className="text-2xl font-bold text-brand-dark mt-8">Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </p>
      </div>
    </div>
  );
}
