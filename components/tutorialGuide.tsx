"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";

type TutorialStep = {
  target: string;
  title: string;
  description: string;
};

type Tutorial = {
  id: string;
  steps: TutorialStep[];
};

type Spotlight = {
  top: number;
  left: number;
  width: number;
  height: number;
};

type Consent = "loading" | "unanswered" | "accepted" | "declined";

const consentStorageKey = "bytespace-tutorial-consent";
const completedStorageKey = "bytespace-completed-tutorials";

const tutorials: Record<string, Tutorial> = {
  home: {
    id: "home",
    steps: [
      {
        target: "home-heading",
        title: "Welcome to ByteSpace",
        description: "Start here to discover courses, build new skills, and learn about the creator community.",
      },
      {
        target: "home-search",
        title: "Start exploring",
        description: "This homepage search field is not connected yet. Use Courses or Creators in the navigation to browse and search.",
      },
      {
        target: "site-navigation",
        title: "Find your way around",
        description: "Use Courses to browse the catalog or Creators to explore instructor profiles.",
      },
      {
        target: "course-categories",
        title: "Explore by category",
        description: "Choose a category to narrow the featured courses to a subject you like.",
      },
      {
        target: "course-result",
        title: "Course cards at a glance",
        description: "Compare the course level, rating, and price. Open a course card to see its details.",
      },
      {
        target: "learning-paths",
        title: "Explore learning paths",
        description: "Browse the subject tiles for more learning areas and inspiration.",
      },
      {
        target: "growth-overview",
        title: "Grow your skills",
        description: "See how ByteSpace helps learners make progress and explore new professional opportunities.",
      },
      {
        target: "creator-tools",
        title: "Tools for course creators",
        description: "This section highlights ways creators can share expertise, build a community, and manage courses.",
      },
      {
        target: "creator-call-to-action",
        title: "Creator call to action",
        description: "This section introduces the creator opportunity. The Join as Creator button is not connected yet.",
      },
      {
        target: "community-stories",
        title: "Learn from the community",
        description: "Read learner and creator stories to hear what people value about the ByteSpace experience.",
      },
      {
        target: "testimonial-cards",
        title: "Community testimonials",
        description: "Browse individual perspectives from learners and creators in the ByteSpace community.",
      },
    ],
  },
  courses: {
    id: "courses",
    steps: [
      {
        target: "course-search",
        title: "Search the catalog",
        description: "Search by course title, creator, or category.",
      },
      {
        target: "course-filters",
        title: "Refine your results",
        description: "Filter by level or category, then sort by price or rating.",
      },
      {
        target: "course-categories",
        title: "Browse a subject",
        description: "Use the category buttons to quickly focus on a learning area.",
      },
      {
        target: "course-result",
        title: "Compare courses",
        description: "Course cards summarize the level, rating, and price. Select View Course for the full overview.",
      },
    ],
  },
  creators: {
    id: "creators",
    steps: [
      {
        target: "creator-search",
        title: "Search creators",
        description: "Find an instructor by name, role, or bio.",
      },
      {
        target: "creator-result",
        title: "Meet a creator",
        description: "Creator cards introduce each instructor. Choose View Profile to see their bio and courses.",
      },
    ],
  },
  courseDetail: {
    id: "course-detail",
    steps: [
      {
        target: "course-title",
        title: "Course overview",
        description: "Start with the course name and creator to confirm you are viewing the right course.",
      },
      {
        target: "course-pricing",
        title: "Review the course details",
        description: "Check the listed price and course length before deciding whether it suits you.",
      },
      {
        target: "course-tabs",
        title: "Explore the content",
        description: "Switch between About, Lessons, and Reviews to learn more about the course.",
      },
    ],
  },
  creatorProfile: {
    id: "creator-profile",
    steps: [
      {
        target: "creator-overview",
        title: "Creator profile",
        description: "Read the creator's role and bio to learn about their background and focus.",
      },
      {
        target: "course-categories",
        title: "Browse their courses",
        description: "Filter this creator's courses by subject.",
      },
      {
        target: "course-result",
        title: "Creator's course collection",
        description: "Only courses attributed to this creator are shown here. Open a course card to see its details.",
      },
    ],
  },
  account: {
    id: "account",
    steps: [
      {
        target: "auth-details",
        title: "Your account details",
        description: "Enter your information in the labeled fields whenever you are ready to sign in or register.",
      },
      {
        target: "auth-switch",
        title: "Switch account pages",
        description: "Use this link to move between the sign-in and registration pages.",
      },
    ],
  },
};

