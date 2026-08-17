#!/bin/bash

echo "Running calculator application test..."

if [ -f "index.html" ] && [ -f "style.css" ] && [ -f "script.js" ]
then
    echo "All required files are present."
    echo "Test PASSED"
    exit 0
else
    echo "Required files are missing."
    echo "Test FAILED"
    exit 1
fi