#!/bin/sh
#usage : ./scripts/deps.sh

tools/goog/build/depswriter.py \
--root_with_prefix='js/ ../../../../' \
--output_file='js/deps.js'
