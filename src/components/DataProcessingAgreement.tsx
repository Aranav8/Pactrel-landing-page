// Update LAST_UPDATED whenever the text below changes.
const LAST_UPDATED = "October 18, 2026";

const h2 = "text-2xl font-medium text-white pt-4";
const list = "list-disc pl-5 space-y-2";

/**
 * The Data Processing Agreement (GDPR Article 28), part of the Terms and accepted with them at
 * signup. Covers each term Article 28(3) requires. Have it reviewed by a lawyer before relying on it.
 */
export function DataProcessingAgreement() {
  return (
    <div className="min-h-screen bg-black text-[#FFFFFF]/80 pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-5xl font-medium text-white mb-12">Data Processing Agreement</h1>

        <p>Last updated: {LAST_UPDATED}</p>

        <div className="space-y-6">
          <h2 className={h2}>1. Who this agreement is between</h2>
          <p>
            This agreement is part of our <a href="/terms" className="underline underline-offset-2 hover:text-white">Terms and Conditions</a> and applies automatically when you create a Pactrel account. You (the "customer") are the <strong>controller</strong> of the personal data in the client portals you send. Pactrel is your <strong>processor</strong>, handling that data on your behalf. It covers processing under the EU and UK General Data Protection Regulation and similar laws. Where it and the Terms disagree about personal data, this agreement wins.
          </p>

          <h2 className={h2}>2. What we process, and why</h2>
          <ul className={list}>
            <li><strong>Subject matter and purpose:</strong> running client portals for you: proposals, agreements and their signatures, payment requests, briefs, files, messages, deliverables, the project calendar, and the emails that go with them.</li>
            <li><strong>Duration:</strong> for as long as you use Pactrel, then as set out in section 8.</li>
            <li><strong>People the data is about:</strong> your clients and the people they add to a portal, and your own team.</li>
            <li><strong>Kinds of data:</strong> names, email addresses, phone numbers, company details, anything you or your clients write or upload, signatures with their evidence (time, IP address, browser, a fingerprint of the signed text), and records of portal visits.</li>
            <li>Pactrel is not designed for special categories of data (such as health data). Don't ask clients to upload it.</li>
          </ul>

          <h2 className={h2}>3. Your instructions</h2>
          <p>
            We process the data only to provide Pactrel to you, as you use it and as the Terms describe. That is your documented instruction. If we're ever required by law to process it otherwise, we'll tell you first unless the law forbids it. If we believe an instruction breaks data protection law, we'll tell you.
          </p>

          <h2 className={h2}>4. Confidentiality and security</h2>
          <p>Everyone at Pactrel who can access the data is bound to keep it confidential. Our security measures include:</p>
          <ul className={list}>
            <li>encryption in transit (TLS) and at rest, through our hosting providers;</li>
            <li>database rules that keep each workspace's data separate from every other workspace's;</li>
            <li>client portal access only for people who prove they control the client's email address, with sign-in links stored only as hashes;</li>
            <li>private file storage, opened only through short-lived links;</li>
            <li>two-factor sign-in for customers, and a security log of sign-ins, role changes, exports and billing changes;</li>
            <li>error monitoring that strips personal data before it leaves the app.</li>
          </ul>

          <h2 className={h2}>5. Subprocessors</h2>
          <p>
            You give us general permission to use the service providers listed in section 7 of our <a href="/privacy" className="underline underline-offset-2 hover:text-white">Privacy Policy</a>. We'll update that list, and tell account owners by email, at least 14 days before adding or replacing one. You can object in that time; if we can't reasonably meet the objection, you can end your subscription and we'll refund the part you've paid for and not used. Each provider is bound by data protection terms at least as protective as these, and we stay responsible for them.
          </p>

          <h2 className={h2}>6. Helping you</h2>
          <ul className={list}>
            <li><strong>People's rights:</strong> you can view, correct, export and delete portal data in the app. If someone asks us directly, we'll pass the request to you and help you answer it.</li>
            <li><strong>Breaches:</strong> we'll tell you without undue delay, and in any case within 48 hours, after we become aware of a personal data breach affecting your data, with what we know and what we're doing about it.</li>
            <li><strong>Assessments:</strong> we'll give you the information you reasonably need for data protection impact assessments and consultations with a regulator.</li>
          </ul>

          <h2 className={h2}>7. International transfers</h2>
          <p>
            Some of our providers process data outside the UK and the European Economic Area. Where they do, the transfer is covered by an adequacy decision or by the European Commission's Standard Contractual Clauses (with the UK addendum where needed), which are incorporated into this agreement by reference.
          </p>

          <h2 className={h2}>8. When you leave</h2>
          <p>
            You can export your data at any time (Settings → Data). When you delete your account or workspace, we delete the portal data, and it leaves our backups as they expire. The one exception is signatures and their evidence, which are kept for at least 7 years because you and your clients may need them if an agreement is disputed, as set out in our Privacy Policy. You instruct us to keep them for that purpose.
          </p>

          <h2 className={h2}>9. Checking that we comply</h2>
          <p>
            We'll answer your reasonable written questions about how we meet this agreement, and make available the information needed to show it. If a regulator requires an audit, or our answers aren't enough, we'll agree a reasonable audit with you, at your cost, with notice and without access to other customers' data.
          </p>

          <h2 className={h2}>10. Contact</h2>
          <p>Questions about this agreement, or a signed copy for your records: hello@pactrel.com.</p>
        </div>
      </div>
    </div>
  );
}
