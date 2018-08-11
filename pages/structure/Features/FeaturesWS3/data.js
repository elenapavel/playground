import { STATIC } from "~/playground";

export default {
	heading: "Misused mobile UX patterns",
	previewImageSrc: `${STATIC}/images/smartphone.svg`,
	items: [
		{
			icon: "ion-ios-checkmark-outline",
			heading: "1. Hidden navigation",
			description:
				"At least half million posts have been written about the hamburger menu, mostly by designers, arguing against it. If you missed all, read one or two, but in a nutshell, it’s not about the icon itself but rather about hiding the navigation behind an icon.",
		},
		{
			icon: "ion-ios-checkmark-outline",
			heading: "2. Icons, icons everywhere",
			description:
				"Due to the limited screen estate, it also seems a no brainer to save space by replacing text labels with icons wherever possible. Pictograms take less space, they don’t have to be translated, and people are familiar with these after all, right? And every other app does that.",
		},
		{
			icon: "ion-ios-checkmark-outline",
			heading: "3. Gesture based navigation",
			description:
				"When Apple introduced the iPhone in 2007, multi-touch technology got mainstream attention and users learned that they could not only point and tap on the interface but also zoom, pinch and swipe it.",
		},
		{
			icon: "ion-ios-checkmark-outline",
			heading: "4. Tutor overlays as onboarding",
			description:
				"Onboarding, a recently hot UX topic, refers to the first encounter between the user and the app. In many cases, this simply means showing some overlay tutorials to the user to explain the interface.",
		},
		{
			icon: "ion-ios-checkmark-outline",
			heading: "5. Creative but unintuitive empty states",
			description:
				"An empty state is something that is easily overlooked by inexperienced designers, however, they can be an important factor when it comes to an app’s overall user experience.",
		},
		{
			icon: "ion-ios-checkmark-outline",
			heading: "6. Question everything",
			description:
				"Don’t get me wrong: design patterns and best practices are still your friends. Keep in mind though that apps and users are different: one solution might work for well in an app and fail in yours. It’s not a one-size-fits-all thing. Plus, you never know why an app was designed in a certain way.",
		},
	],
};
