After cloning this repo make:
* cd /path/to/projects
* clone https://github.com/armicron/django-polls
* cd /path/to/projects/poll
* virtualenv --python=python2.7 env
* source env/bin/activate
* pip install -r requirements.txt
* pip install -r requirements.dev
* python manage.py syncdb
* python manage.py migrate
