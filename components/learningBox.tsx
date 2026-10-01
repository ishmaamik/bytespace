import ImageTextBox from "../common/imageTextBox";
import { learningList } from "../common/learningList";

export default function LearningBox() {
	return (
		<section className="w-full bg-white px-6 lg:pb-[120px] pb-8">
			<div className="mx-auto max-w-5xl text-center">

				<div className="mt-12 grid grid-cols-2 justify-items-center gap-5 sm:grid-cols-3 lg:grid-cols-6" data-tutorial="learning-paths">
					{learningList.map((item) => (
						<div key={item.text} className="flex h-[167px] w-full max-w-[167px] items-center justify-center rounded-[18px] border border-[#d7dce2] bg-white shadow-[0_4px_12px_rgba(25,35,52,0.02)]">
							<ImageTextBox
								{...item}
								imageWidth={44}
								imageHeight={44}
								imageClassName="h-15 w-15 rounded-full bg-[#c8ff16] object-contain p-3"
								className="flex-col gap-3"
								textClassName="text-sm text-[#222222]"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
