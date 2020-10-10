/* eslint-disable react/jsx-key */
import React from 'react'
export const onRenderBody = ({ setHeadComponents }) => {
	setHeadComponents([
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
	])
}
