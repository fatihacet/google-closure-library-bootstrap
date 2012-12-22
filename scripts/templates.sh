#!/bin/sh
#usage : ./scripts/templates.sh

java -jar tools/goog/templates/SoyToJsSrcCompiler.jar \
--shouldProvideRequireSoyNamespaces \
--shouldGenerateJsdoc \
--cssHandlingScheme GOOG \
--outputPathFormat js/yourAppName/templates/output/'{INPUT_FILE_NAME}.js' \
--inputPrefix js/yourAppName/templates/ \
/main.soy \
