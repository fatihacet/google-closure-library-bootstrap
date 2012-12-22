#!/bin/sh

java -jar tools/goog/stylesheets/closure-stylesheets.jar \
--output-file stylesheets/compiled/compiled.css \
--output-renaming-map-format CLOSURE_COMPILED \
--rename CLOSURE \
--output-renaming-map js/yourAppName/cssRenamingMap.js \
--allow-unrecognized-functions \
--allow-unrecognized-properties \
stylesheets/css/reset.css \
stylesheets/css/yourAppName.css
