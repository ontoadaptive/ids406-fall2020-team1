# #import django.db.models.Model
# import json

# def seeder (file):
#     #how to open json file? 
#     f = open(file)
#     data = json.load(f)
#     #for row in rows:
#         #get datetime, patient, heart_rate, unit
#     f.close()
#     return f

# def main():
#     file = './output.json'
#     seed = seeder(file)
    
#     if __name__ == '__main__':
#         main()


from snobird_v7.models import Timeline
import json

# f = open('output.json','r').read()

# data = json.loads(f)

#Timeline(datetime="a", patient="a",heart_rate="74",unit="min")
Timeline.create_timeline('','Mary',53.3,'Men' )
Timeline.save()