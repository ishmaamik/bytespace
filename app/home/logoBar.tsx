import ImageTextBox from "../../common/imageTextBox";

const logos = [
	{ imageSrc: "/logo1.png", imageLogo:"/logoipsum.png", imageAlt: "Logo 1", text: "Logo 1" },
	{ imageSrc: "/logo2.png", imageLogo:"/logoipsum.png", imageAlt: "Logo 2", text: "Logo 2" },
	{ imageSrc: "/logo3.png", imageLogo:"/logoipsum.png", imageAlt: "Logo 3", text: "Logo 3" },
	{ imageSrc: "/logo4.png", imageLogo:"/logoipsum.png", imageAlt: "Logo 4", text: "Logo 4" },
	{ imageSrc: "/logo5.png", imageLogo:"/logoipsum.png", imageAlt: "Logo 5", text: "Logo 5" },
];

export default function LogoBar() {
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
