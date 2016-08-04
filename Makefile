BUILDFOLDER=build/
SOURCEFOLDER=src/
STYLEFOLDER=style/
MAINJS=$(SOURCEFOLDER)Main.js

all: browserify style

browserify:
	browserify $(MAINJS) > $(BUILDFOLDER)all.js

style:
	cat $(STYLEFOLDER)* > $(BUILDFOLDER)all.css

watch: all
	nodemon -w $(SOURCEFOLDER) -w $(STYLEFOLDER) -e .css,.js --exec "npm run build"

clean:
	rm -R $(BUILDFOLDER)*

.PHONY: style
