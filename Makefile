debug-up:
	docker-compose -f docker-compose.debug.yml up -d

debug-down:
	docker-compose -f docker-compose.debug.yml down

debug-rebuild:
	docker-compose -f docker-compose.debug.yml up -d --build
