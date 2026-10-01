import ImageTextBox from "../common/imageTextBox";

const logos = [
	{ imageSrc: "/icons/logo1.png", imageLogo: "/icons/logoipsum.png", imageAlt: "Logo 1" },
	{ imageSrc: "/icons/logo2.png", imageLogo: "/icons/logoipsum.png", imageAlt: "Logo 2" },
	{ imageSrc: "/icons/logo3.png", imageLogo: "/icons/logoipsum.png", imageAlt: "Logo 3" },
	{ imageSrc: "/icons/logo4.png", imageLogo: "/icons/logoipsum.png", imageAlt: "Logo 4" },
	{ imageSrc: "/icons/logo5.png", imageLogo: "/icons/logoipsum.png", imageAlt: "Logo 5" },
];

export default function LogoPage() {
	return (
		<section className="flex w-full justify-center overflow-x-auto bg-[#F5F5F6] px-6 py-10">
			<div className="mx-auto flex min-w-max items-center justify-center gap-[72px]">
				{logos.map((logo) => (
					<ImageTextBox key={logo.imageSrc} {...logo} />
				))}
			</div>
		</section>
	);
}
