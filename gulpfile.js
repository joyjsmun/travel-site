var gulp = require("gulp"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssvars = require("postcss-simple-vars"),
nested = require("postcss-nested"),
watch = require("gulp-watch");


gulp.task ("default",function(){
console.log("created gulp taks");
});


gulp.task("html",function(){
	console.log("something html");
});


gulp.task("styles",function(){
	return gulp.src("./app/assets/styles/style.css")
		.pipe(postcss([cssvars,nested,autoprefixer]))
		.pipe(gulp.dest("./app/temp/styles"));
});



gulp.task("watch",function(){
	watch("./app/index.html",function(){
		gulp.start("html");
	});

	watch("./app/assets/styles/**/*.css",function(){
		gulp.start("styles");
	});

});

