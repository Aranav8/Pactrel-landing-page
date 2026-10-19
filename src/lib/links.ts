// Signup is switched off until the app is ready to take new users.
// To switch it back on, set this to "https://app.pactrel.com/signup".
// While it's null, "Start free" buttons scroll to pricing and the plan
// buttons show "Opening soon".
export const SIGNUP_URL: string | null = null;

// A plan button's signup link. A paid plan rides along as ?plan=&cycle=, so the
// app sends them to checkout right after setup. Null while signup is off.
export function planSignupUrl(planName: string, cycle: "monthly" | "yearly"): string | null {
  if (!SIGNUP_URL) return null;
  const plan = planName.toLowerCase();
  if (plan === "free") return SIGNUP_URL;
  return `${SIGNUP_URL}?plan=${encodeURIComponent(plan)}&cycle=${cycle}`;
}

// Props for a "Start free" link: the signup page, or a scroll to pricing.
export function signupLinkProps() {
  if (SIGNUP_URL) return { href: SIGNUP_URL };
  return {
    href: "#pricing",
    onClick: (e: { preventDefault: () => void }) => {
      e.preventDefault();
      document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
    },
  };
}
