// Signup is switched off until the app is ready to take new users.
// To switch it back on, set this to "https://app.pactrel.com/signup".
// While it's null, "Start free" buttons scroll to pricing and the plan
// buttons show "Opening soon".
export const SIGNUP_URL: string | null = null;

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
