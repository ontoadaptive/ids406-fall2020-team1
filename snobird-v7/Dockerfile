
FROM python:3.8.3-alpine

WORKDIR usr/scr/snobird-v7

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev

RUN apk add --update nodejs nodejs-npm

COPY . .

RUN pip install --upgrade pip
RUN pip install -r requirement.txt

ENTRYPOINT ["sh","/usr/scr/snobird-v7/entrypoint.sh"]
