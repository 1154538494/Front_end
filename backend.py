from flask import Flask
from flask_cors import CORS


app = Flask(__name__)
CORS(app, supports_credentials=True)


@app.route('/')
def hello_world():
    return "hello world"


@app.route('/login', methods=['GET', 'POST'])
def res():
    return "fuck world"


if __name__ == '__main__':
    app.run('127.0.0.1', 8000)
