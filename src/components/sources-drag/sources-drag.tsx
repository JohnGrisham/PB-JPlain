import './styles.css'
import * as React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Bias } from '../../enums'
import { getLandingSources } from '../../logic/get-landing-sources'

interface ISourcesDragProps {
	pageWidth?: number
}

export const SourcesDrag: React.FC<ISourcesDragProps> = ({ pageWidth }) => {
	const sourcesRef = React.createRef<HTMLDivElement>()
	const x = useMotionValue(0)
	const xInput = React.useMemo(() => {
		if (!pageWidth || pageWidth <= 700) {
			return [-100, 0, 100]
		}
		return [-(pageWidth / 3), 0, pageWidth / 3]
	}, [pageWidth])

	const background = useTransform(x, xInput, ['#001aff', '#ffffff', '#ff0000'])

	const republicanPath = useTransform(x, [0, xInput[xInput.length - 1]], [0, 1])
	const democratPath = useTransform(x, [-50, xInput[0]], [0, 1])
	const questionMarkPath = useTransform(x, [-50, 0, 50], [0, 1, 0])

	React.useEffect(() => {
		x.set(0)
	}, [pageWidth, x])

	return (
		<div className="sources" ref={sourcesRef}>
			<motion.div className="drag-container" style={{ background }}>
				<h2>Our Sources</h2>
				<motion.div
					className="box"
					style={{ x }}
					drag="x"
					dragConstraints={sourcesRef}
					dragElastic={0}
					onDragEnd={() => x.stop()}>
					<svg className="progress-icon" viewBox="-440 -460 1480 1224">
						<motion.path
							fill="currentColor"
							strokeWidth="2"
							stroke="#10152d"
							d="M637.3 256.9l-19.6-29.4c-28.2-42.3-75.3-67.5-126.1-67.5H256l-81.2-81.2c20.1-20.1 22.6-51.1 7.5-73.9-3.4-5.2-10.8-5.9-15.2-1.5l-41.8 41.8L82.4 2.4c-3.6-3.6-9.6-3-12.4 1.2-12.3 18.6-10.3 44 6.1 60.4 3.3 3.3 7.3 5.3 11.3 7.5-2.2 1.7-4.7 3.1-6.4 5.4L6.4 176.2c-7.3 9.7-8.4 22.7-3 33.5l14.3 28.6c5.4 10.8 16.5 17.7 28.6 17.7h31c8.5 0 16.6-3.4 22.6-9.4L138 212l54 108h352v-77.8c16.2 12.2 18.3 17.6 40.1 50.3 4.9 7.4 14.8 9.3 22.2 4.4l26.6-17.7c7.3-5 9.3-14.9 4.4-22.3zm-341.1-13.6l-16.5 16.1 3.9 22.7c.7 4.1-3.6 7.2-7.2 5.3L256 276.7l-20.4 10.7c-3.6 1.9-7.9-1.2-7.2-5.3l3.9-22.7-16.5-16.1c-3-2.9-1.3-7.9 2.8-8.5l22.8-3.3 10.2-20.7c1.8-3.7 7.1-3.7 9 0l10.2 20.7 22.8 3.3c4 .6 5.6 5.6 2.6 8.5zm112 0l-16.5 16.1 3.9 22.7c.7 4.1-3.6 7.2-7.2 5.3L368 276.7l-20.4 10.7c-3.6 1.9-7.9-1.2-7.2-5.3l3.9-22.7-16.5-16.1c-3-2.9-1.3-7.9 2.8-8.5l22.8-3.3 10.2-20.7c1.8-3.7 7.1-3.7 9 0l10.2 20.7 22.8 3.3c4 .6 5.6 5.6 2.6 8.5zm112 0l-16.5 16.1 3.9 22.7c.7 4.1-3.6 7.2-7.2 5.3L480 276.7l-20.4 10.7c-3.6 1.9-7.9-1.2-7.2-5.3l3.9-22.7-16.5-16.1c-3-2.9-1.3-7.9 2.8-8.5l22.8-3.3 10.2-20.7c1.8-3.7 7.1-3.7 9 0l10.2 20.7 22.8 3.3c4 .6 5.6 5.6 2.6 8.5zM192 496c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-80h160v80c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V352H192v144z"
							style={{ opacity: democratPath }}
						/>
						<motion.path
							fill="currentColor"
							strokeWidth="2"
							stroke="#10152d"
							transform="translate(90, 0)"
							d="M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z"
							style={{ opacity: questionMarkPath }}
						/>
						<motion.path
							fill="currentColor"
							strokeWidth="2"
							stroke="#10152d"
							d="M544 192c0-88.4-71.6-160-160-160H160C71.6 32 0 103.6 0 192v64h544v-64zm-367.7-21.6l-19.8 19.3 4.7 27.3c.8 4.9-4.3 8.6-8.7 6.3L128 210.4l-24.5 12.9c-4.3 2.3-9.5-1.4-8.7-6.3l4.7-27.3-19.8-19.3c-3.6-3.5-1.6-9.5 3.3-10.2l27.4-4 12.2-24.8c2.2-4.5 8.6-4.4 10.7 0l12.2 24.8 27.4 4c5 .7 6.9 6.7 3.4 10.2zm144 0l-19.8 19.3 4.7 27.3c.8 4.9-4.3 8.6-8.7 6.3L272 210.4l-24.5 12.9c-4.3 2.3-9.5-1.4-8.7-6.3l4.7-27.3-19.8-19.3c-3.6-3.5-1.6-9.5 3.3-10.2l27.4-4 12.2-24.8c2.2-4.5 8.6-4.4 10.7 0l12.2 24.8 27.4 4c5 .7 6.9 6.7 3.4 10.2zm144 0l-19.8 19.3 4.7 27.3c.8 4.9-4.3 8.6-8.7 6.3L416 210.4l-24.5 12.9c-4.3 2.3-9.5-1.4-8.7-6.3l4.7-27.3-19.8-19.3c-3.6-3.5-1.6-9.5 3.3-10.2l27.4-4 12.2-24.8c2.2-4.5 8.6-4.4 10.7 0l12.2 24.8 27.4 4c5 .7 6.9 6.7 3.4 10.2zM624 320h-32c-8.8 0-16 7.2-16 16v64c0 8.8-7.2 16-16 16s-16-7.2-16-16V288H0v176c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16v-80h192v80c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V352h32v43.3c0 41.8 30 80.1 71.6 84.3 47.8 4.9 88.4-32.7 88.4-79.6v-64c0-8.8-7.2-16-16-16z"
							style={{ opacity: republicanPath }}
						/>
					</svg>
				</motion.div>
				<h4>Drag the ballot box to see more...</h4>
				<motion.ul className="sources-list">
					{getLandingSources().map(({ bias, name }, i) => {
						const isLeaning = bias !== 0

						return (
							<motion.li
								className={`${Bias[bias]}`}
								key={`landing-source-${i}`}
								style={isLeaning ? { opacity: bias > 0 ? republicanPath : democratPath } : undefined}>
								{name}
							</motion.li>
						)
					})}
				</motion.ul>
				<h4>And many more!</h4>
			</motion.div>
		</div>
	)
}
