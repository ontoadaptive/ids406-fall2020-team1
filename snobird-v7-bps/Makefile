help:
	@echo docker-pull
	@echo docker-run

docker-pull:
	docker pull openmhealth/omh-sample-data-generator:latest

docker-run:
	docker run --rm -v `pwd`:/opt/omh-sample-data-generator/mount openmhealth/omh-sample-data-generator:latest

run: docker-run 

clean:
	rm output.json
