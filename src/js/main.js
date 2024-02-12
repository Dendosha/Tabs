// Prevent content shifting when hiding scrollbar
import preventContentShift from "./libs/preventContentShift.js"



// Burger menu
// import BurgerMenu from "./libs/burgerMenu.js"

// const burgerButton = document.querySelector('button.--burger')
// const navigation = document.getElementById('navigation-body')
// const closeMediaQuery = matchMedia(`(min-width: ${1000 / 16}em)`)

// function resetBurgerAnimation() {
// 	burgerButton.firstElementChild.style.animationPlayState = 'paused'
// 	burgerButton.firstElementChild.style.animationDirection = 'reverse'
// }

// function openCallback() {
// 	preventContentShift(0)

// 	burgerButton.firstElementChild.style.animationPlayState = 'running'
// 	burgerButton.firstElementChild.style.animationDirection = 'normal'
// }

// new BurgerMenu(burgerButton, navigation, {
// 	closeMediaQuery,
// 	openCallback: [openCallback],
// 	closeCallback: [preventContentShift, 1],
// 	setupCallback: [resetBurgerAnimation],
// 	mediaCallback: [resetBurgerAnimation],
// })



// Tabs
// import Tabs from "./libs/tabs.js"



// Element mover
// import ElementMover from "./libs/elementMover.js"

// const elementsToMove = document.querySelectorAll('[data-mover]')
// elementsToMove.forEach(element => {
// 	const options = element.dataset.mover.split(',')

// 	const newParent = document.getElementById(options[2]?.trim())
// 	const position = options[3]?.trim() ?? '-1'

// 	new ElementMover(element, element.parentElement, newParent, {
// 		queryType: options[0]?.trim(),
// 		querySize: options[1]?.trim(),
// 		position,
// 		// newParentCallback: [console.log, 'new'],
// 		// oldParentCallback: [console.log, 'old'],
// 	})
// })



// Custom select
// import SelectList from "./libs/selectlist.js";

// const selectLists = document.querySelectorAll('[data-custom-element="selectlist"]')

// selectLists.forEach(element => {
// 	const options = {
// 		placeholder: element.dataset?.placeholder,
// 		label: element.dataset?.label,
// 		labelledby: element.dataset?.labelledby,
// 		listboxId: element.dataset.listboxId`,
// 		selectlistItems: element.dataset?.selectlistItems?.split(/;\s*/g),
// 		selectedItemIndex: element.dataset?.selectedItemIndex,
// 		visibleItemsCount: 4,
// 	}

// 	new SelectList(element, options)
// })



// Modal window
// import ModalWindow from "./libs/modalWindow.js"

// const modals = document.querySelectorAll('[data-custom-element="dialog"]')

// modals.forEach(element => {
// 	const options = {
// 		state: element.dataset.state ?? 'closed',
// 		closeButtonSelector: '[data-close-button]',
// 		openButtonSelector: `[data-modal-open = ${element.id}]`,
// 		openCallback: [preventContentShift, 0],
// 		closeCallback: [preventContentShift, 1],
// 	}

// 	new ModalWindow(element, options)
// })



// Header scripts
import "./components/blocks/header.js"

// Page scripts
import "./components/pages/index.js"

// Footer scripts
import "./components/blocks/footer.js"

// Other scripts