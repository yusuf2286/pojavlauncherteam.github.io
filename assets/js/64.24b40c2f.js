(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{450:function(e,t,o){"use strict";o.r(t);var r=o(21),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"preliminary-support-for-1-17"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#preliminary-support-for-1-17"}},[e._v("#")]),e._v(" Preliminary support for 1.17")]),e._v(" "),o("p",[e._v("After many days and nights spent working on a temporary solution (and trust me, this is definitely temporary), we've gotten something done: support for 1.17 is here. With backporting work done by artdeell and Java 17 ported by DuyKhanhTran, 1.17 is usable and playable with gl4es. This also applies with 1.17.1 and 1.18 experimental snapshots.")]),e._v(" "),o("p",[e._v("Here's how to get it to work. You need to have a "),o("strong",[e._v("GitHub account")]),e._v(" in order to download the builds and JRE. Regardless of your platform, you'll need to download "),o("a",{attrs:{href:"https://cdn.discordapp.com/attachments/724164160761626624/860864619350065162/assets-v0.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("this resource pack"),o("OutboundLink")],1),e._v(". This is artdeell's patch for 1.17 on gl4es.")]),e._v(" "),o("p",[e._v("• Known issues:")]),e._v(" "),o("ul",[o("li",[e._v("[Android only] Crosshair icon doesn’t render.")]),e._v(" "),o("li",[e._v("You can tell us in "),o("a",{attrs:{href:"https://discord.gg/6RpEJda",target:"_blank",rel:"noopener noreferrer"}},[e._v("our Discord server"),o("OutboundLink")],1),e._v(" or open an issue if you found one.")]),e._v(" "),o("li",[e._v("UPDATE: 32-bit platforms (ARMv7 and i386) are currently broken for various reasons. We are looking for a solution.")])]),e._v(" "),o("h3",{attrs:{id:"android"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#android"}},[e._v("#")]),e._v(" Android:")]),e._v(" "),o("ul",[o("li",[e._v("Download latest build: "),o("a",{attrs:{href:"https://github.com/PojavLauncherTeam/PojavLauncher/actions?query=branch%3Av3_openjdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[e._v("Download JRE17: "),o("a",{attrs:{href:"https://github.com/PojavLauncherTeam/android-openjdk-build-multiarch/actions?query=branch%3Abuildjre16",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(". You need to download the artifact that matches your device architecture: "),o("code",[e._v("jre17-<architecture>")]),e._v(", don’t pick jdk17 or debuginfo.")]),e._v(" "),o("li",[e._v("When you install the APK, it will be displayed as second app if you have one installed before.")]),e._v(" "),o("li",[e._v("Go to launcher settings.")]),e._v(" "),o("li",[e._v("Choose Manage runtime -> Add new. Pick the downloaded JRE17 runtime there.")]),e._v(" "),o("li",[e._v("Switch renderer to gl4es 1.1.5 - OpenGL ES 3.")]),e._v(" "),o("li",[o("s",[e._v("On 32-bit, you need to add "),o("code",[e._v("-Xss1m")]),e._v(" to JVM arguments, otherwise Java will crash.")])]),e._v(" "),o("li",[e._v("Now launch Minecraft 1.17 and enjoy!")])]),e._v(" "),o("h3",{attrs:{id:"ios"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ios"}},[e._v("#")]),e._v(" iOS:")]),e._v(" "),o("ul",[o("li",[e._v("Download latest build: "),o("a",{attrs:{href:"https://github.com/PojavLauncherTeam/PojavLauncher_iOS/actions?query=branch%3Amain",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Create file "),o("code",[e._v("/var/mobile/Documents/.pojavlauncher/custom_env.txt")]),e._v(" and write into: "),o("code",[e._v("GL4ES_LIBNAME=libgl4es_115.dylib")]),e._v(".")]),e._v(" "),o("li",[e._v("Go to "),o("code",[e._v("/var/mobile/Documents/minecraft/resourcepacks")]),e._v(", place the downloaded resource pack here.")]),e._v(" "),o("li",[e._v("Go up (go to "),o("code",[e._v("minecraft")]),e._v(" folder), edit options.txt: modify resourcePacks key:")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('resourcePacks:["assets-v0.zip"]\n')])])]),o("ul",[o("li",[e._v("Now launch Minecraft 1.17 and enjoy!")])]),e._v(" "),o("p",[e._v("Until we get a more permenant solution to fix 1.17 and newer, this is what we have. It's not perfect, but it works. We hope to see a version of gl4es that translates OpenGL 3 to OpenGL ES, or continue to work on Zink as a backup method if all else fails.*")])])}),[],!1,null,null,null);t.default=a.exports}}]);