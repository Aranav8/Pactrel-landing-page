// Where "Start free" and the plan buttons send people. Set it to null to switch
// signup off: "Start free" then scrolls to pricing and the plan buttons show
// "Opening soon".
export const SIGNUP_URL: string | null = "https://app.pactrel.com/signup";

// "Log in" for returning customers. Hidden while signup is off, since nobody has
// an account to log in to yet.
export const LOGIN_URL: string | null = SIGNUP_URL ? "https://app.pactrel.com/login" : null;

// Links into the app open in a new tab, so the landing page stays open.
export const NEW_TAB = { target: "_blank", rel: "noopener noreferrer" } as const;

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
  if (SIGNUP_URL) return { href: SIGNUP_URL, ...NEW_TAB };
  return {
    href: "#pricing",
    onClick: (e: { preventDefault: () => void }) => {
      e.preventDefault();
      document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
    },
  };
}
