// Update LAST_UPDATED whenever the text below changes.
const LAST_UPDATED = "October 18, 2026";

const h2 = "text-2xl font-medium text-white pt-4";
const h3 = "text-lg font-medium text-white";
const list = "list-disc pl-5 space-y-2";

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-[#FFFFFF]/80 pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-5xl font-medium text-white mb-12">Privacy Policy</h1>

        <p>Last updated: {LAST_UPDATED}</p>

        <div className="space-y-6">
          <h2 className={h2}>1. Who we are and what this policy covers</h2>
          <p>
            Pactrel ("we," "our," or "us") provides white-label client portals for freelancers and small studios. This policy explains what personal data we handle and why, across our website (pactrel.com), our app (app.pactrel.com) and the client portals our customers send.
          </p>
          <p>
            Two kinds of people use Pactrel, and our role is different for each:
          </p>
          <ul className={list}>
            <li><strong>Freelancers and their team members</strong> ("customers") create accounts and workspaces. For their account data, Pactrel is the <strong>controller</strong>.</li>
            <li><strong>Their clients</strong> use the portals a customer sends them, without creating an account. For the client data inside a portal (names, emails, briefs, files, messages, signatures), the <strong>customer is the controller</strong> and Pactrel is the <strong>processor</strong>, handling that data on the customer's behalf and following their instructions.</li>
          </ul>
          <p>
            If you are a client and want to access, correct or delete your information in a portal, please contact the freelancer or studio who sent it to you. We will help them respond. Our data processing terms for customers are in our <a href="/dpa" className="underline underline-offset-2 hover:text-white">Data Processing Agreement</a>.
          </p>

          <h2 className={h2}>2. Data we collect about customers</h2>
          <ul className={list}>
            <li><strong>Account data:</strong> your name, email address, and password or Google sign-in details (if you choose to sign in with Google, we receive your basic profile information, such as your name and email address, from Google). If you turn on two-factor authentication, we store what is needed to verify it.</li>
            <li><strong>Workspace data:</strong> your business name, branding, brands, team members, templates, and the projects, proposals, agreements and invoices you create.</li>
            <li><strong>Billing data:</strong> your plan, billing period and subscription status. Subscriptions are sold by Dodo Payments as merchant of record. Dodo Payments collects your payment details, and we never see or store your card details.</li>
            <li><strong>Security and technical data:</strong> IP address, browser and device information, and a security log of sign-ins and account activity (such as role, billing and export events).</li>
            <li><strong>Usage data:</strong> how you use the app, collected with PostHog product analytics, and error reports collected with Sentry.</li>
          </ul>

          <h2 className={h2}>3. Data in client portals</h2>
          <p>
            When a customer sends a portal, we store what the customer and their client put into it on the customer's behalf: the client's name and email address, the proposal and agreement, the brief, files, messages, deliverables and approvals, calendar entries, invoices, and payment records.
          </p>
          <p>
            Clients access a portal through its link. For sensitive steps, a client may be asked for a one-time code sent to their email address, and we keep a record of that verification.
          </p>

          <h3 className={h3}>Electronic signatures</h3>
          <p>
            Each signature made in a portal stores the evidence needed to show who agreed to what, and when:
          </p>
          <ul className={list}>
            <li>the typed name, legal name and the drawn signature image;</li>
            <li>a SHA-256 hash of the exact agreement text that was signed;</li>
            <li>the consent disclosure shown to the signer and its version;</li>
            <li>the time of signing, IP address and browser;</li>
            <li>how the signer was identified (by portal link, or by an email one-time code together with the verified email address);</li>
            <li>the project name, client name and portal address at the time of signing.</li>
          </ul>

          <h3 className={h3}>Payments between customers and their clients</h3>
          <p>
            Pactrel never processes, holds or touches money paid by clients. Clients pay the customer directly, by bank transfer or through a payment link the customer owns. Pactrel only records the amounts requested and when the customer marks a payment as received.
          </p>

          <h2 className={h2}>4. Data we collect on our website</h2>
          <ul className={list}>
            <li><strong>Waitlist:</strong> your email address and the plan and billing period you chose. We store this as a contact in our email provider, Resend, and send a notification to our own inbox and a confirmation to you. To be removed from the waitlist, email hello@pactrel.com.</li>
            <li><strong>Contact form:</strong> your email address and your message, which are delivered to our inbox through Resend so we can reply. We do not send a copy back to the address entered.</li>
            <li><strong>Analytics:</strong> only if you click "Accept" on the cookie banner, we load Microsoft Clarity, which records how you use the site (including clicks, scrolling and session recordings) along with your IP address, browser and device information. If you decline or ignore the banner, Clarity is not loaded.</li>
          </ul>

          <h2 className={h2}>5. Cookies and similar technologies</h2>
          <ul className={list}>
            <li><strong>Website:</strong> we store your cookie choice in your browser's local storage. If you accept, Microsoft Clarity sets its own cookies (such as <code>_clck</code> and <code>_clsk</code>) to recognise repeat visits and group page views into sessions. To change your choice, clear this site's data in your browser and the banner will appear again.</li>
            <li><strong>App and portals:</strong> we use cookies that are necessary to keep you signed in and to keep the service secure, and PostHog for product analytics in the app.</li>
          </ul>

          <h2 className={h2}>6. How we use personal data and our legal bases</h2>
          <ul className={list}>
            <li>To provide the service, including hosting portals, recording signatures and sending emails on a customer's behalf (performance of our contract with the customer).</li>
            <li>To run the waitlist, answer messages and send service emails (our legitimate interests, or steps you asked us to take).</li>
            <li>To keep the service secure, prevent abuse and fix errors (our legitimate interests).</li>
            <li>To understand how the website and app are used and improve them (your consent for website analytics; our legitimate interests for product analytics in the app).</li>
            <li>To keep billing and tax records and meet other legal obligations (legal obligation).</li>
          </ul>
          <p>We do not sell personal data, and we do not use client portal data for our own marketing.</p>

          <h2 className={h2}>7. Service providers (processors)</h2>
          <p>We share personal data only with providers that help us run Pactrel:</p>
          <ul className={list}>
            <li><strong>Vercel:</strong> hosting for the website and app.</li>
            <li><strong>Supabase:</strong> database, authentication and file storage.</li>
            <li><strong>Resend:</strong> email delivery.</li>
            <li><strong>Upstash:</strong> rate limiting.</li>
            <li><strong>Sentry:</strong> error monitoring in the app.</li>
            <li><strong>PostHog:</strong> product analytics in the app.</li>
            <li><strong>Microsoft Clarity:</strong> website analytics, only after you accept.</li>
            <li><strong>Dodo Payments:</strong> subscription billing for Pactrel plans, as merchant of record.</li>
            <li><strong>Cloudflare:</strong> serving portals on customers' own domains.</li>
            <li><strong>Google:</strong> optional sign-in with Google.</li>
          </ul>

          <h2 className={h2}>8. International transfers</h2>
          <p>
            Our providers may store or process data in countries other than yours, including the United States. Where the law requires it, we rely on appropriate safeguards for these transfers, such as the European Commission's standard contractual clauses.
          </p>

          <h2 className={h2}>9. How long we keep data</h2>
          <ul className={list}>
            <li><strong>Signatures and their evidence</strong> are kept for at least 7 years from signing. They are not deleted when the customer or the client stops using Pactrel, because both rely on this evidence if a dispute arises. Requests to erase them are declined while they are needed to establish, exercise or defend legal claims (GDPR Article 17(3)(e)), unless a court orders deletion or both parties to the agreement agree.</li>
            <li><strong>The security log</strong> is kept for 400 days.</li>
            <li><strong>Copies of emails we send</strong> are kept for 30 days after delivery, or 90 days if delivery failed.</li>
            <li><strong>Email verification codes</strong> that are never used are deleted 30 days after they expire. Used codes are kept as part of the signature they verified.</li>
            <li><strong>Projects, messages, files and payment records</strong> are kept while the workspace exists. Deleting a project or a workspace hides it; it is not yet removed automatically. Contact hello@pactrel.com if you need it removed.</li>
            <li><strong>Deleted files:</strong> when a file is deleted, its stored copy is removed straight away.</li>
            <li><strong>Deleting an account</strong> removes your login. Any work you did in someone else's workspace passes to that workspace's owner.</li>
            <li><strong>Billing records</strong> are kept as required for tax and accounting.</li>
            <li><strong>Waitlist and contact form data</strong> are kept until you ask us to remove them or we no longer need them.</li>
          </ul>

          <h2 className={h2}>10. Your rights</h2>
          <p>
            Depending on where you live, you may have the right to access, correct, delete, restrict or object to the use of your personal data, to receive a copy of it, and to withdraw consent at any time. Customers can export their data themselves in the app (Settings → Data) and delete their account in Settings. For anything else, contact us at hello@pactrel.com. We will respond within 30 days. You also have the right to complain to your local data protection authority.
          </p>
          <p>
            If you are a client of one of our customers, please send requests about portal data to that customer first (see section 1).
          </p>

          <h2 className={h2}>11. Minimum age</h2>
          <p>
            Pactrel is a business tool and is not meant for anyone under 18. We do not knowingly collect personal data from children.
          </p>

          <h2 className={h2}>12. Changes to this policy</h2>
          <p>
            When we change this policy, we update the date at the top. If a change is significant, we will let customers know by email or in the app before it takes effect.
          </p>

          <h2 className={h2}>13. Contact us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at hello@pactrel.com.
          </p>
        </div>
      </div>
    </div>
  );
}
