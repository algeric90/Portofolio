import { animate, inView, press, hover } from "motion"

// HERO SECTION
inView("section#hero", (element) => {
	animate(
		element,
		{ opacity: 1, y: [-100, 0] },
		{
			duration: 1.2,
			easing: [0.17, 0.55, 0.55, 1],
		}
	)

	return () => animate(element, { opacity: 0, y:-100 })
});

// Gestures buttons
const gestureState = new WeakMap()
const transition = { type: "spring", stiffness: 500, damping: 25 }

const initialState = {
    isHovered: false,
    isPressed: false,
}

function setGesture(element, update) {
    const state = gestureState.get(element) || { ...initialState }
    const newState = { ...state, ...update }
    gestureState.set(element, newState)

    let scale = 1
    if (newState.isPressed) {
        scale = 0.8
    } else if (newState.isHovered) {
        scale = 1.1
    }
    animate(element, { scale }, transition)
}

hover(".btn", (element) => {
    setGesture(element, { isHovered: true })
    return () => setGesture(element, { isHovered: false })
});

press(".btn", (element) => {
    setGesture(element, { isPressed: true })
    return () => setGesture(element, { isPressed: false })
});
		


// ABOUT SECTIONS
inView("section #info", (element) => {
  animate(
		element,
		{ opacity: 1, x: [-100, 0] },
		{
			duration: 0.9,
			easing: [0.17, 0.55, 0.55, 1],
		}
  )

  return () => animate(element, { opacity: 0, x: -100 })
});

inView("section video", (element) => {
  animate(
		element,
		{ opacity: 1, x: [100, 0] },
		{
			duration: 0.9,
			easing: [0.17, 0.55, 0.55, 1],
		}
  )

  if (element) {
    element.setAttribute("autoplay", true);
    element.play();
  }

  return () => {
    animate(element, { opacity: 0, x: -100 });
    if (element) {
      element.pause();
      element.setAttribute("autoplay", false);
    }
  };
});


