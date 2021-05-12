up:
	docker-compose up -d

down:
	docker-compose down

rebuild:
	docker-compose up -d --build
	
debug-up:
	docker-compose -f docker-compose.debug.yml up -d

debug-down:
	docker-compose -f docker-compose.debug.yml down

debug-rebuild:
	docker-compose -f docker-compose.debug.yml up -d --build
