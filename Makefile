BUILDDIR=build/
SOURCEDIR=src/
STYLEDIR=style/
MAINJS=$(SOURCEDIR)Main.js

all: browserify style

browserify:
	browserify $(MAINJS) > $(BUILDDIR)all.js

style:
	cat $(STYLEDIR)* > $(BUILDDIR)all.css

watch: all
	nodemon -w $(SOURCEDIR) -w $(STYLEDIR) -e .css,.js --exec "npm run build"

clean:
	rm -R $(BUILDDIR)*

.PHONY: style
