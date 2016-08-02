BUILDFOLDER=build/
SOURCEFOLDER=src/
MAINJS=$(SOURCEFOLDER)Main.js

all: browserify

browserify:
	browserify $(MAINJS) > $(BUILDFOLDER)all.js

clean:
	rm -R $(BUILDFOLDER)*
