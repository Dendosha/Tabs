const createRootFontSizeChecker = () => {
	const rootFontSizeCheckElement = document.createElement('div')
	rootFontSizeCheckElement.innerText = 'Text to check font size'
	rootFontSizeCheckElement.ariaHidden = true
	rootFontSizeCheckElement.classList.add('--font-size-checker')

	document.body.prepend(rootFontSizeCheckElement)

	return rootFontSizeCheckElement
}

export default createRootFontSizeChecker