# add_beta_bps.py
import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
import django

django.setup()

from datetime import datetime
from snobird_v7.models import Observation


def get_observations_count():
    observations = list(Observation.objects.all())
    for i, o in enumerate(observations):
        print("i: {0}; o: {1}".format(i, o))

    n = len(observations)
    print("n: {0}".format(n))
    return n


def delete_observations():
    Observation.objects.all().delete()


def create_observations():
    ids = [123, 124, 125]

    for id in ids:
        name = "obs-{0}".format(id)
        o = Observation(id=id, name=name, time_stamp=datetime.now())
        o.save()


def main():
    delete_observations()

    n = get_observations_count()
    assert n == 0

    create_observations()

    n = get_observations_count()
    assert n == 3


if __name__ == "__main__":
    main()
