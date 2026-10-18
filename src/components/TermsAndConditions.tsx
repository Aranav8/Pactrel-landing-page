// Update LAST_UPDATED whenever the text below changes.
const LAST_UPDATED = "October 18, 2026";

const h2 = "text-2xl font-medium text-white pt-4";
const list = "list-disc pl-5 space-y-2";

export function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-black text-[#FFF3F0]/80 pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-5xl font-medium text-white mb-12">Terms and Conditions</h1>

        <p>Last updated: {LAST_UPDATED}</p>

        <div className="space-y-6">
          <h2 className={h2}>1. Agreement to Terms</h2>
          <p>
            These Terms are an agreement between you and Pactrel ("we," "our," or "us"). By creating an account or otherwise using Pactrel's website, app or client portals (the "Service"), you agree to these Terms. If you use the Service on behalf of a business, you agree to them for that business. If you do not agree, do not use the Service.
          </p>

          <h2 className={h2}>2. Description of Service</h2>
          <p>
            Pactrel provides white-label client portals for freelancers and small studios. A customer sends their client one link, through which the client can review and accept a proposal, sign an agreement electronically, see payment requests (deposits, instalments and invoices), submit a brief, and follow the project through files, messages, deliverables and approvals, and a shared calendar.
          </p>
          <p>
            Pactrel does not process, hold or transfer money between customers and their clients (see section 6).
          </p>

          <h2 className={h2}>3. Eligibility, Accounts and Security</h2>
          <p>
            You must be at least 18 years old, and able to form a binding contract, to create an account. You must provide accurate, complete and current information, and keep it up to date.
          </p>
          <p>
            You can sign in with a password or with Google, and you can turn on two-factor authentication (on the Pro and Agency plans, a workspace owner can require it for the team). You are responsible for keeping your sign-in details secure, for everything that happens under your account, and for the actions of team members you invite to your workspace. Tell us at hello@pactrel.com straight away if you think your account has been compromised.
          </p>

          <h2 className={h2}>4. Plans and Limits</h2>
          <p>
            Pactrel offers a Free plan and paid plans (Starter, Pro and Agency). Each plan has limits, such as the number of projects you can send or have active, storage, saved templates, seats and brands, and some features are only available on certain plans. The current limits and features are shown on our pricing page. The Free plan allows 3 projects sent in total, including projects sent while you were on a paid plan, and portals on the Free plan show a "Powered by Pactrel" badge.
          </p>

          <h2 className={h2}>5. Subscriptions, Billing, and Cancellation</h2>
          <p>
            Paid plans are billed monthly or yearly and renew automatically until cancelled. Subscriptions are sold by our payment provider, Dodo Payments, which acts as merchant of record. When you buy a subscription, you are buying it from Dodo Payments, and its terms, including how it handles refunds, taxes and payment disputes, apply to that purchase.
          </p>
          <p>
            You can cancel at any time from your account. When you cancel, you keep your paid plan until the end of the period you have already paid for. If a renewal payment fails, you keep your plan for a 7-day grace period while the payment is retried or updated.
          </p>
          <p>
            When a paid plan ends (because it was cancelled, expired, paused or not paid after the grace period), your workspace moves to the Free plan. Nothing is deleted:
          </p>
          <ul className={list}>
            <li>Projects you have already sent stay live, and your clients can still open and use them.</li>
            <li>You can only send new projects within the Free plan's limit of 3 projects sent in total, which counts projects sent on a paid plan.</li>
            <li>The "Powered by Pactrel" badge returns, and paid features switch off, including automatic reminders, recurring invoices, change orders, analytics and your custom domain.</li>
            <li>The Free plan's storage and template limits apply again.</li>
          </ul>
          <p>
            We still recommend keeping your own copies of important files and agreements. You can export your data at any time (see section 11).
          </p>
          <p>
            <strong>Founding price.</strong> The first customers to subscribe (the number is shown on the pricing page and in the app) pay a lower founding price. It belongs to the workspace you subscribed with and stays with that workspace while it stays subscribed, including when you change between paid plans (you pay the founding price for the new plan) and while your subscription is paused. It does not apply to any other workspace.
          </p>

          <h2 className={h2}>6. Payments Between You and Your Clients</h2>
          <p>
            Clients pay you directly, by bank transfer or through a payment link you own (for example your own Stripe payment link, PayPal.me or a Wise request). Pactrel only shows your payment requests in the portal and records when you mark a payment as received. Pactrel is not a party to these payments, does not receive, hold or confirm them, and charges no transaction fees on them.
          </p>
          <p>
            You are solely responsible for the payment methods you provide, for any terms of those payment providers, and for any non-payment, refunds, chargebacks, taxes or disputes between you and your clients.
          </p>

          <h2 className={h2}>7. Electronic Signatures and Agreements</h2>
          <p>
            Pactrel records agreements between you and your clients. It is not a party to any agreement, does not verify the identity or authority of anyone signing, and does not advise on whether an agreement is enforceable. Those are matters for you, your clients and your own advisers. In particular:
          </p>
          <ul className={list}>
            <li>You are responsible for the contents of the proposals, agreements and other documents you send, whether you upload your own or use wording Pactrel provides.</li>
            <li>We do not guarantee the enforceability or legal validity of any agreement signed through the Service. You should seek your own legal advice.</li>
            <li>Signing in Pactrel is a simple electronic signature, meant for service agreements between businesses and their clients. Do not use it for documents that the law where you or your client are requires to be signed on paper or with a certified digital signature (in many countries, for example, property transfers, powers of attorney, wills and trusts).</li>
            <li>We keep a record of each signature as described in our <a href="/privacy" className="underline underline-offset-2 hover:text-white">Privacy Policy</a>, including after you or your client stop using Pactrel.</li>
          </ul>

          <h2 className={h2}>8. Clients and Client Portals</h2>
          <p>
            Your clients use portals without creating an account. Access is through the portal link, and a one-time code sent to the client's email may be required for sensitive steps. When a client signs in a portal, they are first shown a consent disclosure explaining that they are agreeing to complete the agreement electronically, what record is kept, and how to ask you for a paper copy or another way to sign. Signing in a portal is governed by that disclosure as shown at the time of signing.
          </p>
          <p>
            You are responsible for your clients' personal data that you collect through Pactrel, including having a lawful basis to collect and use it and giving your clients any notices the law requires. We handle that data on your behalf as described in our Privacy Policy and our <a href="/dpa" className="underline underline-offset-2 hover:text-white">Data Processing Agreement</a>, which is part of these Terms. You are also responsible for your clients' use of the portals you send them.
          </p>

          <h2 className={h2}>9. Acceptable Use</h2>
          <p>You agree not to use the Service to:</p>
          <ul className={list}>
            <li>send spam or unsolicited messages, or contact people who have not agreed to deal with you;</li>
            <li>upload, send or store content that is illegal, fraudulent, harmful, or infringes anyone's rights;</li>
            <li>send documents, files or other material you have no right to send;</li>
            <li>impersonate anyone or misrepresent your identity or authority;</li>
            <li>attempt to break, overload, probe or get around the security or limits of the Service, or access other customers' data.</li>
          </ul>

          <h2 className={h2}>10. Content Ownership</h2>
          <p>
            You retain ownership of all content you and your clients submit through Pactrel, including proposals, agreements, briefs and uploaded files. We do not claim ownership over this content. You give us permission to host, store, copy, display and transmit it only as needed to provide and secure the Service for you. You are responsible for ensuring you have the right to collect, store and send this content.
          </p>

          <h2 className={h2}>11. Data Export and Account Deletion</h2>
          <p>
            You can export your workspace data at any time in the app (Settings → Data), and delete your account in Settings. Deleting your account removes your login. Signatures and their evidence are kept as described in our Privacy Policy, and work you did in someone else's workspace passes to that workspace's owner.
          </p>

          <h2 className={h2}>12. Suspension and Termination</h2>
          <p>
            You can stop using the Service at any time. We may suspend or terminate your access, or remove content, if you breach these Terms, if your use creates a security or legal risk for Pactrel, our customers or their clients, or if we are required to by law. Where reasonable, we will tell you first and give you a chance to fix the problem and export your data. If we stop providing the Service as a whole, we will give customers reasonable notice.
          </p>

          <h2 className={h2}>13. Disclaimer of Warranties</h2>
          <p>
            The Service is provided "as is" and "as available". To the fullest extent the law allows, we make no warranties of any kind, whether express or implied, including warranties of merchantability, fitness for a particular purpose, non-infringement, or that the Service will be uninterrupted, secure or error-free.
          </p>

          <h2 className={h2}>14. Limitation of Liability</h2>
          <p>
            To the fullest extent the law allows, Pactrel will not be liable for any indirect, incidental, special, consequential or punitive damages, or for any loss of profits, revenue, data, use or goodwill, arising out of or related to the Service or these Terms. Our total liability for all claims arising out of or related to the Service or these Terms is limited to the amount you paid for the Service in the 12 months before the event giving rise to the claim. Nothing in these Terms limits liability that cannot be limited by law.
          </p>

          <h2 className={h2}>15. Governing Law and Venue</h2>
          <p>
            These Terms, and any dispute arising out of or related to them or the Service, are governed by the laws of [JURISDICTION], without regard to its conflict of law rules. The courts of [JURISDICTION] have exclusive jurisdiction over any such dispute, except where the law of your country of residence gives you the right to bring a claim in your local courts.
          </p>

          <h2 className={h2}>16. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. When we do, we update the date at the top, and we will give notice of significant changes by email or in the app before they take effect. By continuing to use the Service after the changes take effect, you agree to the updated Terms.
          </p>

          <h2 className={h2}>17. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at hello@pactrel.com.
          </p>
        </div>
      </div>
    </div>
  );
}
