import { Path, Point, view, setup } from "paper"

const begin = () => {

	const canvas: HTMLCanvasElement =
		document.getElementById("myCanvas") as HTMLCanvasElement

	setup(canvas)

	const path = new Path()
	path.strokeColor = "black"

	const start = new Point(100, 100)
	path.moveTo(start)
	path.lineTo(start.add([200, -50]))
	view.draw()

}

window.onload = begin


