import * as React from 'react'
import * as Styled from './styles'

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
	items: JSX.Element[]
}

const Grid: React.FC<GridProps> = ({ items, style }) => {
	const itemColumns = React.useMemo(() => {
		if (items.length <= 0) {
			return null
		}

		return items.length < 3 ? items.length : 6
	}, [items])

	const gridStyle = React.useMemo(() => {
		if (!itemColumns) {
			return style
		}

		return { ...style, gridTemplateColumns: `repeat(${itemColumns}, 1fr)` }
	}, [itemColumns, style])

	return (
		<Styled.Grid style={gridStyle}>
			{items.map((element, i) => (
				<Styled.GridItem
					key={`grid-item-${i}`}
					style={itemColumns && itemColumns < 3 ? { gridColumn: 'span 1', gridColumnEnd: 'auto' } : undefined}>
					{element}
				</Styled.GridItem>
			))}
		</Styled.Grid>
	)
}

export default Grid
