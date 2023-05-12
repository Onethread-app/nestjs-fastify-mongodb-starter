#!/bin/bash

# Check if the user provided an argument
if [ -z "$1" ]; then
    echo "Please provide a module name."
    exit 1
fi

# Create the module structure
mkdir -p src/modules/$1/controllers
mkdir -p src/modules/$1/dto
mkdir -p src/modules/$1/models
mkdir -p src/modules/$1/repositories
mkdir -p src/modules/$1/services
touch src/modules/$1/$1.module.ts 

# Generate the module, service, and controller
nest g module modules/$1/$1
nest g service modules/$1/$1/services/$1
nest g controller modules/$1/$1/controllers/$1

echo "Succefully created $1 under module. Enjoy your time."