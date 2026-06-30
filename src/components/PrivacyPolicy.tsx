export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-[#FFF3F0]/80 pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-5xl font-medium text-white mb-12">Privacy Policy</h1>
        
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-medium text-white">1. Introduction</h2>
          <p>
            Welcome to Pactrel ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>

          <h2 className="text-2xl font-medium text-white">2. The data we collect about you</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
            <li><strong>Financial Data</strong> includes payment card details (processed securely by our payment providers, we do not store full card details).</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website, products and services (tracked via PostHog analytics).</li>
          </ul>

          <h2 className="text-2xl font-medium text-white">3. How we use your personal data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>

          <h2 className="text-2xl font-medium text-white">4. Analytics and Tracking</h2>
          <p>
            We use PostHog, a third-party analytics tool, to understand how users interact with our website and to improve the overall experience. PostHog may collect data such as your IP address, browser type, pages visited, and interactions on those pages (including session recordings). You can opt out of non-essential tracking via our cookie banner.
          </p>

          <h2 className="text-2xl font-medium text-white">5. Electronic Signatures</h2>
          <p>
            When utilizing our electronic signature features, we capture and store data necessary to create a legally binding signature audit trail, including your IP address, timestamp, and browser user agent.
          </p>

          <h2 className="text-2xl font-medium text-white">6. Data Retention</h2>
          <p>
            We retain your personal data for as long as your account remains active. If you close your account, we retain data for up to 90 days to allow for account recovery, after which it is permanently deleted, except where retention is required by law (e.g., financial transaction records, which may be retained longer for tax and compliance purposes).
          </p>

          <h2 className="text-2xl font-medium text-white">7. Your Rights</h2>
          <p>
            Depending on your location, you may have the right to access, correct, delete, or export your personal data. To exercise any of these rights, contact us at aranavk08@gmail.com. We will respond within 30 days.
          </p>

          <h2 className="text-2xl font-medium text-white">8. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at aranavk08@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
}