function getTutorialForPath(pathname: string): Tutorial | undefined {
  if (pathname === "/home") return tutorials.home;
  if (pathname === "/course") return tutorials.courses;
  if (pathname.startsWith("/course/")) return tutorials.courseDetail;
  if (pathname === "/creators") return tutorials.creators;
  if (pathname.startsWith("/creators/") || pathname === "/profile") return tutorials.creatorProfile;
  if (pathname === "/login" || pathname === "/register") return tutorials.account;
  return undefined;
}

function tutorialStorageError() {
  return "Your browser blocked tutorial preferences. You can still use the tutorial during this visit.";
}

export default function TutorialGuide() {
  const pathname = usePathname();
  const [consent, setConsent] = useState<Consent>("loading");
  const [activeTutorial, setActiveTutorial] = useState<Tutorial | null>(null);
  const [steps, setSteps] = useState<TutorialStep[]>([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [spotlight, setSpotlight] = useState<Spotlight | null>(null);
  const [storageNotice, setStorageNotice] = useState("");
  const completedTutorials = useRef(new Set<string>());
  const acceptButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const tutorialWasVisible = useRef(false);
  const visibleTutorial = activeTutorial?.id === getTutorialForPath(pathname)?.id
    ? activeTutorial
    : null;

  useEffect(() => {
    let loadedConsent: Consent = "unanswered";
    let loadedTutorialIds: string[] = [];
    let notice = "";

    try {
      const savedConsent = window.localStorage.getItem(consentStorageKey);
      loadedConsent = savedConsent === "accepted" || savedConsent === "declined" ? savedConsent : "unanswered";

      const savedTutorials = window.localStorage.getItem(completedStorageKey);
      if (savedTutorials) {
        const parsedTutorials: unknown = JSON.parse(savedTutorials);
        if (Array.isArray(parsedTutorials) && parsedTutorials.every((tutorialId) => typeof tutorialId === "string")) {
          loadedTutorialIds = parsedTutorials;
        } else {
          notice = "Saved tutorial history was invalid and has been ignored.";
        }
      }
    } catch {
      notice = tutorialStorageError();
    }

    const timer = window.setTimeout(() => {
      completedTutorials.current = new Set(loadedTutorialIds);
      setConsent(loadedConsent);
      if (notice) setStorageNotice(notice);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const startTutorial = useCallback((tutorial = getTutorialForPath(pathname)) => {
    if (!tutorial) return false;

    const availableSteps = tutorial.steps.filter((step) =>
      document.querySelector(`[data-tutorial="${step.target}"]`),
    );
    if (availableSteps.length === 0) return false;

    setSteps(availableSteps);
    setStepIndex(0);
    setSpotlight(null);
    setActiveTutorial(tutorial);
    return true;
  }, [pathname]);

  useEffect(() => {
    if (consent !== "accepted") return;
    const tutorial = getTutorialForPath(pathname);
    if (!tutorial || completedTutorials.current.has(tutorial.id)) return;

    const timer = window.setTimeout(() => startTutorial(tutorial), 0);
    return () => window.clearTimeout(timer);
  }, [consent, pathname, startTutorial]);

  useEffect(() => {
    if (consent === "unanswered") {
      acceptButtonRef.current?.focus();
    }
  }, [consent]);

  useEffect(() => {
    if (visibleTutorial) {
      nextButtonRef.current?.focus();
    }
  }, [visibleTutorial, stepIndex]);

  useEffect(() => {
    if (tutorialWasVisible.current && !visibleTutorial) {
      launcherRef.current?.focus();
    }
    tutorialWasVisible.current = Boolean(visibleTutorial);
  }, [visibleTutorial]);

  useEffect(() => {
    if (!visibleTutorial || !steps[stepIndex]) return;

    const target = document.querySelector<HTMLElement>(
      `[data-tutorial="${steps[stepIndex].target}"]`,
    );
    if (!target) return;

    let frame = 0;
    let scrollTimer: number | undefined;
    const measureTarget = () => {
      const bounds = target.getBoundingClientRect();
      setSpotlight({
        top: bounds.top,
        left: bounds.left,
        width: bounds.width,
        height: bounds.height,
      });
    };
    const scheduleMeasurement = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(measureTarget);
    };

    const initialBounds = target.getBoundingClientRect();
    if (initialBounds.top < 100 || initialBounds.bottom > window.innerHeight - 100) {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
      scrollTimer = window.setTimeout(scheduleMeasurement, reduceMotion ? 0 : 700);
    } else {
      scheduleMeasurement();
    }

    window.addEventListener("scroll", scheduleMeasurement, { passive: true });
    window.addEventListener("resize", scheduleMeasurement);
    return () => {
      window.cancelAnimationFrame(frame);
      if (scrollTimer) window.clearTimeout(scrollTimer);
      window.removeEventListener("scroll", scheduleMeasurement);
      window.removeEventListener("resize", scheduleMeasurement);
    };
  }, [pathname, stepIndex, steps, visibleTutorial]);

  function savePreference(nextConsent: "accepted" | "declined") {
    try {
      window.localStorage.setItem(consentStorageKey, nextConsent);
    } catch {
      setStorageNotice(tutorialStorageError());
    }
    setConsent(nextConsent);
  }

  function finishTutorial() {
    if (activeTutorial) {
      completedTutorials.current.add(activeTutorial.id);
      try {
        window.localStorage.setItem(
          completedStorageKey,
          JSON.stringify(Array.from(completedTutorials.current)),
        );
      } catch {
        setStorageNotice(tutorialStorageError());
      }
    }
    setActiveTutorial(null);
    setSpotlight(null);
  }

  function advanceStep() {
    if (stepIndex + 1 < steps.length) {
      setStepIndex((currentIndex) => currentIndex + 1);
      return;
    }
    finishTutorial();
  }

  function moveToPreviousStep() {
    setStepIndex((currentIndex) => Math.max(0, currentIndex - 1));
  }

  function handleTutorialKeyDown(event: ReactKeyboardEvent<HTMLElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      finishTutorial();
      return;
    }

    if (event.key === "Tab") {
      const focusableElements = event.currentTarget.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    }
  }

  function handleConsentKeyDown(event: ReactKeyboardEvent<HTMLElement>) {
    if (event.key !== "Tab") return;

    const focusableElements = event.currentTarget.querySelectorAll<HTMLElement>(
      'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement?.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement?.focus();
    }
  }

  const currentStep = visibleTutorial ? steps[stepIndex] : undefined;
  const panelStyle = spotlight && typeof window !== "undefined"
    ? {
        width: `min(360px, calc(100vw - 24px))`,
        left: Math.max(
          12,
          Math.min(window.innerWidth - 372, spotlight.left + spotlight.width / 2 - 180),
        ),
        top: spotlight.top + spotlight.height + 244 < window.innerHeight
          ? spotlight.top + spotlight.height + 14
          : Math.max(12, spotlight.top - 244),
      }
    : undefined;

  return (
    <>
      {consent !== "loading" && consent !== "unanswered" && !visibleTutorial && (
        <button
          ref={launcherRef}
          type="button"
          onClick={() => startTutorial()}
          className="fixed bottom-4 right-4 z-[50] rounded-full bg-[#c8ff16] px-5 py-3 text-sm font-semibold text-[#111827] shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#003AE2] focus:ring-offset-2"
        >
          Take a tour
        </button>
      )}

      {storageNotice && (
        <p role="alert" className="fixed bottom-[76px] right-4 z-[50] max-w-[min(360px,calc(100vw-2rem))] rounded-lg bg-white px-4 py-3 text-xs text-[#555555] shadow-lg">
          {storageNotice}
        </p>
      )}

      {consent === "unanswered" && (
        <div className="pointer-events-none fixed bottom-4 right-4 z-[100] flex justify-end">
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="tutorial-consent-title"
            onKeyDown={handleConsentKeyDown}
            className="pointer-events-auto w-[min(400px,calc(100vw-2rem))] rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-[0_12px_40px_rgba(17,24,39,0.18)] sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-[#0757df]">ByteSpace guide</p>
            <h2 id="tutorial-consent-title" className="mt-2 text-2xl font-semibold text-[#111827]">
              Would you like a guided tour?
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#6f7682]">
              Short tips can show you how to explore courses and creators. The page may scroll to highlight useful areas. Tours are optional, and you can skip one at any time.
            </p>
            <div className="mt-6 flex flex-wrap justify-end gap-3">
              <button
                type="button"
                onClick={() => savePreference("declined")}
                className="rounded-full border border-[#d7dce2] px-5 py-3 text-sm font-medium text-[#4b4b4b] hover:bg-[#f5f5f6]"
              >
                No thanks
              </button>
              <button
                ref={acceptButtonRef}
                type="button"
                onClick={() => savePreference("accepted")}
                className="rounded-full bg-[#c8ff16] px-5 py-3 text-sm font-semibold text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#003AE2] focus:ring-offset-2"
              >
                Yes, show me around
              </button>
            </div>
          </section>
        </div>
      )}

      {visibleTutorial && currentStep && (
        <>
          {spotlight && (
            <div
              className="pointer-events-none fixed z-[61] rounded-xl border-[3px] border-[#c8ff16] shadow-[0_0_0_9999px_rgba(17,24,39,0.18),0_8px_24px_rgba(17,24,39,0.16)] transition-[top,left,width,height] duration-300 ease-out motion-reduce:transition-none"
              style={{
                top: spotlight.top - 5,
                left: spotlight.left - 5,
                width: spotlight.width + 10,
                height: spotlight.height + 10,
              }}
              aria-hidden="true"
            />
          )}
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="tutorial-step-title"
            aria-describedby="tutorial-step-description"
            onKeyDown={handleTutorialKeyDown}
            className="fixed z-[62] max-h-[calc(100vh-24px)] overflow-y-auto rounded-2xl bg-white p-5 text-[#222222] shadow-2xl transition-[top,left] duration-300 ease-out motion-reduce:transition-none sm:p-6"
            style={panelStyle}
          >
            <p className="text-[11px] font-semibold uppercase tracking-wide text-[#0757df]">
              {visibleTutorial.id.replaceAll("-", " ")} · Step {stepIndex + 1} of {steps.length}
            </p>
            <h2 id="tutorial-step-title" className="mt-2 text-xl font-semibold text-[#111827]">
              {currentStep.title}
            </h2>
            <p id="tutorial-step-description" className="mt-2 text-sm leading-6 text-[#6f7682]">
              {currentStep.description}
            </p>
            <div className="mt-5 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={finishTutorial}
                className="text-sm text-[#6f7682] underline underline-offset-2 hover:text-[#111827]"
              >
                Skip tour
              </button>
              <div className="flex gap-2">
                {stepIndex > 0 && (
                  <button
                    type="button"
                    onClick={moveToPreviousStep}
                    className="rounded-full border border-[#d7dce2] px-4 py-2 text-sm font-medium text-[#333333] hover:bg-[#f5f5f6]"
                  >
                    Back
                  </button>
                )}
                <button
                  ref={nextButtonRef}
                  type="button"
                  onClick={advanceStep}
                  className="rounded-full bg-[#c8ff16] px-4 py-2 text-sm font-semibold text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#003AE2] focus:ring-offset-2"
                >
                  {stepIndex + 1 === steps.length ? "Finish" : "Next"}
                </button>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
