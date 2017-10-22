$(document).ready(e => {
	var showcase = new Vue({
		el: '#show-case',
		data : function() {
			return {
				projects: [
					{
						id: 1,
						title: "CKEditor Image Uploader Plugin",
						github: "ckeditor-ImageUploader",
						image: "images/showcase/ckeditor.png",
						detail: "Plugin enables ckeditor to upload image without file browser"
					},
					{
						id: 2,
						title: "Python Interactive Shell in Node",
						github: "Python-In-NodeJS",
						image: "images/showcase/pythonshell.png",
						detail: "Python Interactive Shell in Socket.io and NodeJS"
					},
					{
						id: 3,
						title: "Astrophysical Fluid Stimulation",
						github: "Fluid-Stimulation",
						image: "images/showcase/simulation.png",
						report: "https://goo.gl/y5anBQ",
						detail: "Astrophysical fluid stimuation's implementation in Java"
					}
				]
			}
		}
	})

	console.log(showcase)
})

