from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']

    # Validate the user's credentials against the database or any authentication mechanism
    if username == 'admin' and password == 'password':
        # Successful login
        return 'Login successful!'
    else:
        # Invalid credentials
        return 'Invalid username/email or password. Please try again.'

if __name__ == '__main__':
    app.run()