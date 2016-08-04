BUILDFOLDER=build/
SOURCEFOLDER=src/
STYLEFOLDER=style/
MAINJS=$(SOURCEFOLDER)Main.js

all: browserify style

browserify:
	browserify $(MAINJS) > $(BUILDFOLDER)all.js

style:
	cat $(STYLEFOLDER)* > $(BUILDFOLDER)all.css

clean:
	rm -R $(BUILDFOLDER)*

.PHONY: style
