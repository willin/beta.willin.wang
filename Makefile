.PHONY: clean dev build
all: clean dev

YARN := yarn

clean:
	rm -rf `find . -name build -not -path "./node_modules/*"`
	rm -rf .cache

dev:
	yarn dev

build:
	# npm run build:prisma
	npm run build:css
	NODE_ENV=production npx remix build
