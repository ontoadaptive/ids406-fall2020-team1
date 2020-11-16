# proc_oop_fp.py

# NAA
# - https://www.cdc.gov/bloodpressure/about.htm

"""
Normal	systolic: less than 120 mm Hg
    diastolic: less than 80 mm Hg	Normal	systolic: less than 120 mm Hg
    diastolic: less than 80 mm Hg

At Risk (prehypertension)	systolic: 120–139 mm Hg
    diastolic: 80–89 mm Hg	Elevated	systolic: 120–129 mm Hg
    diastolic: less than 80 mm Hg

High Blood Pressure (hypertension)	systolic: 140 mm Hg or higher
    diastolic: 90 mm Hg or higher	High blood pressure (hypertension)	systolic: 130 mm Hg or higher
    diastolic: 80 mm Hg or higher
"""


def do_proc(bps):
    print("*** do_proc enter.")
    risk_bps = {}

    # NAA
    # - imperative loop
    for i, bp in enumerate(bps):
        # NAA.
        # - imperative filter
        if bp >= 140:
            risk_bps[i] = bp

    return risk_bps


class BpRiskFinder:
    bps = []
    risk_bps = {}

    def __init__(self, bps):
        self.bps = bps

    def find_risks(self):
        for i, bp in enumerate(self.bps):
            if bp >= 140:
                self.risk_bps[i] = bp

    def get_risks(self):
        return self.risk_bps


# NAA
# - https://www.python.org/dev/peps/pep-3119/
def do_oop(bps):
    print("*** do_oop enter.")
    brf = BpRiskFinder(bps)
    brf.find_risks()
    return brf.get_risks()


def do_fp(bps):
    print("*** do_fp enter.")
    # NAA
    # - declarative iteration and filter
    # return [bp >= 140 for bp in bps]
    return {k: v for k, v in enumerate(bps) if v >= 140}


def main(bps, bp_risks):
    expected = bp_risks

    # 1.
    actuals = do_proc(bps)
    assert expected == actuals
    print("actuals: {0}".format(actuals))

    # 2.
    actuals = do_oop(bps)
    assert expected == actuals
    print("actuals: {0}".format(actuals))

    # 3.
    actuals = do_fp(bps)
    assert expected == actuals
    print("actuals: {0}".format(actuals))


if __name__ == "__main__":
    # input
    bps = [120, 118, 119, 125, 130, 135, 140, 141, 142, 130]
    # expected
    # - 0-indexed
    bp_risks = {6: 140, 7: 141, 8: 142}

    main(bps, bp_risks)
