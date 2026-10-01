# ByteSpace

ByteSpace is a course-discovery website built with Next.js. This guide explains where to find page content, how the reusable course components work, and what first-time visitors can expect from the guided tour.

## Start the website

Install the project dependencies and start the local development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To check the project before deployment, run:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Find your way around the site

| Page | What visitors can do |
| --- | --- |
| `/home` | Discover ByteSpace, featured courses, learning paths, creator information, and community testimonials. |
| `/course` | Search, filter, sort, and paginate through the course catalog. |
| `/course/[id]` | Read an individual course overview, lesson information, and reviews. |
| `/creators` | Search and browse creator cards. |
| `/creators/[id]` | Read a creator profile and browse courses attributed to that creator. |
| `/login` and `/register` | View the sign-in and registration forms. |
| `/profile` | View the demo profile for the first creator. |

The shared header and footer are added around pages by `app/layout.tsx`. The `/` route sends visitors to `/home`.

## Change page wording

Most interface wording is collected in small TypeScript files named `text-files`. This makes headings, descriptions, labels, and button text easier to find without searching through the layout and styling of a component.

For example, the home hero text is in [`app/home/text-files/firstBox.ts`](./app/home/text-files/firstBox.ts):

```ts
export const hero = {
  heading: ["Get Access to Hundreds", "Courses Available"],
  subheading: "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
  searchPlaceholder: "Course, topic, creators",
};
```

The hero component imports that content and displays it in the right places. To change the hero wording, edit the values in this text file; you usually do not need to edit the component or its styles.

### Text-file locations

| Content | Text file |
| --- | --- |
| Home hero | [`app/home/text-files/firstBox.ts`](./app/home/text-files/firstBox.ts) |
| Home course-discovery and learning-path headings | [`app/home/text-files/secondBox.ts`](./app/home/text-files/secondBox.ts) |
| Home growth overview, statistics, and creator benefits | [`app/home/text-files/thirdBox.ts`](./app/home/text-files/thirdBox.ts) |
| Home creator call to action | [`app/home/text-files/fourthBox.ts`](./app/home/text-files/fourthBox.ts) |
| Home testimonials | [`app/home/text-files/fifthBox.ts`](./app/home/text-files/fifthBox.ts) |
| Home partner-logo and learning-path labels | [`app/home/text-files/logoPage.ts`](./app/home/text-files/logoPage.ts) and [`app/home/text-files/learningBox.ts`](./app/home/text-files/learningBox.ts) |
| Course catalog controls and pagination | [`components/text-files/coursePage.ts`](./components/text-files/coursePage.ts) |
| Course card labels and defaults | [`common/text-files/courseBox.ts`](./common/text-files/courseBox.ts) |
| Course detail page labels, lesson fallbacks, and sample reviews | [`app/course/[id]/text-files/courseView.ts`](./app/course/[id]/text-files/courseView.ts) |
| Creator listing and profile labels | [`components/text-files/creatorsPage.ts`](./components/text-files/creatorsPage.ts), [`components/text-files/creatorCard.ts`](./components/text-files/creatorCard.ts), and [`components/text-files/creatorProfile.ts`](./components/text-files/creatorProfile.ts) |
| Header and footer wording | [`components/text-files/siteHeader.ts`](./components/text-files/siteHeader.ts) and [`components/text-files/footer.ts`](./components/text-files/footer.ts) |
| Sign-in and registration wording | [`components/text-files/authCard.ts`](./components/text-files/authCard.ts) and [`components/text-files/authLayout.ts`](./components/text-files/authLayout.ts) |
| Not-found page wording | [`components/text-files/notFound.ts`](./components/text-files/notFound.ts) |
| Guided-tour instructions and buttons | [`components/text-files/tutorialGuide.ts`](./components/text-files/tutorialGuide.ts) |
| Course-category names | [`common/text-files/courseCategories.ts`](./common/text-files/courseCategories.ts) |

Keep text-file names and exported object/property names unchanged when editing their values. Components import those names, so renaming one also requires updating its imports and references. Course titles, descriptions, prices, lesson content, and creator biographies are content data rather than shared interface labels; edit them in [`common/courseDetails.ts`](./common/courseDetails.ts) and [`common/creatorDetails.ts`](./common/creatorDetails.ts).

## Reusable course components

### Course card

[`common/courseBox.tsx`](./common/courseBox.tsx) is the reusable course card. It displays a course image, title, creator, rating, level, learner avatars, price, and a **View Course** link.

The card receives its course information as properties. For example, each course in [`common/courseDetails.ts`](./common/courseDetails.ts) provides a title, image path, creator name, rating, and price. The same card is reused wherever the course catalog is shown, so updating the shared card changes its presentation consistently.

### Course page

[`components/coursePage.tsx`](./components/coursePage.tsx) is the reusable course-listing page. It accepts a list of courses and optional display settings, such as:

- `showSearch` — show the course search field.
- `showFilters` — show level, category, and sorting controls.
- `showCategoryFilters` — show category buttons.
- `showPagination` — allow browsing multiple result pages.
- `coursesPerPage` — set how many cards appear on each page.

The full catalog uses these options on [`/course`](./app/course/page.tsx). The home page and creator profiles reuse the same course list component with different options and different course data. Creator profiles pass only courses whose `byWhom` name matches that creator, so other creators' courses are not included.

## Guided tour for first-time visitors

The guided tour is included in the shared layout, so it can introduce visitors to the main areas of the site. On the first visit in a browser, the visitor is asked whether they would like a tour.

- **Yes, show me around** starts the tour for the current page.
- **No thanks** declines the automatic tour.
- During a tour, visitors can go forward or back, skip the tour, or press Escape to close it.
- The **Take a tour** button lets visitors start the current page's tour manually later.
- Tour consent and completed page tours are remembered in that browser's local storage. This preference is per browser/device; clearing site data resets it.
- When a tour points to content further down the page, it scrolls to that area and outlines it. The tour follows the visitor's reduced-motion preference.

The tour behavior is in [`components/tutorialGuide.tsx`](./components/tutorialGuide.tsx), and the tour wording is in [`components/text-files/tutorialGuide.ts`](./components/text-files/tutorialGuide.ts). The guide supports the home page, course catalog, course details, creator listing/profile, and account pages.

Tour steps refer to page elements using `data-tutorial` labels. If a component or its label changes, update the matching target in `components/tutorialGuide.tsx` as well as the corresponding step wording. Steps whose targets are not present on a page are skipped.

## Images and other assets

Static images live in [`public/`](./public/). A file's URL starts after `public`; for example, `public/course/course1.jpg` is referenced as `/course/course1.jpg`. Keep the spelling and capitalization exact, because deployed servers use case-sensitive paths.

## Note about demo interactions

Some buttons and forms are visual examples and do not yet submit data or navigate to a working service. In particular, course enrollment, following a creator, social sign-in, and the creator call to action are not connected to backend workflows. The tour explains the visible page but does not activate those features.
