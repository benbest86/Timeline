// This is the main application configuration file.  It is a Grunt
// configuration file, which you can learn more about here:
// https://github.com/cowboy/grunt/blob/master/docs/configuring.md
//
// Make sure grunt and grunt-less are installed
// /path/to/timeline/$ npm install grunt
// /path/to/timeline/$ npm install grunt-less
//
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-less');
    grunt.initConfig({

        // concat our files
        concat: {
            timeline: {
                src: [
                        "source/js/VMM.Timeline.License.js",
                        "source/js/Core/VMM.js",
                        "source/js/Core/VMM.Library.js",
                        "source/js/Core/VMM.Browser.js",
                        "source/js/Core/VMM.FileExtention.js",
                        "source/js/Core/VMM.Date.js",
                        "source/js/Core/VMM.Util.js",
                        "source/js/Core/VMM.LoadLib.js",

                        "source/js/Media/VMM.ExternalAPI.js",
                        "source/js/Media/VMM.MediaElement.js",
                        "source/js/Media/VMM.MediaType.js",
                        "source/js/Media/VMM.Media.js",
                        "source/js/Media/VMM.TextElement.js",

                        "source/js/Slider/VMM.TouchSlider.js",
                        "source/js/Slider/VMM.DragSlider.js",
                        "source/js/Slider/VMM.Slider.js",
                        "source/js/Slider/VMM.Slider.Slide.js",

                        "source/js/VMM.Language.js",

                        "source/js/lib/AES.js",
                        "source/js/lib/bootstrap-tooltip.js",

                        "source/js/VMM.Timeline.js",

                        "source/js/VMM.Timeline.TimeNav.js",
                        "source/js/VMM.Timeline.DataObj.js"
                    ],
                dest: "compiled/js/timeline.js"
            },
            timelineEmbed: {
                src: ["source/js/lib/Embed.LoadLib.js", "source/js/Embed.js"],
                dest: "compiled/js/timeline-embed.js"
            }
        },
        min: {
            timeline: {
                src: ["compiled/js/timeline.js"],
                dest: "compiled/js/timeline-min.js"
            },
            timelineEmbed: {
                src: ["compiled/js/timeline-embed.js"],
                dest: "compiled/js/timeline-embed.js"
            }
        },
        less: {
            timeline: {
                src: ["source/less/VMM.Timeline.less"],
                dest: "compiled/css/timeline.css"
            },
            dark: {
                src: ["source/less/Theme/Dark.less"],
                dest: "compiled/css/themes/dark.css"
            }
        }
    });
    grunt.registerTask("default", "concat min less")
    grunt.registerTask("debug", "concat less")
}
